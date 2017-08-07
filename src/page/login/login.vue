<template>
    <div class="loginContainer">
        <head-top goBack="true" logins="true">
            <!-- <div slot="changeLogin" class="change_login" @click="changeLoginWay">{{loginWay? "密码登录":"短信登录"}}</div> -->
        </head-top>
        <div class="logo_box">
        	<img src="../../images/denglu_logo.png">
        </div>
        <form class="loginForm">
            <section class="input_container phone_number">
            	<label>手机号</label>
            	<div class="dlsop">
					<input type="text" placeholder="请输入手机号" name="phone" maxlength="11" v-model="phoneNumber">
            	</div>
                	
                
            </section>
            <section class="input_container">
            	<label>验证码</label>
                <input type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
                <button @click.prevent="getVerifyCode" :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
                <button  @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>
            </section>
        </form>
        <div class="login_container" @click="mobileLogin">登录</div>
        <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>
    import headTop from '../../components/header/head'
    import alertTip from '../../components/common/alertTip'
    import {localapi, proapi, imgBaseUrl} from 'src/config/env'
    import {mapState, mapMutations} from 'vuex'
    import {mobileCode, checkExsis, sendLogin, getcaptchas, accountLogin} from '../../service/getData'
    import {getStore} from 'src/config/mUtils'


    export default {
        data(){
            return {
                loginWay: true, //登录方式，默认短信登录
                phoneNumber: null, //电话号码
                mobileCode: null, //短信验证码
                validate_token: null, //获取短信时返回的验证值，登录时需要
                computedTime: 0, //倒数记时
                userInfo: null, //获取到的用户信息
                userAccount: null, //用户名
                passWord: null, //密码
                captchaCodeImg: null, //验证码地址
                codeNumber: null, //验证码
                showAlert: false, //显示提示组件
                alertText: null, //提示的内容
            }
        },
        //创建初始化ajax请求数据
        created(){
            //this.getCaptchaCode();
            //window.location.href="http://fanyi.baidu.com/#en/zh/created"
            
            //初始化判断是否有微信授权
            this.enshrine();
            //console.log(getStore('userId'))
        },
        //声明页面需要引入的组件
        components: {
            headTop,
            alertTip,
        },
        //计算 实时计算
        computed: {
            //判断手机号码
            rightPhoneNumber: function (){
                return /^1\d{10}$/gi.test(this.phoneNumber)
            }
        },
        //组件方法
        methods: {
            ...mapMutations([
                'RECORD_USERINFO',
            ]),
            //获取短信验证码
            async getVerifyCode(){
                if (this.rightPhoneNumber) {
                    this.computedTime = 60;
                    this.timer = setInterval(() => {
                        this.computedTime --;
                        if (this.computedTime == 0) {
                            clearInterval(this.timer)
                        }
                    }, 1000)
                    //判读用户是否存在
                    /*let exsis = await checkExsis(this.phoneNumber, 'mobile');
                    if (exsis.message) {
                        this.showAlert = true;
                        this.alertText = exsis.message;
                        return
                    }else if(!exsis.is_exists) {
                        this.showAlert = true;
                        this.alertText = '您输入的手机号尚未绑定';
                        return
                    }*/
                    //发送短信验证码
                    let res = await mobileCode(this.phoneNumber);
                    if (res.success) {
                        this.showAlert = true;
                        this.alertText = res.message;
                        return
                    }
                    this.validate_token = res.validate_token;
                }
            },
            //发送登录信息
            async mobileLogin(){
                if (this.loginWay) {
                    if (!this.rightPhoneNumber) {
                        this.showAlert = true;
                        this.alertText = '手机号码不正确';
                        return
                    }else if(!(/^\d{6}$/gi.test(this.mobileCode))){
                        this.showAlert = true;
                        this.alertText = '短信验证码不正确';
                        return
                    }
                    //手机号登录
                    this.userInfo = await sendLogin(this.phoneNumber,this.mobileCode,this.$route.query.code);
                }
                //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
                if(this.userInfo.success){
                	this.RECORD_USERINFO(this.userInfo.object);
                    this.$router.go(-1);
                }else{
                	this.showAlert = true;
                    this.alertText = this.userInfo.message;
                }
                /*if (!this.userInfo.object.userId) {
                    this.showAlert = true;
                    this.alertText = this.userInfo.message;
                    //if (!this.loginWay) this.getCaptchaCode();
                }else{
                    this.RECORD_USERINFO(this.userInfo.object);
                    this.$router.go(-1);
                    //this.$router.push('market')

                }*/
            },
            closeTip(){
                this.showAlert = false;
            },


            enshrine:function(){
            	if(!getStore('userId')&&!this.$route.query.code){
            		var appid="wx44f0c0399de653fd";
		            var resultUrl=encodeURI("http://zisha.meiyuefu.com/login");
		            var open="https://open.weixin.qq.com/connect/oauth2/authorize?appid="
		                + appid
		                + "&redirect_uri="
		                + resultUrl
		                + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
		            //this.$router.push('market')
		            //
		            window.location.href=open;
            	}else if(this.$route.query.code){
            		
            	}
            	//console.log(getStore('userId'))
	        }



        }
    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .logo_box{
    	text-align: center;
    	margin-bottom:2rem;
    	img{
    		width:3.5rem;
    	}
    }
    .loginContainer{
    	width:100%;
        height:100%;
        position:fixed;
        left:0;
        top:0;

        background:url(../../images/denglu_bg.png) no-repeat;
        background-size:100%;
        padding-top: 3.45rem;
        p, span, input{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .change_login{
        position: absolute;
        @include ct;
        right: 0.75rem;
        @include sc(.7rem, #fff);
    }

    .loginForm{
        margin-top: .6rem;
        margin-bottom:1.5rem;
        padding:0 .6rem;
        .input_container{

            //display: flex;
            //justify-content: space-between;
            padding: .6rem .8rem;
            border-bottom: 1px solid #f1f1f1;
            border-bottom: 1px solid #ddd;
            font-size:.7rem;
            position: relative;
            label {
        	    width: 3rem;
    			margin-left: 0;
    			float: left;
            }
            .dlsop{
            	//margin-left: 77px;
            }
            input{
                @include sc(.7rem, #666);
                background:transparent;
            }
            button{
                //@include sc(.65rem, #fff);
                font-size:.65rem;
                color:#B4282D;
                font-family: Helvetica Neue,Tahoma,Arial;
                padding: .28rem .4rem;
                border: 1px;
               // border-radius: 0.15rem;
                width:5rem;
                position: absolute; 
                right: 0;
    			top: .4rem;
    			background:none;
            }
            .right_phone_number{
                color: #B4282D;

            }
        }
        .phone_number{
            padding: .3rem .8rem;
        }
        .captcha_code_container{
            height: 2.2rem;
            .img_change_img{
                display: flex;
                align-items: center;
                img{
                    @include wh(3.5rem, 1.5rem);
                    margin-right: .2rem;
                }
                .change_img{
                    display: flex;
                    flex-direction: 'column';
                    flex-wrap: wrap;
                    width: 2rem;
                    justify-content: center;
                    p{
                        @include sc(.55rem, #666);
                    }
                    p:nth-of-type(2){
                        color: #3b95e9;
                        margin-top: .2rem;
                    }
                }
            }
        }
    }
    .login_tips{
        @include sc(.5rem, red);
        padding: .4rem .6rem;
        line-height: .5rem;
        a{
            color: #3b95e9;
        }
    }
    .login_container{
        margin: 0 .5rem 1rem;
        @include sc(.7rem, #fff);
        background-color: #B4282D;
        padding: .5rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
    .button_switch{
        background-color: #ccc;
        display: flex;
        justify-content: center;
        @include wh(2rem, .7rem);
        padding: 0 .2rem;
        border: 1px;
        border-radius: 0.5rem;
        position: relative;
        .circel_button{
            transition: all .3s;
            position: absolute;
            top: -0.2rem;
            z-index: 1;
            left: -0.3rem;
            @include wh(1.2rem, 1.2rem);
            box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
            background-color: #f1f1f1;
            border-radius: 50%;
        }
        .trans_to_right{
            transform: translateX(1.3rem);
        }
        span{
            @include sc(.45rem, #fff);
            transform: translateY(.05rem);
            line-height: .6rem;
        }
        span:nth-of-type(2){
            transform: translateY(-.08rem);
        }
    }
    .change_to_text{
        background-color: #4cd964;
    }
    .to_forget{
        float: right;
        @include sc(.6rem, #3b95e9);
        margin-right: .3rem;
    }
</style>
