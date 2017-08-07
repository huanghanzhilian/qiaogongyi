<template>
	<div class="shoplist_container">
		<!-- 列表盒子 -->
		<ul v-load-more="loaderMore" v-if="shopListArr.length">
			<li class="goodslist" style="background-color:#fff" v-for="item in shopListArr"> 
				<router-link  :to="{path: '/author', query:{ id: item.authorId}}" tag='a' class="goodslist">
					<div class="user_info_com clearfix">
						<img :src="item.author_head_url" class="shop_imgs">
						<div class="info_box">
							<p class="user_info">{{item.authorName}}</p>
							<p class="detail_info">{{item.authorLevelName}}</p>
						</div>
					</div>
				</router-link>
				<router-link  :to="{path: 'details', query:{ goodsId: item.goodsId}}" tag='a' >
				
					<section class="surface">
						<img :src="item.pot_item_bg_url" class="surface_img">
					</section>
					<div class="desc-box">
						<span class="collection-tag">{{item.goodsName}}</span>
						￥ {{item.price}}
					</div>
				</router-link>
			</li>
				
		</ul>
		<p v-if="touchend" class="empty_data">没有更多了</p>
		<div ref="abc" style="background-color: red;"></div>
		<!-- 动画loading -->
		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {shopList} from 'src/service/getData'
import {imgBaseUrl} from 'src/config/env'
import {showBack, animate} from 'src/config/mUtils'
import {loadMore, getImgPath} from './mixin'
import loading from './loading'
import ratingStar from './ratingStar'

export default {
	data(){
		return {
			pagenum:1,//页码
			querySize:'8',//页条数
			shopListArr:[], // 列表数据
			preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
			showBackStatus: false, //显示返回顶部按钮
			showLoading: true, //显示加载动画
			touchend: false, //没有更多数据
			imgBaseUrl,
		}
	},
	mounted(){
		this.initData();
	},
	components: {
		loading,
		ratingStar,
	},
	props: ['jskop','shareId'],
	mixins: [loadMore, getImgPath],
	computed: {
		...mapState([
			'userInfo'
		]),
	},
	updated(){
		// console.log(this.supportIds, this.sortByType)
	},
	methods: {
		async initData(){
			//获取数据
			let res = await shopList(this.restaurantCategoryId||this.sortByType,this.pagenum,this.querySize);
			this.shopListArr = res['object'];
			if (res['object'].length < 8) {
				this.touchend = true;
			}
			this.hideLoading();
			//开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
			showBack(status => {
				this.showBackStatus = status;
			});
		},
		//到达底部加载更多数据
		async loaderMore(){
			if (this.touchend) {
				return
			}
			//防止重复请求
			if (this.preventRepeatReuqest) {
				return 
			}
			this.showLoading = true;
			this.preventRepeatReuqest = true;

			//数据页码+1
			this.pagenum+=1;
			let res = await shopList(this.restaurantCategoryId||this.sortByType,this.pagenum,this.querySize);
			this.hideLoading();
			this.shopListArr = [...this.shopListArr, ...res['object']];
			//this.shopListArr.push(res['object']);
			//当获取数据小于20，说明没有更多数据，不需要再次请求数据
			if (res['object'].length < 8) {
				this.touchend = true;
				return
			}
			this.preventRepeatReuqest = false;
		},
		//监听父级传来的数据发生变化时，触发此函数重新根据属性值获取数据
		async listenPropChange(){
			this.showLoading = true;
			let res = await shopList(this.jskop,this.pagenum,this.querySize);
			//考虑到本地模拟数据是引用类型，所以返回一个新的数组
			this.shopListArr = res['object'];
			this.hideLoading();
		},
		//开发环境与编译环境loading隐藏方式不同
		hideLoading(){
			this.showLoading = false;
		},
	},

	watch: {
		//监听父级传来的restaurantCategoryIds，当值发生变化的时候重新获取餐馆数据，作用于排序和筛选
		jskop: function (value){
			//console.log(this.jskop)
			this.pagenum=1;
			this.listenPropChange();

		},
		//监听父级传来的排序方式
		sortByType: function (value){
			this.listenPropChange();
		},
	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
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
		color:#818181;
	}
	.surface_img{
		width:100%;
		height:7.16rem;
	}


	.shoplist_container{
		background-color: rgba(0,0,0,0.08);
		//margin-bottom: 2.4rem;
	}
	.shop_li{
		display: flex;
		border-bottom: 0.025rem solid #f1f1f1;
		padding: 0.7rem 0.4rem;
	}

	.desc-box{
		padding:.28rem .48rem .48rem .48rem;
		color:#B4282D;
		font-size:.56rem;
		text-align: right;
		.collection-tag{
			color:#333;
		    float: left;
		}
	}
	.empty_data{
		@include sc(0.5rem, #818181);
		text-align: center;
		line-height: 2rem;
	}
</style>