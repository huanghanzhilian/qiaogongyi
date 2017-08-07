<template>
    <div class="details_page">
    	<head-top goBack="true" :head-title="headTitle">
    		<!--<router-link to="/msite" slot="shocarts" class="shocart_items">
    			<span class="icon-xiangqing_icon_gouwuche ciomsu" style="margin-right:1.5rem"></span>
			</router-link>
            <router-link to="/market" slot="shocarts" class="shocart_items">
                <span class="icon-xiangqing_icon_fenxiang ciomsu"></span>
            </router-link>-->
            <!--<section slot="shocarts" class="shocart_items">
                <span class="icon-xiangqing_icon_gouwuche ciomsu" @click="oplsiwo" style="margin-right:1.5rem"></span>
            </section>-->
            <section  class="shocart_items" slot="shocarts">
                <span class="icon-xiangqing_icon_fenxiang2 ciomsu" @click="shareGoodsqq"></span>
            </section>
    	</head-top>
    	<div class="details_page_content">
    		<ul class="image_box">
    			<li v-for="item in picList">
    				<img :src="item">
    			</li>
    		</ul>
    		<div class=" goods_info_box">
    			<section class="goods_info_top">
    				<p class="goods_title">{{shopDetailData.goodsName}}</p>
    				<div class="price">￥<span>{{shopDetailData.price}}</span></div>
    			</section>
    			
    			<span class="goods_number">
    				数量：<span>{{shopDetailData.remainCount}}</span>件
    				<!--<span class="goods_state">定制</span>-->
    			</span>
    			<section class="goods_info_bottom">
    				<div class="assist" @click="soucpou">
		    			<span class="oslwajwk" :class="{'soucpou_state':soucpouState}"></span>
		    			<p class="likenumber">123</p>
		    			<!--<p class="assist_text">喜欢</p>-->
		    		</div>
		    		<ul class="image_serhuo"> 
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    			<li class="portrait_list">
		    				<img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/goodsPic/10.png">
		    			</li>
		    		</ul>
    			</section>


    			
    		</div>

    		<div class="format_box">
    			<div class="format_title listtiem">
    				规格详情
    			</div>
    			<div class="format_comtent">
    				<ul class="format_comtent_title">
    					<li v-for="item in headTagList">
    						<img :src="item.tagGrayIconUrl">
    						<p>{{item.tagValue}}</p>
    					</li>
    				</ul>

    			</div>
    			<div class="format_foo format_fooss">
    				<div class="open_info">
    					<ul class="detail_item">
    					</ul>
    					<div class="start_open" @click="showActivitiesFun">
    						查看更多规格
    					</div>
    					<!--<div class="bewrite">
    						{{shopDetailData.description}}
    					</div>-->
    				</div>
    			</div>
    		</div>

    		<!--<div class="format_box format_box2">
    			<div class="format_title">
    				购买评价
    				<span class="slwop">
    					<span class="icon-xiangqing_icon_xihuan"></span>
    				</span>
    			</div>
    		</div>
    		<div class="format_box format_box2">


    			<div class="estimate clearfix">
					<img src="http://pic.taohuren.com/tags/2017/06-29/o_3285618755.jpg">
					<span class="estimate_left_text">口径</span>
					<span class="detail_item_regin">5.2cm</span>
				</div>
    			<div class="evaluate_text">
    				很好
    			</div>
    			<div class="evaluate_img">
    				<img src="http://pic.taohuren.com/tags/2017/06-29/o_3285618755.jpg">
    				<img src="http://pic.taohuren.com/tags/2017/06-29/o_3285618755.jpg">
    			</div>
    		</div>-->

    		<div class="format_box format_box2 format_box3 format_box3pp">
    			<img class="box3_image" :src="extraInfo.authorHeadUrl">
    			<div class="box3_info">
    				<span class="user_name">{{extraInfo.authorName}}</span>
    				<!--<span class="cfio_icon icon-xiangqing_icon_xihuan"></span>
    				<span class="city">{{extraInfo.address}}</span>-->
                    <p class="">{{shopDetailData.authorLevelName}}</p>
    				<div class="works">
    					作品： <span>{{extraInfo.goodsCount}}</span> | 粉丝：<span>{{extraInfo.followCount}}</span>
    				</div>
    				<div class="start_open start_opencc" @click="enshrine()" :class="{enshrine:isFollow==true}">
    						{{isFollowtext}}
    					</div>
    			</div>
    		</div>

    		<div class="format_box format_box2">
    			<div class="format_title listtiem" >
    				为您推荐
    			</div>
    		</div>

            <section class="shop_list_container">
                <goods-list :tagValueId="tagValueId"></goods-list>
            </section>

    	</div>
    	<buy-carts @custom="custom"></buy-carts>
    	<dialo-gue v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" @dialoGue="dialoGue" :alertText="alertText"></dialo-gue>

    	<transition name="fade">
            <section class="activities_details" v-if="showActivities">
            	<h1 class="cominfo listtiem">规格详情</h1>
                <div class="format_comtent">
    				<ul class="format_comtent_title format_comtent_titlespo">
    					<li v-for="item in headTagList">
    						<img :src="item.tagIconUrl">
    						<p>{{item.tagValue}}</p>
    					</li>
    				</ul>

    			</div>
                <div class="format_foo">
    				<div class="open_info">
    					<ul class="detail_item">
    						<li class="listitem clearfix" v-for="item in shopDetailData.tagList" >
    							<img :src="item.tagIconUrl">
    							<span>{{item.tagName}}</span>
    							<span class="detail_item_regin">{{item.tagValue}}</span>
    						</li>
    					</ul>
    				</div>
    			</div>
    			<div class="solpwo">
	                <svg width="60" height="60" class="close_activities" @click.stop="showActivitiesFun">
	                    <line x1="22" y1="38" x2="38" y2="22" style="stroke:#DEA34C;stroke-width:2"/>
	                    <line x1="22" y1="22" x2="38" y2="38" style="stroke:#DEA34C;stroke-width:2"/>
	                </svg>
	            </div>
            </section>
        </transition>

        <!-- 分享 -->
        <!--<transition name="toggle-cart">
            <section class="cart_food_list flex" v-show="showCartList">
                <div class="cart_food_item flex_v"> 
                    <p>长按图片发送给微信好友<br>或保存图片后分享到朋友圈</p>
                </div>
            </section>
        </transition>-->
        <!-- 分享 -->
        <!-- 分享遮罩层 -->
        <transition name="fade">
            <div class="screen_cover" v-show="showCartList" @click="toggleCartList"></div>
        </transition>
        <!-- 分享遮罩层 -->

        <!-- 分享图片 -->
        <transition name="fade">
            <section class="license_container" v-if="showCartList" >
                
                <div class="spwlisal" v-if="isShow" @click="serShow"> 
                	长按图片发送给微信好友或<br>保存图片后分享到朋友圈
                	<div class="solpwo">
		                <svg width="20" height="20" class="close_activities" >
		                    <line x1="8" y1="12" x2="12" y2="8" style="stroke:#818181;stroke-width:1"/>
		                    <line x1="8" y1="8" x2="12" y2="12" style="stroke:#818181;stroke-width:1"/>
		                </svg>
		            </div>
                </div>
                <img :src="licenseImg" @click="toggleCartList">
            </section>
        </transition>
        <!-- 分享图片 -->

        <!-- 客服 -->
        <transition name="fade">
            <section class="activities_details activities_detailss" v-if="shouKefu">
                <div class="kefuinfo">
                    <p><span>长按识别</span>图中二维码，添加私人客服为好友，客服将与您沟通商品相关信息</p>
                    <img src="http://qgy.oss-cn-beijing.aliyuncs.com/qgy/qrCode/kefuQrCode.jpg">
                </div>

                <div class="solpwo">
	                <svg width="60" height="60" class="close_activities" @click="custom">
	                    <line x1="22" y1="38" x2="38" y2="22" style="stroke:#DEA34C;stroke-width:2"/>
	                    <line x1="22" y1="22" x2="38" y2="38" style="stroke:#DEA34C;stroke-width:2"/>
	                </svg>
	            </div>
            </section>
        </transition>
        <!-- 客服 -->

        <!-- loading -->
		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>
		<!-- loading -->

    </div>
    
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import headTop from 'src/components/header/head'
import buyCarts from 'src/components/common/buyCarts'
import {msiteAdress, shopDetails, foodMenu, getRatingList, ratingScores, ratingTags,shopDetailspo,shareGoodss,favoRite,sendLogins} from 'src/service/getData'
import dialoGue from '../../components/common/dialoGue'
import {getStore,setStore} from 'src/config/mUtils'
import goodsList from 'src/components/common/goodslisttui'
import loading from 'src/components/common/loading'




export default {
	data(){
        return{
        	headTitle:'', // 页面头部标题
            shopDetailData: {}, //商铺详情
            picList:null,   //图片列表
            extraInfo:{},     //师傅信息
            showAlert: false, //显示提示组件
            alertText: null, //提示的内容
            follow:false,
            showActivities: false, //是否显示浮层
            showCartList: false,//显示分享
            licenseImg:'',  //分享图片
            shouKefu:false,//客服
            tagValueId:'601',//推荐
            soucpouState:false,//收藏状态
            isFollow:false,//关注匠人状态
            isFollowtext:'加关注',
            userInfos: null, //获取到的用户信息
            headTagList:null,//规格详情与文字

            showLoading: true, //显示加载动画
            isShow:true,//是否显示提示
        }
    },
    components: {
    	headTop,
    	buyCarts,
    	dialoGue,
        goodsList,
        loading
    },
    mounted(){
        /*this.SER_USERINFOH({
            "wxHeadUrl": "http://wx.qlogo.cn/mmopen/DY5Eib2rQSoEkpSSibiaFuOW5cnMfUIpH7Ul9sQ5bkLH5DZeoQnrP2TkJhsNX2tpm1uzqdkvwJSBPRydiaQnwtoLDJYKwOgHwOFj/0",
            "openId": "o-D5C1GRvwCvJqbf3p9YKT4Kqyx8",
            "wxName": "占飞",
            "userId": "14"
        })*/
        this.initData();
    },
    created(){
        this.goodsId = this.$route.query.goodsId;
        this.INIT_BUYCART();
        this.enshrines();
        this.getshareId();
    },
    computed: {
        ...mapState([
            'userInfo'
        ]),
        routeGoodsId:function(){
            return this.$route.query.goodsId;
        }
    },
    methods: {
        ...mapMutations([
            'RECORD_ADDRESS','ADD_CART','REDUCE_CART','INIT_BUYCART','CLEAR_CART','RECORD_SHOPDETAIL','RECORD_USERINFO','SER_USERINFOH'
        ]),
        //初始化时获取基本数据
        async initData(){
            //获取商铺信息
            let isshareId = this.$route.query.shareId;
            var obj= await shopDetails(this.goodsId,isshareId);
            this.shopDetailData = obj.object;
            this.headTitle = obj.object.goodsName;
            this.picList = this.shopDetailData.picList;
            this.extraInfo=this.shopDetailData.extraInfo;
            //获取商品收藏状态
            this.soucpouState=this.extraInfo.isFavorite=="0"?false:true;
            //获取匠人是否收藏
            this.isFollow=this.extraInfo.isFollow=="0"?false:true;
            this.isFollowtext=this.extraInfo.isFollow==0?'加关注':'已关注';
            this.headTagList=obj.object.headTagList; //规格详情与文字

            this.hideLoading();
            //console.log(this.headTagList)
            //shopDetailData.tagList             //图片管理文字
        },
        //
        toQuestionDetail(){
            //this.SAVE_QUESTION({title, detail: this.questionDetail[index]});
            this.$router.push('/details/standard');
        },
        async enshrine(){
        	/*if(getStore('userId')){
        		var iop=shopDetailspo(this.shopDetailData.authorId);
        		this.follow=true;
        		this.showAlert = true;
	        	this.alertText = '关注成功';
        	}else{
        		this.showAlert = true;
	        	this.alertText = '您还未登入，是否登入';
        	}*/
            //this.isFollow=this.extraInfo.isFollow=="0"?false:true;
            //this.isFollowtext=this.extraInfo.isFollow==0?'关注':'已关注';
            let userId=getStore('userId');
            let authorId=this.shopDetailData.authorId
            let soucpouType=this.isFollow?"-1":"1";
            if(userId){
                let res = await shopDetailspo(userId,authorId,soucpouType);
                if(res.success){
                    this.isFollow=!this.isFollow;
                    this.isFollowtext=this.isFollow==0?'加关注':'已关注';
                    this.extraInfo.followCount=this.isFollow==0?this.extraInfo.followCount-1:parseInt(this.extraInfo.followCount)+1;
                }
                
            }else{
            	this.warrAnt()
                //this.$router.push('login')
            }
        },
        //soucpou收藏商品
        async soucpou(){
            let userId=getStore('userId');
            let goodId=this.goodsId;
            let soucpouType=this.soucpouState?"-1":"1";
            if(userId){
                let res = await favoRite(goodId,soucpouType);
                if(res.success){
                    this.soucpouState=!this.soucpouState;
                }
            }else{
            	this.warrAnt()
                //this.$router.push('login')
            }
        },

        closeTip(){
            this.showAlert = false;
        },
        dialoGue(){
        	this.showAlert = false;
        	this.$router.push('login')
        },
        //控制浮层显示隐藏
        showActivitiesFun(){
            this.showActivities = !this.showActivities;
        },
        //分享按钮接口
        async shareGoodsqq(){
            //获取数据
            if(getStore('userId')){
            	this.showLoading = true;
                //获取数据
                let res = await shareGoodss(this.goodsId);
                this.licenseImg = res.message;
                this.hideLoading();
                //console.log(res.message)
                this.toggleCartList();
            }else{
            	this.warrAnt()
                //this.$router.push('login')
            }
        },
        //控制购物列表是否显示
        toggleCartList(){
            this.showCartList = !this.showCartList;
        },
        custom(){
            if(getStore('userId')){
                this.shouKefu=!this.shouKefu;
            }else{
                this.warrAnt()
                //this.$router.push('login')
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
            //
            window.location.href=open;
        },
        //查看是否是微信重定向来的
        async enshrines(){
        	if(!getStore('userId')&&this.$route.query.code){
                var shareId=getStore('shareId')?getStore('shareId'):'';
        		this.userInfos = await sendLogins(this.$route.query.code,shareId);
                if(this.userInfos.success){
                    this.SER_USERINFOH(this.userInfos.object);
                    this.initData();
                }
        	}
        },


        //查看是否有推荐信息shareId
        async getshareId(){
            //如果参数等于整形 将最近的shareId储存本地
            if(this.isInteger(this.$route.query.shareId)){
                setStore('shareId',this.$route.query.shareId)
            }
        },
        //判断是否是数字整形
        isInteger(obj) {
            //return typeof obj === 'number' && obj%1 === 0
            return obj%1 === 0
        },


        //如果有code返回两步
        oplsiwo(){
        	this.$router.go(-2);
        },

        //触摸
        slaoak(event){
            event.preventDefault()
        },


        //开发环境与编译环境loading隐藏方式不同
		hideLoading(){
			this.showLoading = false;
		},
		//设置分享提示是否显示
		serShow(){
			this.isShow=false;
		}

    },

    //监听
    watch: {
        //监听id改变
        /*routeGoodsId:function(){
            this.initData();
        }*/
        '$route' (to, from) {
            location.reload();
            //const toDepth = to.path.split('/').length
            //const fromDepth = from.path.split('/').length
            //this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';



    .goods_info_top{
    	/*padding-left:1.6rem;
        display:flex;
        align-items: center;*/
        @include fj(space-between);
    }
    .goods_info_bottom{
    	display:block;
        display:flex;
        box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .image_serhuo{
        	/*display:block;
	        display:flex;
	        box-align: center;
	        -webkit-box-align: center;
	        -ms-flex-align: center;
	        align-items: center;*/

	        -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;

			overflow: hidden;
			overflow-x: scroll;
			-webkit-overflow-scrolling: touch;
			white-space: nowrap;
	        li{
	        	margin:.2rem 0 0 .34rem;
	        	width:.96rem;
	        	height:.96rem;
	        	//float: left;
	        	display:inline-block;
	        	img{
	        		width:100%;
	        		height:100%;
	        		border-radius: 50%;
	        		border: .02rem solid #D9D9D9;
	        	}
	        }
        }
    }

    .spwlisal{
    	width:9.6rem;
    	//height:2.72rem;
    	padding:.4rem .2rem;
    	background:rgba(120,120,120,0.40);
    	color:#fff;

    	position: fixed;
	    top: 2rem;
	    left: 50%;
	    -webkit-transform: translate(-50%, 0);
	    -ms-transform: translate(-50%, 0);
	    transform: translate(-50%, 0);
	    font-size:.56rem;
        text-align: center;
    	line-height: 1rem;
    	border-radius: .4rem;
		.solpwo{
			position: absolute;
			top: .3rem;
			right: .3rem;
			.close_activities{
				background:#fff;
				border-radius: 50%;
			}
		}
    }



    .listtiem{
		font-family: "huangFont";
		font-size:.64rem;
	}
    .start_open.start_opencc.enshrine{
    	color:red;

    }
	.details_page{
		background:rgba(0, 0, 0, 0.08);;
		.details_page_content{
			padding-top: 1.95rem;
	    	margin-bottom: 2.4rem;
			.image_box{
				li{
					margin-buttom:.4rem;
					img{
						width:100%;
					}
				}
			}
		}
	}



    .format_fooss{
        padding-bottom:.5rem;
    }

	.works{
		margin-bottom:.5rem;
	}

	.goods_info_box{
		font-size:.56rem;
		padding:.4rem .6rem;
		position: relative;
		line-height:0.85rem;
		background:#fff;
		margin-bottom:.4rem;
	}
	.goods_title{
		color:#333;
	}
	.goods_number{
		font-size:.48rem;
		line-height:1rem;
		margin-bottom:.2rem;
		display: inline-block;
		color:#818181;
		span{
			color:#818181;
		}
	}
	.goods_state{

	}
	.price{
		color:#B4282D;
		span{
			color:#B4282D;
		}
	}
	.assist{
		//position:absolute;
		color:#818181;
		width:1.7rem;
	    border-right: 0.025rem solid #e4e4e4;
		//text-align: center;
		padding-right: 1rem;
		span{
			//color:#818181;
			//font-size:.80rem;
			width:.85rem;
			height:.8rem;
			display: inline-block;
			background: url(../../images/zuopinxiangqing_icon.png) no-repeat;
			background-size:100% 100%;
            &.soucpou_state{
                background: url(../../images/zuopinxiangqing_icon_xihaun.png) no-repeat;
                background-size:100% 100%;
            }
		}
		p{
			color:#818181;
			font-size:.4rem;
			line-height:.4rem;
			//text-align: center;
		}
	}
	.assist_text{

	}


	.format_box{
		line-height:0.85rem;
		background:#fff;
		font-size:.46rem;
		padding:0 .6rem;
	}
	.format_title{
		line-height:2rem;
		font-size:.64rem;
		text-align: center;
		border-bottom:solid 1px #d9d9d9;
	}
	.format_comtent{
		
	}
	.format_comtent_title{
        background-color: #fff;
        display: flex;
        border-bottom:solid 1px #d9d9d9;
        li{
	    	flex: 1;
	    	display: flex;
	    	text-align: center;
	    	flex-direction: column;
	    	align-items: center;
	    	padding:.4rem 0;
            img{
                width:.85rem;
            }
	    	span{
	    		font-size:.76rem;
	    	}
	    	p{
	    		margin-top:.2rem;
	    	}
	    }
    }
    .format_comtent_title.format_comtent_titlespo{
        border-bottom:solid 1px #E5C28E;
        border-top:solid 1px #E5C28E;
    }
    .detail_item{
    	padding:.6rem 1.2rem;
    	font-size:.5rem;
    	line-height:1.6rem;
    	vertical-align: middle;
    	li{

    	}
    }
	.detail_item_icon{
		font-size:.8rem;
		vertical-align: middle;
	}
	.detail_item_regin{
		float:right;
        color:#333;
	}
	.start_open{
		width:4rem;
		height:1.2rem;
		line-height:1.2rem;
		border: 1px solid #DEA34C;
		border-radius: 2px;
		margin:0 auto;
		text-align: center;
		font-size:.5rem;
		color:#DEA34C;
        margin-bottom:.4rem;
	}

	.start_open.start_opencc{
		border-color:#818181;
		color:#818181;
	}
	.bewrite{
		padding:.9rem 0;
		color:#818181;
	}

	.estimate{
		line-height:1.3rem;
		vertical-align: middle;
		padding:.4rem 0;
		margin-top:.4rem;
		img{
			width:1.28rem;
			height:1.28rem;
			border-radius: 50%;
			vertical-align: middle;
		}
		.detail_item_regin{
			color:#818181;
		}
	}
	.estimate_left_text{
		margin-left:.2rem;
		font-size:.56rem;
	}
    .format_box2{
    	.format_title{
    		position:relative;
    		border-bottom:none;
    		margin:.4rem 0 0 0;
    		//margin-bottom: .4rem;
    	}
    }

    .slwop{
    	position: absolute;
	    top: 50%;
	    -webkit-transform: translateY(-50%);
	    -ms-transform: translateY(-50%);
	    transform: translateY(-50%);
	    right: 0.35rem;
    }
    .evaluate_text{
		font-size:.56rem;
		margin-bottom:.3rem;
    }
	.evaluate_img{
		img{
			width:2.5rem;
			height:2.5rem;
			margin-right:.3rem;
		}
		
	}

	.format_box3{
		text-align:center;
		padding: .6rem 0;
		margin-top:.4rem;
		font-size:.56rem;
		img{
			width:2rem;
			height:2rem;
			border-radius:50%;
			margin-bottom:.4rem;
		}
		.box3_info{
			line-height:1rem;
			p{
				font-size:.44rem;
				color:#818181;
			}
		}
	}


	.goodslist{
		margin:0 0 .4rem 0;
		background-color:#fff;
	}
	.user_info_com{
		padding:.48rem;
		line-height:1.6rem;
	}
	.shop_imgs{
		width:1.6rem;
		height:1.6rem;
		float:left;
		border-radius: 50%;
	}
	.info_box{
		line-height:.8rem;
		margin-left:2rem;
	}
	.user_info{
		font-size:.54rem;
	}
	.detail_info{
		font-size:.44rem;
	}
	.surface_img{
		width:100%;
		height:7.16rem;
	}


	.shoplist_container{
		background-color: rgba(0,0,0,0.08);
		margin-bottom: 2rem;
	}
	.shop_li{
		display: flex;
		border-bottom: 0.025rem solid #f1f1f1;
		padding: 0.7rem 0.4rem;
	}

	.desc-box{
		padding:.48rem;
		color:#B4282D;
		font-size:.56rem;
		text-align: right;
		.collection-tag{
			color:#333;
		    float: left;
		}
	}
	.mpspu{
		margin-top:.4rem;
	}



	.activities_details{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color:#fff;
        z-index: 200;
        padding: 1.25rem 1.25rem 5.6rem 1.25rem;
        color:#818181;
        overflow: auto;
        .cominfo{
        	font-size:.72rem;
        	text-align: center;
        	margin:1.2rem 0 1.6rem 0;
        }
        img{
        	width:.8rem;
        	height:.8rem;
        }
        .listitem{
        	vertical-align: middle;
            margin-bottom:.3rem;
        	img{
        		vertical-align: middle;
        		margin-right:.3rem;
        	}
            span.detail_item_regin{
                color:#333;
            }
        }
        ul{
        	background:none;
        }
        p{
        	font-size:.50rem;
        	color:#818181;
        }
        span{
        	color:#818181;
        }
        .activities_shoptitle{
            text-align: center;
            @include sc(.8rem, #fff);
        }
        .activities_ratingstar{
            display: flex;
            justify-content: center;
            transform: scale(2.2);
            margin-top: .7rem;
        }
        .activities_list{
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            @include sc(.5rem, #fff);
            li{
                margin-bottom: .2rem;
                .activities_icon{
                    padding: 0 .02rem;
                    display: inline-block;
                    border: 0.025rem solid #fff;
                    border-radius: 0.1rem;
                }
                span{
                    color: #fff;
                    line-height: .6rem;
                }
            }
        }
        .activities_shopinfo{
            p{
                line-height: .7rem;
                @include sc(.5rem, #fff);
            }
        }
        .activities_title_style{
            text-align: center;
            margin-bottom: 1rem;
            span{
                @include sc(.5rem, #fff);
                border: 0.025rem solid #555;
                padding: .2rem .4rem;
                border-radius: 0.5rem;
            }

        }
        .solpwo{
        	position: fixed;
            bottom: 0;
            left:0;
            width:100%;
            height:5.4rem;
            background-image:linear-gradient(to bottom, rgba(255,255,255,0),rgba(255,255,255,.3),rgba(255,255,255,1),#fff,#fff,#fff);
            //left: 50%;
            //-webkit-transform: translateX(-50%);
            //-ms-transform: translateX(-50%);
            //transform: translateX(-50%);
        	.close_activities{
	            position: fixed;
	            bottom: 1rem;
	            left: 50%;
	            -webkit-transform: translateX(-50%);
	            -ms-transform: translateX(-50%);
	            transform: translateX(-50%);
	        }
        }
	        
    }
    .activities_detailss{

    	background-color:#fff;
    }

    //分享
    .cart_food_list{
        position: fixed;
        width: 100%;
        padding-bottom: 2rem;
        z-index: 112;
        bottom: 0;
        left: 0;
        background-color: #fff;
        height:4rem;
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
    //分享
    //分享遮罩层
    .screen_cover{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(51,51,51,0.80);
        z-index: 111;
    }
    //分享遮罩层

    //分享图片
    .license_container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        z-index: 111;
        overflow: auto;
        img{
            //height:18rem;
            width:100%;
            display: block;
            //@include center;
            //position: absolute;
            //top: 45%;
            //left: 50%;
            //-webkit-transform: translate(-50%, -50%);
            //-ms-transform: translate(-50%, -50%);
            //transform: translate(-50%, -50%);
        }
    }
    //分享图片

    //客服
    .kefuinfo{
        text-align: center;
        p{
            font-size:.56rem;
            line-height: 1rem;
            margin:.5rem 0 1.3rem 0;
            span{
                color:#b4282d;
            }
        }
        img{
            width:100%;
            height:17.7rem;
        }
    }
    //客服


    .format_box3pp{
        position: relative;
        background:url(../../images/xiangqing_icon_b.png) no-repeat;
        background-size:100% 100%;
        color:#fff;
        .box3_info{
            color:#fff;
            span{
               color:#fff; 
            }
            p{
                color:#fff;
            }
        }

        .works{
            color:#fff;
            margin-top:.3rem;
        }
        .start_opencc{
            position: absolute;
            right:1rem;
            top:1rem;
            width:2.2rem;
            height:1rem;
            line-height: 1rem;
            color:#fff;
            border: 1px solid #fff;
        }
        .start_opencc.enshrine{
            color:#dea34c;
            border: 1px solid #dea34c;
        }
    }

</style>
