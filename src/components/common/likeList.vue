<template>
	<div class="shoplist_container">
		<!-- 列表盒子 -->
		<ul class="like_list_box" v-load-more="loaderMore" v-if="shopListArr.length">
			<router-link v-for="(item,index) in shopListArr" :to="{path: '/details', query:{ goodsId: item.goodsId,shareId}}" tag='li' class="goodslist">
				<section>
					<div class="user_info_com clearfix">
						<img :src="item.author_head_url" class="shop_imgs">
						<div class="info_box">
							<p class="user_info">{{item.authorName}}</p>
							<p class="detail_info">{{item.authorLevelName}}</p>
						</div>
						<span @click="slaoak($event,index,item.goodsId)" class="oslwajwk soucpou_state"></span>
					</div>
				</section>
				<section class="surface">
					<img :src="item.pot_item_bg_url" class="surface_img">
				</section>
				<div class="desc-box">
					<span class="collection-tag">{{item.goodsName}}</span>
					￥ {{item.price}}
				</div>
			</router-link>
		</ul>
		<p v-if="touchend" class="empty_data">没有更多了</p>
		<div ref="abc" style="background-color: red;"></div>
		<!-- 动画loading -->
		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>



		<!-- 对话 -->
        <transition name="toggle-cart">
            <section class="cart_food_list " v-show="showDialogue">
            	<div class="item_wrap">
					<div class="item_difc item_confirm" @click="slaoaks">不在关注</div>
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
import {mapMutations, mapState} from 'vuex'
import {mylikeList,favoRite} from 'src/service/getData'
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

			showDialogue: false,//显示对话
			wyexnumber:null,
			wyexId:null,

			setnumber:0,
		}
	},
	mounted(){
		this.initData();
		Array.prototype.baoremove = function(dx){
			if(isNaN(dx)||dx>this.length){
				return false;
			}
			this.splice(dx,1);
		}
		this.setnumber=this.like;
		console.log(this.like)
	},
	components: {
		loading,
		ratingStar,
	},
	props: ['jskop','shareId'],
	mixins: [loadMore, getImgPath],
	computed: {
		...mapState([
			'userInfo','foolow','like'
		]),
	},
	updated(){
		// console.log(this.supportIds, this.sortByType)
	},
	methods: {
		...mapMutations([
            'SER_LIKE'
        ]),
		async initData(){
			//获取数据
			let res = await mylikeList(this.pagenum,this.querySize);
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
			let res = await mylikeList(this.pagenum,this.querySize);
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
			let res = await mylikeList(this.pagenum,this.querySize);
			//考虑到本地模拟数据是引用类型，所以返回一个新的数组
			this.shopListArr = res['object'];
			this.hideLoading();
		},
		//开发环境与编译环境loading隐藏方式不同
		hideLoading(){
			this.showLoading = false;
		},



		//控制购物列表是否显示
        toggleDialogue(){
			this.showDialogue = !this.showDialogue;
        },
        slaoak(event,index,id){
        	//this.followListArr.baoremove(index)
			event.preventDefault();
			this.toggleDialogue();
			this.wyexnumber=index;
			this.wyexId=id;
		},
		//确认删除我的喜欢
		async slaoaks(){
			let res = await favoRite(this.wyexId,'-1');
			if(res){
				if(this.like){
					//this.like=this.like-1;
					//console.log(this.setnumber-=1)
					this.SER_LIKE(this.setnumber-=1)
				}			
				this.shopListArr.baoremove(this.wyexnumber)
	        	this.wyexnumber=null;
	        	this.wyexId='';
				this.toggleDialogue()
			}
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
		display:block;
        display:flex;
        box-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
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
		margin-left: .48rem;
		-webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
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
		background-color: #f5f5f5;
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

	//新
	.oslwajwk{
		//color:#818181;
		//font-size:.80rem;
		width:.8rem;
		height:.74rem;
		display: inline-block;
		background: url(../../images/zuopinxiangqing_icon.png) no-repeat;
		background-size:100% 100%;
        &.soucpou_state{
            background: url(../../images/zuopinxiangqing_icon_xihaun.png) no-repeat;
            background-size:100% 100%;
        }
	}

	.like_list_box > li:last-child{
		//background-color:red;
		margin-bottom:0;
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