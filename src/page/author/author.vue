<template>
	<!-- 组件盒子 -->
	<div class="author_container">
		<!-- 头部 -->
    	<head-top goBack="true" logins="true" goBackcolor="true"></head-top>
    	<!-- 内容 -->
    	<div class="author_wrap">
    		<div class="top_image"></div>
    		<div class="format_box format_box2 format_box3 format_box3pp">
    			<img class="box3_image" :src="authorDetailArr.authorHeadPic">
    			<div class="box3_info">
    				<p class="slpowaa">
	    				<span class="user_name">{{authorInfo.authorName}}</span>&emsp;
	    				<span class="cfio_icon icon-guige_icon_candi"></span>
	    				<span class="city">{{authorInfo.address}}</span>
    				</p>
                    <p class="">{{authorInfo.memo}}</p>
    				<div class="works">
    					全部作品： <span>{{authorInfo.goodsCount}}</span> &emsp;|&emsp; 粉丝人数：<span>{{authorInfo.followCount}}</span>
    				</div>
    				<div class="start_open" @click="enshrine()" :class="{enshrine:isFollow==true}">
						{{isFollowtext}}
					</div>
    			</div>
    		</div>

    		<!-- 作品列表 -->
    		<section class="shop_list_container">
                <goods-list :jskop="tagValueId"></goods-list>
            </section>
            <!-- 作品列表 -->

    	</div>
    </div>
		
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import headTop from 'src/components/header/head'
import goodsList from 'src/components/common/goodslistShouis'

import {msiteAdress, shopDetails, foodMenu, getRatingList, ratingScores, ratingTags,shopDetailspo,shareGoodss,favoRite,sendLogins,getauthorDetail} from 'src/service/getData'
import dialoGue from '../../components/common/dialoGue'
import {getStore,setStore} from 'src/config/mUtils'
import loading from 'src/components/common/loading'


export default {
	//数据
	data(){
		return {
			authorDetailArr:{},//数据
			authorInfo:{},//匠人信息

			tagValueId:'',//列表

			isFollow:false,//关注匠人状态
			isFollowtext:'加关注',

		}
	},
	created(){
        this.enshrines();
        //this.getshareId();
    },
	//开始创建  vue后自动执行
	mounted(){
		this.initData();
	},
	//需要使用的模块
	components: {
		headTop,
		goodsList
	},

	//父组件的参数书
	props: [],

	//需要引用的外部js方法
	mixins: [],

	//计算值 这里可以实时监听某个数据的变化
	computed: {
		...mapState([
			'userInfo','foolow','like'
		]),
	},
	updated(){
		// console.log(this.supportIds, this.sortByType)
	},
	//方法
	methods: {
		//注入vuex方法
		...mapMutations([
            'RECORD_ADDRESS','ADD_CART','REDUCE_CART','INIT_BUYCART','CLEAR_CART','RECORD_SHOPDETAIL','RECORD_USERINFO','SER_USERINFOH'
        ]),
		async initData(){
			if(this.$route.query.id){
				//获取数据
				let res = await getauthorDetail(this.$route.query.id);
				this.authorDetailArr = res.object;
				this.authorInfo=res.object.author;
				//this.isFollowtext=this.extraInfo.isFollow==0?'加关注':'已关注';
			}else{
				this.$router.push('/');
			}
			
		},
		//关注与取消关注
		async enshrine(){
            let userId=getStore('userId');
            let authorId=this.authorInfo.id;
            let soucpouType=this.isFollow?"-1":"1";
            if(userId){
                let res = await shopDetailspo(userId,authorId,soucpouType);
                if(res.success){
                    this.isFollow=!this.isFollow;
                    this.isFollowtext=this.isFollow==0?'加关注':'已关注';
                    this.authorInfo.followCount=this.isFollow==0?this.authorInfo.followCount-1:parseInt(this.authorInfo.followCount)+1;
                }
                
            }else{
            	this.warrAnt()
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

	},

	watch: {

	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';



	.format_box3{
		text-align:center;
		padding:1.55rem 0 .6rem 0;
		//margin-top:.4rem;
		font-size:.56rem;
		img{
			width:2.6rem;
			height:2.6rem;
			border-radius:50%;
			//margin-bottom:.4rem;
			@include cl();
			top: -1.3rem;
		    box-shadow: 0 0 10px 1px rgba(7, 17, 27, 0.5);
		    border: 1px solid #fff;
		}
		.box3_info{
			//line-height:1.5rem;
			

			p{
				&.slpowaa{
					line-height:1rem;
					vertical-align: middle;
					font-size:.6rem;
					margin-bottom:0;
					span{
						vertical-align: middle;
					}
				}
				font-size:.44rem;
				color:#818181;
				line-height:.8rem;
				margin-bottom:.4rem;
			}
		}
	}

	.top_image{
		width:100%;
		height:5.2rem;
		background:url(../../images/xiangqing_icon_b.png) no-repeat;
        background-size:100% 100%;
	}
	.format_box3pp{
        position: relative;
        background:#fff;
        color:#333;
        margin-bottom:.52rem;
        .box3_info{
            color:#333;
            span{
               color:#333; 
            }
            p{
                color:#818181;
            }
        }

        .works{
            color:#333;
            margin-top:.3rem;
        }
        .start_open{
            width:2.2rem;
            height:1rem;
            line-height: 1rem;
            color:#333;
            border: 1px solid #bbb;
            margin:.42rem auto 0;
            border-radius: 2px;
        }
        .start_open.enshrine{
            color:#dea34c;
            border: 1px solid #dea34c;
        }
    }






</style>