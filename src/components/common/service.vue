<template>
	<!-- 组件盒子 -->
	<div class="followlist_container">
		<!-- 列表盒子 -->
		<ul v-load-more="loaderMore" class="follow_wrap" v-if="followListArr.length" type="1">
			<router-link v-for="(item, index) in followListArr" :key="item.authorId" :to="{path: '/myfollow', query:{ goodsId: 1}}" tag='li' class="follow_list">
				<img class="follow_image" :src="item.authorHeadUrl">
				<div class="follow_info"> 
					<p><span>{{item.authorName}}</span>{{item.authorLevel}}</p>
					<p>粉丝：{{item.followCount}}&emsp;|&emsp;作品：{{item.goodsCount}}</p>
				</div>
				<span @click="slaoak($event,index,item.authorId)" class="is_follow">已关注</span>
			</router-link>
		</ul>
		<!-- 列表盒子 -->

		<p v-if="touchend" class="empty_data">没有更多了</p>

		<!-- loading -->
		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>
		<!-- loading -->


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
import {mapState} from 'vuex'
import {getmyAuthors,deleteFollow} from 'src/service/getData'
import {imgBaseUrl} from 'src/config/env'
import {showBack, animate} from 'src/config/mUtils'
import {loadMore, getImgPath} from './mixin'
import loading from './loading'
import ratingStar from './ratingStar'

export default {
	//数据
	data(){
		return {
			pagenum:1,//页码
			querySize:'8',//页条数
			followListArr:[],//关注列表
			touchend: false, //没有更多数据
			showLoading: true, //显示加载动画
			preventRepeatReuqest: false, //到达底部加载数据，防止重复加载

			showDialogue: false,//显示对话
			wyexnumber:null,
			wyexId:null,
		}
	},
	//开始创建  vue后自动执行
	mounted(){
		this.initData();
		Array.prototype.baoremove = function(dx){
			if(isNaN(dx)||dx>this.length){
				return false;
			}
			this.splice(dx,1);
		}
	},
	//需要使用的模块
	components: {
		loading,
		ratingStar,
	},

	//父组件的参数书
	props: ['jskop','shareId'],

	//需要引用的外部js方法
	mixins: [loadMore, getImgPath],

	//计算值 这里可以实时监听某个数据的变化
	computed: {
		...mapState([
			'userInfo'
		]),
	},
	updated(){
		// console.log(this.supportIds, this.sortByType)
	},
	//方法
	methods: {
		async initData(){
			//获取数据
			let res = await getmyAuthors(this.pagenum, this.querySize);
			this.followListArr = [...res.object];
			//console.log(this.followListArr)
			if (res.object.length < 8) {
				this.touchend = true;
			}
			this.hideLoading();
			//开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
			/*showBack(status => {
				this.showBackStatus = status;
			});*/
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
			//显示动画
			this.showLoading = true;
			this.preventRepeatReuqest = true;

			//数据页码+1
			this.pagenum+=1;
			let res = await getmyAuthors(this.pagenum, this.querySize);
			this.hideLoading();
			this.followListArr = [...this.followListArr, ...res.object];
			//当获取数据小于20，说明没有更多数据，不需要再次请求数据
			if (res.length < 8) {
				this.touchend = true;
				return
			}
			this.preventRepeatReuqest = false;
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
		//确认删除我的关注
		async slaoaks(){
			let res = await deleteFollow(this.wyexId);
			if(res){
				this.followListArr.baoremove(this.wyexnumber)
	        	this.wyexnumber=null;
	        	this.wyexId='';
				this.toggleDialogue()
			}
		},
	},

	watch: {

	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
	.followlist_container{
		font-size:.48rem;
		.follow_list{
			display:block;
            display:flex;
            box-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding:.5rem .40rem;
            background-color:#fff;
            margin-bottom:.4rem;
			.follow_image{
				width:2.56rem;
				height:2.56rem;
				border-radius: 50%;
				display:inline-block;
				vertical-align:middle;
			}
			.follow_info{
				margin-left: .48rem;
				-webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
				p{
					color:#818181;
					line-height: 1rem;
					span{
						font-size:.56rem;
						color:#333;
						margin-right:.3rem;
					}
				}
			}
			.is_follow{
			    height: 0.96rem;
			    line-height: 0.96rem;
			    border:1px solid #DEA34C;
			    border-radius:.1rem;
			    padding:0 .5rem;
			    color:#DEA34C;
    			display: inline-block;
			}
		}

	}
	.empty_data{
		@include sc(0.5rem, #666);
		text-align: center;
		line-height: 2rem;
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