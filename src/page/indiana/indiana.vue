<template>
	<!-- 组件盒子 -->
	<div class="indiana_container">
		<!-- 头部 -->
    	<head-top goBack="true" logins="true">
        </head-top>
		<section class="main_container">
    		<!-- 轮播 -->
    		<nav class="indiana_nav">
	    		<div class="swiper-container" id="nev_1">
			        <div class="swiper-wrapper">
			            <div v-for="item in activity" class="swiper-slide food_types_container" >
		            		<div class="link_to_food">
		            			<img :src="item">
		            		</div>
			            </div>
			            <!--<div class="swiper-slide">1</div>
			            <div class="swiper-slide">2</div>-->
			        </div>
			        <div class="swiper-pagination"></div>
			    </div>
	    	</nav>
    	</section>
    	<div class="item_box goods_info_box">
    		<h4 class="goods_name">ddddd</h4>
    		<p class="goods_info">sddad</p>
    		<p class=“goods_price>商品价格：<span>￥ 12.00</span></p>
    	</div>
    	<div class="item_box duobao_info">
    		<div class="duobao_bo">1</div>
    		<div class="inning">2</div>
    	</div>
	</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {duobaoDetail} from 'src/service/getData'
import headTop from 'src/components/header/head'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'

export default {
	//数据
	data(){
		return {
			followListArr:{},//数据
			activity:[],//轮播数据

		}
	},
	//开始创建  vue后自动执行
	mounted(){
		this.initData().then(res => {
    		setTimeout(() => {
	        	new Swiper('#nev_1', {
			        pagination: '.swiper-pagination',
			        autoplayDisableOnInteraction : false,
			        loop: true
			    }); 
	      	}, 10)
        });
	},
	//需要使用的模块
	components: {
		headTop
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
            'SER_FOOLOW'
        ]),
		async initData(){
			if(this.$route.query.id){
				//获取数据
				let res = await duobaoDetail(this.$route.query.id);
				this.indianaListArr = res.object;
				this.activity=this.indianaListArr.goodsInfo.picUrl;
				console.log(this.activity)
			}else{
				this.$router.push('/');
			}
			
		},

	},

	watch: {

	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';


	//轮播
    .indiana_nav{
		background-color: #fff;
		border-bottom: 0.025rem solid $bc;
		height: 14rem;
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
			height: 14rem;
			display:block;
		}

	}

	//商品信息
	.duobao_info{
		//@include fj;
		display:block;
        display:flex;
        box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background:$blue;
        padding: .666667rem .6rem;
        .duobao_bo{
        	margin-left:.48rem;
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
        }
		.inning{
			display:inline-block;
		}
	}


</style>