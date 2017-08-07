<template>
    <div v-if="isShow" class="profile_page">
        <section>
            <section class="profile-number">
                <p class="user_name">{{username}}</p>
                <img :src="avatar">
            </section>
            <section class="info-data">
                <ul class="clear">
                    <router-link to="/profile/mylike" tag="li" class="info-data-link">
                        <span class="info-data-top">{{like}}</span>
                        <span class="info-data-bottom">喜欢</span>
                    </router-link>  
                    <router-link to="/profile/myfollow" tag="li" class="info-data-link">
                        <span class="info-data-top">{{foolow}}</span>
                        <span class="info-data-bottom">关注</span>
                    </router-link>
                </ul>
            </section>
            <!--<section class="profile-1reTe">
                <router-link to='/order' class="myorder">
                    <div class="myorder-div">
                        <span>我的夺宝记录</span>
                        <span class="myorder-divsvg icon-wode_icon_xiayiji">
                            
                        </span> 
                    </div>
                </router-link> 
            </section>-->

            <section class="profile-1reTe">
                <!-- 关于我们 -->
                <!--<router-link to='/order' class="myorder">
                    <div class="myorder-div">
                        <span>关于我们</span>
                        <span class="myorder-divsvg icon-wode_icon_xiayiji">
                            
                        </span>
                    </div>
                </router-link>-->
                <router-link to='/profile/contactser' class="myorder">
                    <div class="myorder-div">
                        <span>联系客服</span>
                        <span class="myorder-divsvg icon-wode_icon_xiayiji">
                            
                        </span>
                    </div>
                </router-link>
            </section>

            <section @click="outLogin" class="profile-1reTe profile-1reTe2">
                <!-- 退出登入 -->
                <span>退出</span>
            </section>
            
        </section>
        <foot-guide></foot-guide>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>

        <!-- 对话 -->
        <transition name="toggle-cart">
            <section class="cart_food_list " v-show="showDialogue">
            	<div class="item_wrap">
					<div class="item_difc item_confirm" @click="slaoaks">确认</div>
	                <div class="item_difc item_cancel" @click="toggleDialogue">取消</div>
            	</div>
	                
            </section>
        </transition>
        <transition name="fade">
            <div class="screen_cover" v-show="showDialogue" @click="toggleDialogue"></div>
        </transition>


    </div>
</template>

<script>
//引入头部
import headTop from 'src/components/header/head'
//引入尾部
import footGuide from 'src/components/footer/footGuide'
//引入vuex全局缓存
import {mapState, mapMutations} from 'vuex'
//引入环境切换配置
import {imgBaseUrl} from 'src/config/env'
//组件混合(包括：指令-下拉加载更多，处理图片地址)
import {getImgPath} from 'src/components/common/mixin'

import {getStore,setStore,removeStore} from 'src/config/mUtils'

//数据接口
import {getMyCollection,sendLogins} from 'src/service/getData'


export default {
	//初始化数据
    data(){
        return{
            isShow:false,//是否显示页面
            username:'',//用户名
            avatar:'',//用户头像
            followCount:'',//关注
            favoriteCount:'',//喜欢

            showDialogue:false,//是否退出

        }
    },
    //初始化执行方法
    mounted(){
        //this.initData();
        //this.isShow=true;
        if(getStore('userId')){
            this.initData();
            this.isShow=true;
        }else if(!getStore('userId')&&this.$route.query.code){
        	this.enshrines();
        }else{
        	this.warrAnt();
        }
        
    },
    created(){
        //this.goodsId = this.$route.query.goodsId;
        //this.INIT_BUYCART();
        //this.enshrines();
    },
    mixins: [getImgPath],
    //注册组件
    components:{
        headTop,
        footGuide,
    },
    //实时计算 得出某个数据的最新数据
    computed:{
        ...mapState([
            'userInfo','foolow','like'
        ]),
        //后台会返回两种头像地址格式，分别处理
        imgpath:function () {
            let path;
            if(this.avatar.indexOf('/') !==-1){
                path = imgBaseUrl +　this.avatar;
            }else{
                path = this.getImgPath(this.avatar)
            }
            this.SAVE_AVANDER(path);
            return path;
        },
        
    },
    //方法函数
    methods:{
        ...mapMutations([
            'SAVE_AVANDER','SER_FOOLOW','SER_LIKE','SER_USERINFOH'
        ]),
        async initData(){
            var uesrinfo=JSON.parse(getStore('userInfo'));
            this.username=uesrinfo.wxName;
            this.avatar=uesrinfo.wxHeadUrl;

            var box=await getMyCollection();
            //存vuex
            this.SER_LIKE(box.object.favoriteCount);
            this.SER_FOOLOW(box.object.followCount);

            this.followCount=box.object.followCount;
            this.favoriteCount=box.object.favoriteCount;
            //console.log(box)
            //console.log(this.foolow)

        },
        //退出登录
        async outLogin(){
        	this.toggleDialogue();
            //this.$router.push('msite')
            //removeStore('userInfo');
            //removeStore('userId')
        },
        slaoaks(){
        	this.isShow=false;
        	this.$router.push('msite');
            removeStore('userInfo');
            removeStore('userId');
            this.toggleDialogue();
        },

        //查看是否是微信重定向来的
        async enshrines(){
        	var shareId=getStore('shareId')?getStore('shareId'):'';
    		this.userInfos = await sendLogins(this.$route.query.code,shareId);
            if(this.userInfos.success){
                this.SER_USERINFOH(this.userInfos.object);
                this.initData();
            	this.isShow=true;
            }
        },
        //微信授权类
        warrAnt(){
        	//当前url
        	var appid="wx44f0c0399de653fd";
            var resultUrl=encodeURI(window.location.href);
            var open="https://open.weixin.qq.com/connect/oauth2/authorize?appid="
                + appid
                + "&redirect_uri="
                + resultUrl
                + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
            //this.$router.push('market')
            window.location.href=open;
        },

        //是否退出控件
        toggleDialogue(){
			this.showDialogue = !this.showDialogue;
        },

    },
    //观察
    watch: {
        userInfo: function (value){
            this.initData()
        }
    }
}

</script>

<style lang="scss" scoped>
   @import 'src/style/mixin';

    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
   .profile-number{
        background:#fff;
        text-align: center;
        .user_name{
            line-height: 2rem;
            color: #333;
            font-size: .6rem;
        }
        img{
            width:2.5rem;
            height:2.5rem;
            border-radius: 50%;
        }
   }
   .info-data{
        //width:100%;
        background:$fc;
        box-sizing: border-box;
        padding: 0 2rem;
        ul{
            .info-data-link{
                float:left;
                width:50%;
                display:inline-block;
                //border-right:1px solid #f1f1f1;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                }
                .info-data-top{
                    @include sc(.64rem,#333);
                    padding: .853333rem 0 .453333rem;
                    b{
                        display:inline-block;
                        @include sc(1.2rem,#333);
                        font-weight:700;
                        line-height:1rem;
                        font-family: Helvetica Neue,Tahoma;
                    }
                }
                .info-data-bottom{
                    @include sc(.48rem,#818181);
                    font-weight:400;
                    padding-bottom:.553333rem;

                }
            }
            .info-data-link:nth-of-type(2){
                .info-data-top{
                    b{
                        color:#333;
                    }
                }

            }
            .info-data-link:nth-of-type(3){
                border:0;
                .info-333{
                    b{
                        color:#6ac20b;
                    }
                }
            }
        }
   }
   .profile-1reTe{
        margin-top:.4rem;
        background:$fc;
        .myorder{
            padding: 0 .6rem;
            display:flex;
            align-items: center;
            &:last-child .myorder-div{
              border-bottom: none;
            }
            aside{
                @include wh(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }
            .myorder-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.533333rem 0 .533333rem 0;
                @include sc(.56rem,#333);
                display:flex;
                justify-content:space-between;

                span{
                    display:block;
                }
                .myorder-divsvg{
                    color:#7f7f7f;
                    @include wh(.46667rem,.466667rem);
                    svg{
                        @include wh(100%,100%);
                    }
                }
            }
        }
        .myorder:nth-of-type(3) .myorder-div{
            border:0;
        }
    }
    .profile-1reTe2{
        margin-top: 3rem;
        line-height: 1.8rem;
        text-align: center;
        font-size: .56rem;
        color:#ccc;
        span{
            color:#ccc;
        }
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }



    //蒙版
	.screen_cover{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.6);
        z-index: 1111;
    }

    //对话
    .cart_food_list{
        position: fixed;
        width: 100%;
        //padding-bottom: 2rem;
        z-index: 1112;
        bottom: 0;
        left: 0;
        //background-color: #fff;
        //height:4rem;
        .item_wrap{
        	padding:.4rem
        }
        .item_difc{
        	width:100%;
        	height:2.28rem;
        	line-height:2.28rem;
        	font-size:.72rem;
        	color:#333;
        	text-align: center;
        	border-radius: .2rem;
        	background-color: #fff;
        	
        }
		.item_confirm{
			margin-bottom:.3rem;
		}
		.item_cancel{
			color:#818181;
		}
        .cart_food_item{
            margin-top:.7rem;
            text-align: center;
            img{
                width:2rem;
            }
            p{
                font-size:.55rem;
                line-height: 1rem;
            }
        }

    }

    .toggle-cart-enter-active, .toggle-cart-leave-active {
        transition: all .3s ease-out;
    }
    .toggle-cart-enter, .toggle-cart-leave-active {
        transform: translateY(100%);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>
