<template>
	<div class="shoplist_container">
		<ul v-if="shopListArr.length">
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
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {shopListas} from 'src/service/getData'
import {imgBaseUrl} from 'src/config/env'
import {showBack, animate} from 'src/config/mUtils'
import {loadMore, getImgPath} from './mixin'
import loading from './loading'
import ratingStar from './ratingStar'

export default {
	data(){
		return {
			pagenum:1,//页码
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
	props: ['tagValueId'],
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
			let res = await shopListas(this.tagValueId,this.pagenum,2,this.$route.query.goodsId);
			this.shopListArr = res['object'];
		},
	},
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
		//margin-bottom: 2rem;
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
	
</style>