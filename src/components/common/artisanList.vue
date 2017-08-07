<template>
	<!-- 组件盒子 -->
	<div class="artisanList_container">
		<ul class="artisan_wrap clearfix" v-load-more="loaderMore" v-if="artisanListArr.length" type="1">
			<li class="artisan_list" v-for="(item,index) in artisanListArr">
				<router-link :to="{path: 'author', query:{ id: item.id}}" slot="shocart" class="artisan_item">
					<img :src="item.authorHeadUrl" class="surface">
					<div class="desc_box">
						<p class="desc_title">{{item.authorName}}</p>
						<p class="desc_describe">{{item.memo}}高级工艺美术师</p>
					</div>
				</router-link>
			</li>
		</ul>




		<p v-if="touchend" class="empty_data">没有更多了</p>

		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>


	</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import {loadMore, getImgPath} from './mixin'
import {artisansList} from 'src/service/getData'

import loading from './loading'

export default {
	//数据
	data(){
		return {
			artisanListArr:[],//数据
			pagenum:1,//页码
			querySize:15,//每页数量

			preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
			showLoading: true, //显示加载动画
			touchend: false, //没有更多数据
		}
	},
	//开始创建  vue后自动执行
	mounted(){
		this.initData();
	},
	//需要使用的模块
	components: {
		loading
	},

	//父组件的参数书
	props: [],

	//需要引用的外部js方法
	mixins: [loadMore, getImgPath],

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
			//获取数据
			let res = await artisansList(this.pagenum, this.querySize);
			this.artisanListArr = [...res.object];
			if (res.object.length < 15) {
				this.touchend = true;
			}
			this.hideLoading();
		},
		//开发环境与编译环境loading隐藏方式不同
		hideLoading(){
			this.showLoading = false;
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
			let res = await artisansList(this.pagenum, this.querySize);
			this.hideLoading();
			this.artisanListArr = [this.artisanListArr,...res.object];
			//当获取数据小于20，说明没有更多数据，不需要再次请求数据
			if (res.object.length < 15) {
				this.touchend = true;
				return
			}
			this.preventRepeatReuqest = false;
		},

	},

	watch: {

	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';


	//匠人
	.artisan_wrap{
		.artisan_list{
			//height: 1.1rem;
		    float: left;
		    width: 31%;
		    margin-right: 3.5%;
		    margin-bottom: 1rem;
		    background-color:#fff;
		    font-size:.4rem;
		    color:#ababab;
		    text-align:center;
		    line-height:.84rem;

		    &:nth-of-type(3n) {
			    margin-right: 0;
			}
			.artisan_item{
				display:block;
				.surface{
					width:100%;
					height:5.2rem;
					display:block;
				}
				.desc_box{
					padding:.2rem;
					.desc_title{
						font-size:.56rem;
						@include sl();
					}
					.desc_describe{
						@include sl();
					}
				}
	
			}
			
		}
			
	}

	//更多
	.empty_data{
		@include sc(0.5rem, #818181);
		text-align: center;
		line-height: 2rem;
	}
</style>