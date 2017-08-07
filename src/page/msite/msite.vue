<template>
    <div class="msite_container">
    	<!-- 头部 -->
    	<!--<head-top search="true">
    		<router-link to="/msite" slot="shocart" class="shocart_item">
				<span class="icon-shouye_icon_xiaoxi"></span>
			</router-link>
    	</head-top>-->
    	<section class="change_show_type" ref="chooseType">
            <div>
                <span :class='{activity_show: changeShowType =="recom"}' @click="switchdoc('recom')"> 
                	<span class="icon-shouye_icon_tuijan"> 
                		
                	</span>
                	<i></i>
                </span>
            </div>
            <div>
                <span :class='{activity_show: changeShowType =="artisan"}' @click="switchdoc('artisan')"> 
                	<span class="icon-shouye_icon_jiangren artisans"> 
                		
                	</span>
                	<i></i>
                </span>
            </div>
        </section>
        <transition name="fade-choose">
        	<section v-show="changeShowType =='recom'" class="recom_container">
        		<!-- 轮播 -->
        		<nav class="msite_nav">
		    		<div class="swiper-container" id="nev_1">
				        <div class="swiper-wrapper">
				            <div v-for="item in activity" class="swiper-slide food_types_container" >
			            		<div @click="jump(item.activityUrl)" class="link_to_food">
			            			<img :src="item.activityPic">
			            		</div>
				            </div>
				            <!--<div class="swiper-slide">1</div>
				            <div class="swiper-slide">2</div>-->
				        </div>
				        <div class="swiper-pagination"></div>
				    </div>
		    	</nav>
		    	<!-- 轮播 -->



		    	<!-- 人气 -->
		    	<div class="msite_list_container">
		    		<div class="msite_list_title"> 
		    			<span class="icon-shouye_icon_renqi"></span>
		    		</div>
		    		<div class="swiper-container msite_list_wrapbox" id="nev_2">
			    		<ul class="msite_list_wrap swiper-wrapper">
			    			<router-link v-for="item in goodsPopularList" :to="{path: 'details', query:{ goodsId: item.goodsId}}" class="swiper-slide msite_list_item" tag='li'>
		            			<img :src="item.attachmentUrl">
		            			<figcaption>￥ {{item.price}}</figcaption>
		            		</router-link>
			    		</ul>
			    	</div>
		    	</div>

		    	<!-- 新品 -->
		    	<div class="msite_list_container">
		    		<div class="msite_list_title"> 
		    			<span class="icon-shouye_icon_xinpin"></span>
		    		</div>
		    		<div class="swiper-container msite_list_wrapbox" id="nev_3">
			    		<ul class="msite_list_wrap swiper-wrapper">
			    			<router-link v-for="item in goodsNewestList" :to="{path: 'details', query:{ goodsId: item.goodsId}}" class="swiper-slide msite_list_item" tag='li'>
		            			<img :src="item.attachmentUrl">
		            			<figcaption>￥ {{item.price}}</figcaption>
		            		</router-link>
			    		</ul>
			    	</div>
		    	</div>

		    	<section class="shop_list_container">
		    		<span class="icon-shouye_icon_youpintuijian splpoa"></span>
	                <goods-list :jskop="tagValueId"></goods-list>
	            </section>

        	</section>
        </transition>
        <transition name="fade-choose">
        	<section v-show="changeShowType =='artisan'" class="recom_container">
        		<!--{{artisanInfo}}
        		<router-link :to="{path: 'indiana', query:{ id: 1}}" slot="shocart" class="shocart_item">
					夺宝
				</router-link>-->
				<!-- 匠人 -->
				<div class="artisan_list_container">
					<artisan-list></artisan-list>
				</div>
				<!--<ul class="artisan_wrap clearfix">
					<li class="artisan_list">
						<router-link :to="{path: 'indiana', query:{ id: 1}}" slot="shocart" class="artisan_item">
							<img src="https://p3.pstatp.com/list/2c6700137fe773231e96" class="surface">
							<div class="desc_box">
								<p class="desc_title">黄继鹏</p>
								<p class="desc_describe">高级工艺美术师</p>
							</div>
						</router-link>
					</li>
				</ul>-->
				<!-- 匠人 -->
        	</section>
        </transition>
    	
    	<foot-guide></foot-guide>
    </div>    
</template>

<script>
import {mapMutations} from 'vuex'
// import {imgBaseUrl} from 'src/config/env'
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
import shopList from 'src/components/common/shoplist'
import goodsList from 'src/components/common/goodslistShou'
//匠人列表
import artisanList from 'src/components/common/artisanList'

import {getRecommendInfo} from 'src/service/getData'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'

export default {
	//初始数据
	data(){
        return {
        	changeShowType: 'recom',//切换显示推荐或者匠人

        	recommendInfo:null,//推荐页信息
        	artisanInfo:'匠人',//匠人页信息
        	activity:null,//轮播图片
        	goodsPopularList:[],//获取人气商品
        	goodsNewestList:[],//获取新品商品

        	tagValueId:'601',//推荐
        }
    },
    //创建 初始化获取
    created(){
    	
    },
    //安装  初始化获取
    mounted(){
    	//获取数据
    	this.initData().then(res => {
    		setTimeout(() => {
	        	new Swiper('#nev_1', {
			        pagination: '.swiper-pagination',
			        autoplayDisableOnInteraction : false,
			        loop: true
			    }); 
				new Swiper('#nev_2', {
			        scrollbarHide: true,
			        slidesPerView: '3',
			        centeredSlides: false,
			        spaceBetween:10,
			        autoplayDisableOnInteraction : false,
			        grabCursor: true,
			        loopedslides:10
			    });
			    new Swiper('#nev_3', {
			        scrollbarHide: true,
			        slidesPerView: '3',
			        centeredSlides: false,
			        spaceBetween:10,
			        autoplayDisableOnInteraction : false,
			        grabCursor: true,
			        loopedslides:10
			    });
	      	}, 10)
	       		
        })
	    	     
    },
    //注入的组件
    components: {
    	headTop,
    	shopList,
    	footGuide,
    	goodsList,
    	artisanList
    },
    //计算
    computed: {

    },
    //方法
    methods: {
    	...mapMutations([
    		'RECORD_ADDRESS', 'SAVE_GEOHASH'
    	]),
    	// 解码url地址，求去restaurant_category_id值
    	getCategoryId(url){
    		let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
    		if (/restaurant_category_id/gi.test(urlData)) {
    			return JSON.parse(urlData).restaurant_category_id.id
    		}else{
    			return ''
    		}
    	},
    	//初始化时获取基本数据
        async initData(){
            //获取首页推荐信息
            let recInfo=await getRecommendInfo();
            this.recommendInfo = recInfo.object;
            //获取轮播图片
            this.activity=this.recommendInfo.activity;
            //获取人气商品
            this.goodsPopularList=this.recommendInfo.goodsPopularList;
            //获取新品商品
        	this.goodsNewestList=this.recommendInfo.goodsNewestList;
        },
        //切换
        switchdoc(obj){
        	this.changeShowType=obj;
        	document.body.scrollTop=0;
        },
        //跳转外部链接
        jump(obj){
        	//console.log(obj)
        	window.location.href=obj;
        }
    },
    watch: {

    }
}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    //msite_container主包裹
    .msite_container{
    	//padding-top: 3.8rem;
    	padding-top: 1.95rem;
    	padding-bottom:2.4rem;
    }


	//切换
	.change_show_type{
        display: flex;
        background-color: #FBFBFB;
        padding: 0 0 .4rem;
        border-bottom: 1px solid #ebebeb;
        position: fixed;
		//top: 1.95rem;
		top:0;
		right: 0;
		width: 100%;
		display: flex;
		z-index: 13;
		box-sizing: border-box;
        div{
            flex: 1;
            text-align: center;
            span{
                @include sc(.65rem, #404040);
                padding: .2rem .1rem;
                position: relative;
			    width: 100%;
			    display: block;
                //border-bottom: 0.12rem solid #FBFBFB;
                i{
                	height:.14rem;
                	background: url(../../images/shouye_icon_daohangxuanzhon.png) no-repeat;
                	background-size:100% 100%;
                	width:2.1rem;
                	display: none;
                	position: absolute;
    				bottom: 0;
    				left: 50%;
				    -webkit-transform: translateX(-50%);
				    -ms-transform: translateX(-50%);
				}
            }
            .artisans{
            	font-size:.6rem;
            }
            .activity_show{
                color: #B4282D;
                border-color: #B4282D;
                span{
                	color: #B4282D;
                }
                i{
                	display:block;
                }
            }
        }
    }


    //轮播
    .msite_nav{
		background-color: #fff;
		border-bottom: 0.025rem solid $bc;
		height: 7.2rem;
		.swiper-container{
			@include wh(100%, 100%);
			padding-bottom: 0.6rem;
			.swiper-pagination{
				bottom: 0.2rem;
			}
		}
		.fl_back{
			@include wh(100%, 100%);
		}
		img{
			width:100%;
			height: 7.2rem;
		}

	}
	.swiper-pagination{
		span.swiper-pagination-bullet{
			background-color:red;
		}	
	}


	.msite_list_container{
		background-color:#fff;
		margin-top:.4rem;
		padding:.2rem 0 .5rem .5rem;
		span{
			display: block;
		    text-align: center;
		    font-size: .6rem;
		    line-height: 1.6rem;
		}
	}

	.shop_list_container{
		background-color:#fff;
		margin-top:.4rem;
		.splpoa{
			display: block;
		    text-align: center;
		    font-size: .6rem;
		    line-height: 1.6rem;
		}
	}

	
		
	

	.msite_list_wrapbox{
		.msite_list_item {
			width:33.33%;
			margin-right:.3rem;
			position: relative;
			figcaption{
				position: absolute;
    			bottom: .2rem;
    			left:.2rem;
    			color:#fff;
    			font-size:.46rem;
			}
		}
		img{
			width:100%;
			height:4.7rem;
			display:block;
		}
	}

    //vue标签动画

    //切换box动画
    .fade-choose-enter-active, .fade-choose-leave-active {
        transition: opacity .5s;
    }
    .fade-choose-leave, .fade-choose-leave-active {
        display: none;
    }
    .fade-choose-enter, .fade-choose-leave-active {
        opacity: 0;
    }

</style>
