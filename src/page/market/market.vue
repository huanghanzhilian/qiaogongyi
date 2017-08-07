<template>
    <div class="market food_container">
    	<!-- 头部 -->
    	<!--<head-top search="true">
    		<router-link to="/msite" slot="shocart" class="shocart_item">
				<span class="icon-xiangqing_icon_gouwuche"></span>
			</router-link>
    	</head-top>-->
    	<!-- 头部筛选区域 -->
		<section class="sort_container">


			<div class="sort_item" :class="{choose_type:sortBy == 'sort'}">
				<div class="sort_item_container" @click="chooseType('sort')">
    				<div class="sort_item_border">
    					<span class="" :class="{category_title: sortBy == 'sort',active:q1title!='壶形'}">{{q1title}}</span>
		    			<span class="icon-jishi_icon_xuanze sort_icon sort_icon"></span>
    				</div>
    			</div>
    			<transition name="showlist">
	    			<section class="sort_detail_type" v-show="sortBy == 'sort'">
	    				<ul class="sort_list_container">
	    					<li class="sort_list_li" @click="sortList('','壶形')">
	    						<p class="" data="0" :class="{sort_select: sortByType == ''}">
	    							<span>不限</span>
	    						</p>
	    					</li>
	    					<li v-for="(item,index) in subTagList1" class="sort_list_li" @click="sortList(item.tagId,item.tagName)">
	    						<p data="item.tagId" :class="{sort_select: sortByType == item.tagId}">
	    							<span>{{item.tagName}}</span>
	    						</p>
	    					</li>
	    				</ul>
	    			</section>
	    		</transition>
			</div>

			<div class="sort_item" :class="{choose_type:sortBy == 'sort2'}">
				<div class="sort_item_container" @click="chooseType('sort2')">
    				<div class="sort_item_border">
    					<span class="" :class="{category_title: sortBy == 'sort2',active:q1title2!='泥料'}">{{q1title2}}</span>
		    			<span class="icon-jishi_icon_xuanze sort_icon sort_icon"></span>
    				</div>
    			</div>
    			<transition name="showlist">
	    			<section class="sort_detail_type" v-show="sortBy == 'sort2'">
	    				<ul class="sort_list_container">
	    					<li class="sort_list_li" @click="sortList2('','泥料')">
	    						<p class="" data="0" :class="{sort_select: sortByType2 == ''}">
	    							<span>不限</span>
	    						</p>
	    					</li>
	    					<li v-for="(item,index) in subTagList2" class="sort_list_li" @click="sortList2(item.tagId,item.tagName)">
	    						<p data="item.tagId" :class="{sort_select: sortByType2 == item.tagId}">
	    							<span>{{item.tagName}}</span>
	    						</p>
	    					</li>
	    				</ul>
	    			</section>
	    		</transition>
			</div>

			<div class="sort_item" :class="{choose_type:sortBy == 'sort3'}">
				<div class="sort_item_container" @click="chooseType('sort3')">
    				<div class="sort_item_border">
    					<span class="" :class="{category_title: sortBy == 'sort3',active:q1title3!='主题'}">{{q1title3}}</span>
		    			<span class="icon-jishi_icon_xuanze sort_icon sort_icon"></span>
    				</div>
    			</div>
    			<transition name="showlist">
	    			<section class="sort_detail_type" v-show="sortBy == 'sort3'">
	    				<ul class="sort_list_container">
	    					<li class="sort_list_li" @click="sortList3('','主题')">
	    						<p class="" data="0" :class="{sort_select: sortByType3 == ''}">
	    							<span>不限</span>
	    						</p>
	    					</li>
	    					<li v-for="(item,index) in subTagList3" class="sort_list_li" @click="sortList3(item.tagId,item.tagName)">
	    						<p data="item.tagId" :class="{sort_select: sortByType3 == item.tagId}">
	    							<span>{{item.tagName}}</span>
	    						</p>
	    					</li>
	    				</ul>
	    			</section>
	    		</transition>
			</div>

			<div class="sort_item" :class="{choose_type:sortBy == 'activity'}">
    			<div class="sort_item_container" @click="chooseType('activity')">
	    			<span class="slpwopaq" :class="{category_title: sortBy == 'activity',active:spolpp}">{{ksowleo}}</span>
	    			<span class="icon-jishi_icon_xuanze sort_icon sort_icon"></span>
    			</div>
	    		<transition name="showlist">
	    			<section v-show="sortBy == 'activity'" class="sort_detail_type filter_container">
	    				<section style="padding:.0rem .8rem 0rem;">
	    					<header class="filter_header_style">功能</header>
	    					<ul class="filter_ul">
	    						<li v-for="item in subTagMap" :key="item.tagId" class="filter_li" @click="selectDeliveryMode(item.tagId,item.tagName)">
	    							<span :class="{selected_filter: delivery_mode == item.tagId}">{{item.tagName}}</span>
	    						</li>
	    					</ul>
	    				</section>
	    				<section style="padding:.0rem .8rem 0rem;">
	    					<header class="filter_header_style">容量(cc)</header>
	    					<ul class="filter_ul">
	    						<li v-for="item in subTagMap2" :key="item.tagId" class="filter_li" @click="selectDeliveryMode2(item.tagId,item.tagName)">
	    							<span :class="{selected_filter: delivery_mode2 == item.tagId}">{{item.tagName}}</span>
	    						</li>
	    					</ul>
	    				</section>

	    				<section style="padding:.0rem .8rem 0rem;">
	    					<header class="filter_header_style">价格(元)</header>
	    					<ul class="filter_ul">
	    						<li v-for="item in subTagMap3" :key="item.tagId" class="filter_li" @click="selectDeliveryMode3(item.tagId,item.tagName)">
	    							<span :class="{selected_filter: delivery_mode3 == item.tagId}">{{item.tagName}}</span>
	    						</li>
	    					</ul>
	    				</section>

	    				<footer class="confirm_filter">
	    					<div class="clear_all filter_button_style" @click="clearSelect">重置</div>
	    					<div class="confirm_select filter_button_style" @click="confirmSelectFun">确定</div>
	    				</footer>
	    			</section>
	    		</transition>
    		</div>


    	</section>
    	<!-- 头部筛选区域遮罩层 -->
    	<transition name="showcover" >
    		<div class="back_cover" @click="huskls" @touchmove="slaoak($event)" v-show="sortBy"></div>
    	</transition>

    	<section class="shop_list_container">
	    	<goods-list :jskop="jskop" :shareId="shareId"></goods-list>
    	</section>
    	<!-- 公共底部 -->
    	<foot-guide></foot-guide>

    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import headTop from 'src/components/header/head'
import goodsList from 'src/components/common/goodslist'
import footGuide from 'src/components/footer/footGuide'
import {getImgPath} from 'src/components/common/mixin'
import {getWarelist} from 'src/service/getData'
import {getStore,setStore} from 'src/config/mUtils'

export default {
	data(){
        return {
            foodTitle: '', // 排序左侧头部标题
            restaurant_category_id: '', // 商品类型id值
            restaurant_category_ids: '', //筛选类型的id
            sortBy: '', // 筛选的条件
            category: null, // category分类左侧数据
            categoryDetail: null, // category分类右侧的详细数据
            sortByType: '', // 根据何种方式排序
            sortByType2:'',
            sortByType3:'',



            Delivery: null, // 配送方式数据
            Activity: null, // 商家支持活动数据
            delivery_mode: '', // 选中的配送方式
            delivery_mode2: '',
            delivery_mode3: '',

            support_ids: [], // 选中的商铺活动列表
            filterNum: [], // 所选中的所有样式的集合

            confirmStatus: false, // 确认选择

            preparation1:null,
            subTagList1:null,
            preparation2:null,
            subTagList2:null,
            preparation3:null,
            subTagList3:null,
            preparation4:null,
            subTagList4:null,

            q1title:'壶形',
            q1title2:'泥料',
            q1title3:'主题',
            ksowleo:'更多',

            subTagMap:null,//功能
			subTagMap2:null,//容量区间
			subTagMap3:null,//价格区间   

			suopows:[],
			suopow:'',
			shareId:'',//储存

			spolpp:false,//更多单个选中文字

        }
    },
    async beforeMount(){
    	//判断是否有推荐者
    	this.shareId= getStore('shareId');
		//保存geohash 到vuex
		this.SKEPOID(this.shareId);
		/*if (!this.$route.query.shareId) {
			this.shareId= getStore('shareId');
			//保存geohash 到vuex
			this.SKEPOID(this.shareId);
		}*/
    },

    components: {
    	headTop,
    	footGuide,
    	goodsList
    },
    created(){
    	this.initData();
    },
    computed: {
        ...mapState([
            'userInfo'
        ]),
        jskop:function(){
        	var poi=[this.sortByType,this.sortByType2,this.sortByType3];
        	var opop=poi.concat(this.suopows);
        	var jkp=this.ayysho(opop);
        	return jkp.toString();
        }
    },
    methods: {
    	...mapMutations([
    		'RECORD_ADDRESS','SKEPOID'
    	]),
    	//初始化获取数据
        async initData(){
		    //获取category分类左侧数据
		    var box=await getWarelist();
	    	this.category = box.object;
	    	this.preparation1=box.object['101'];
	    	this.subTagList1=box.object['101']['subTagList']
			this.preparation2=box.object['102'];
			this.subTagList2=box.object['102']['subTagList']
			this.preparation3=box.object['103'];
			this.subTagList3=box.object['103']['subTagList']
			this.preparation4=box.object['104'];
			this.subTagList4=box.object['104']['subTagMap'];
			this.subTagMap=box.object['104']['subTagMap']['141']['subTagList'];
			this.subTagMap2=box.object['104']['subTagMap']['142']['subTagList'];
			this.subTagMap3=box.object['104']['subTagMap']['143']['subTagList'];
        },
        // 点击顶部三个选项，展示不同的列表，选中当前选项进行展示，同时收回其他选项
    	async chooseType(type){
    		if (this.sortBy !== type) {
    			this.sortBy = type;
    			//food选项中头部标题发生改变，需要特殊处理
    			if (type == 'food') {
					this.foodTitle = '分类';
    			}else{
    				//将foodTitle 和 headTitle 进行同步
    				this.foodTitle = this.headTitle;
    			}
    		}else{
    			//再次点击相同选项时收回列表
    			this.sortBy = '';
    			if (type == 'food') {
    				//将foodTitle 和 headTitle 进行同步
    				this.foodTitle = this.headTitle;
    			}
    		}
    	},

    	//选中Category左侧列表的某个选项时，右侧渲染相应的sub_categories列表
		selectCategoryName(id, index,inde){
			this.restaurant_category_id = id;
			this.categoryDetail = this.category[index].subTagList[inde].subTagList;
		},

		//点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染
		sortList(id,name){
			this.sortByType = id;
			this.sortBy = '';
			this.q1title=name;
			//console.log(this.jskop)
		},

		//点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染22
		sortList2(id,name){
			this.sortByType2 = id;
			this.sortBy = '';
			this.q1title2=name;
		},

		//点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染22
		sortList3(id,name){
			this.sortByType3 = id;
			this.sortBy = '';
			this.q1title3=name;
		},

		//选中Category右侧列表的某个选项时，进行筛选，重新获取数据并渲染
		getCategoryIds(id, name){
			this.restaurant_category_ids = id;
			this.sortBy = '';
			this.foodTitle = this.headTitle = name;
		},


		//筛选选项中的配送方式选择
		selectDeliveryMode(id,tit){
			if (this.delivery_mode == '') {
				this.delivery_mode = id;
			}else if(this.delivery_mode == id){
				this.delivery_mode = '';
			}else{
				this.delivery_mode = id;
			}
		},

		//筛选选项中的配送方式选择
		selectDeliveryMode2(id,tit){
			if (this.delivery_mode2 == '') {
				this.delivery_mode2 = id;
			}else if(this.delivery_mode2 == id){
				this.delivery_mode2 = '';
			}else{
				this.delivery_mode2 = id;
			}
		},

		//筛选选项中的配送方式选择
		selectDeliveryMode3(id,tit){
			if (this.delivery_mode3 == '') {
				this.delivery_mode3 = id;
			}else if(this.delivery_mode3 == id){
				this.delivery_mode3 = '';
			}else{
				this.delivery_mode3 = id;
			}
		},


		//只有点击清空按钮才清空数据，否则一直保持原有状态
		clearSelect(){
            //this.support_ids.map(item => item.status = false);
            //this.filterNum = 0;
            this.delivery_mode = '';
            this.delivery_mode2 = '';
            this.delivery_mode3 = '';
            this.ksowleo="更多";
		},
		//点击确认时，将需要筛选的id值传递给子组件，并且收回列表
		confirmSelectFun(){
			//合并数组
			var lowp=this.subTagMap.concat(this.subTagMap2,this.subTagMap3)
			//状态改变时，因为子组件进行了监听，会重新获取数据进行筛选
			//this.confirmStatus = !this.confirmStatus;
			var jp=[];
			jp.push(this.delivery_mode,this.delivery_mode2,this.delivery_mode3);
			this.suopows=jp;
			//console.log(jp)
			var jkp=this.ayysho(jp);
			//console.log(jkp.toString())
			//console.log(jkp)
            this.sortBy = '';
            //console.log(this.jskop)
            //console.log(jkp.length)
            if(jkp.length==0){
            	this.ksowleo="更多";
            	this.spolpp=false;
            }else if(jkp.length==1){
            	this.spolpp=true;
            	for(var i=0;i<lowp.length;i++){
            		if(lowp[i].tagId==jkp[0]){
            			this.ksowleo=lowp[i].tagName;
            		}
            	}
            }else{
            	this.ksowleo="多选";
            	this.spolpp=true;
            }            
		},
		//去除空数组
		ayysho(array){
			for(var i = 0 ;i<array.length;i++)  
			{  
				if(array[i] == "" || typeof(array[i]) == "undefined")  
				{  
			      array.splice(i,1);  
			      i= i-1;  
				}  
			}  
			return array;  
		},
		huskls(){
			this.sortBy = '';
		},

		//触摸
		slaoak(event){
			event.preventDefault()
		}




    },
}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
	.food_container{
		//padding-top: 3.6rem;
		padding-top: 1.65rem;
		padding-bottom: 2.4rem;
	}
	.listtiem{
		font-family: "huangFont";
		font-size:.64rem;
	}
	.sort_container{
		background-color: #fff;
		//border-bottom: 0.025rem solid #f1f1f1;
		position: fixed;
		//top: 1.95rem;
		top: 0rem;
		right: 0;
		width: 100%;
		display: flex;
		z-index: 13;
		box-sizing: border-box;
		//border-bottom: 1px solid #bbb;
		.sort_item{
			@include sc(0.55rem, #444);
			@include wh(33.3%, 1.6rem);
			text-align: center;
			line-height: 1rem;
			.sort_item_container{
				@include wh(100%, 100%);
				position: relative;
				z-index: 14;
				background-color: #fff;
				box-sizing: border-box;
				padding-top: .3rem;
				vertical-align: middle;
			    border-bottom: 0.025rem solid $bc;
				.slpwopaq{
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    display: inline-block;
				    max-width: 59px;
				    vertical-align: middle;
				}
				.active{
						color:#B4282D;
					}
				.sort_item_border{
					height: 1rem;
					border-right: 0.025rem solid $bc;
					.active{
						color:#B4282D;
					}
				}
			}
			.sort_icon{
				vertical-align: middle;
				transition: all .3s;
				fill:#666;
				font-size:.35rem;
			}
			
		}
		.choose_type{
			.sort_item_container{

				.category_title{
					color: #B4282D;
				}
				.sort_icon{
					transform: rotate(180deg);
					fill:$blue;
					color:#B4282D; 				
					display: inline-block;
				}
			}
		}
		.showlist-enter-active, .showlist-leave-active {
			transition: all .3s;
			transform: translateY(0);
		}
		.showlist-enter, .showlist-leave-active {
			opacity: 0;
			transform: translateY(-100%);
		}
		.sort_detail_type{
			/*width: 100%;
			position: absolute;
			display:flex;
			top: 1.6rem;
			left: 0;
			border-top: 0.025rem solid $bc;
			background-color: #fff;*/
			position: fixed;
		    top: 0;
		    left: 0;
		    right: 0;
		    bottom: 0;
		    background-color: #fff;
		    z-index: 2;
		    padding-top: 1.65rem;
		}
		.category_container{
			.category_left{
				flex: 1;
				background-color: #f1f1f1;
				height: 16rem;
				overflow-y: auto;
				span{
					@include sc(0.5rem, #666);
					line-height: 1.8rem;
				}
				.category_left_li{
					@include fj;
					padding:0 0.5rem;
					.category_icon{
						@include wh(.8rem, .8rem);
						vertical-align: middle;
						margin-right: .2rem;
					}
					.category_count{
						background-color: #ccc;
						@include sc(.4rem, #fff);
						padding: 0 .1rem;
						border: 0.025rem solid #ccc;
						border-radius: 0.8rem;
						vertical-align: middle;
						margin-right: 0.25rem;
					}
					.category_arrow{
						vertical-align: middle;
					}
				}
				.category_active{
					background-color: #fff;
				}
			}
			.category_right{
				flex: 1;
				background-color: #fff;
				padding-left: 0.5rem;
				height: 16rem;
				overflow-y: auto;
				.category_right_li{
					@include fj;
					height: 1.8rem;
					line-height: 1.8rem;
					padding-right: 0.5rem;
					border-bottom: 0.025rem solid $bc;
					span{
						color: #666;
					}
				}
				.category_right_choosed{
					span{
						color: $blue;
					}
				}
			}
		}
		.sort_list_container{
			//width: 100%;
			padding-bottom:.4rem;
			padding:1.2rem .8rem;
			.sort_list_li{
				//height: 2.2rem;
				//display: flex;
				//align-items: center;
				height: 1.1rem;
				float: left;
				width: 30%;
    			margin-right: 5%;
    			margin-bottom: 1rem;
    			&:nth-of-type(3n) {
				    margin-right: 0;
				}
				p{
					//flex: auto;
					//text-align: center;
					//text-indent: 0.25rem;
					//border-bottom: 0.025rem solid $bc;
					//@include fj;
					span{
						//display:block;
					    display: inline-block;
    					background: #F5F5F5;
						text-align: center;
						width:100%;
						height:100%;
						color: #818181;
						padding:0 .4rem;
						border-radius: .2rem;
						border: 1px solid #F5F5F5;
					    vertical-align: middle;

					}
				}
				.sort_select{
					span{
						border: 1px solid #B4282D;
						color: #B4282D;
						background: #fff;
					}
				}
			}
		}
		.filter_container{
			flex-direction: column;
			align-items: flex-start;
			min-height: 10.6rem;
			background-color: #fff;
			font-size:.52rem;
			.filter_header_style{
				@include sc(.60rem, #333);
				line-height: 1.8rem;
				height: 1.8rem;
				text-align: left;
				//padding-left: .8rem;
				background-color: #fff;
			}
			.filter_ul{
				display: flex;
				flex-wrap: wrap;
				//padding: 0 0.5rem;
				background-color: #fff;
				.filter_li{
					text-align: center;
					
					@include wh(30%, 1.1rem);
					margin-right: 5%;
					border-radius: 0.125rem;
					//padding: 0 0.25rem;
					margin-bottom: 1rem;
					float: left;
					&:nth-of-type(3n) {
					    margin-right: 0;
					}

					svg{
						@include wh(.8rem, .8rem);
						margin-right: 0.125rem;
					}
					span{
						@include sc(0.52rem, #333);
						background:#F5F5F5;
						color:#818181;
						display: inline-block;
						width:100%;
						border: 0.025rem solid #F5F5F5;
						border-radius: 0.15rem;
					}
					.filter_icon{
						@include wh(.8rem, .8rem);
						font-size: 0.5rem;
						border: 0.025rem solid $bc;
						border-radius: 0.15rem;
						margin-right: 0.25rem;
						line-height: .8rem;
						text-align: center;

					}
					.activity_svg{
						margin-right: .25rem;
					}
					.selected_filter{
						color: #B4282D;
						background:#fff;
						border: 0.025rem solid #B4282D;
					}
				}
			}
			.confirm_filter{
				display: flex;
				background-color: #fff;
				box-shadow: 0 0 8px -2px rgba(7,17,27,.4);
				width: 100%;
				padding: .3rem .9rem;
				position: absolute;
    			bottom: 0;
				.filter_button_style{
					@include wh(50%, 1.5rem);
					font-size: 0.62rem;
					line-height: 1.5rem;
					border-radius: 0.2rem;
				}
				.clear_all{
					background-color: #D9D9D9;
					margin-right: .5rem;
					border: 0.025rem solid #fff;
					color:#818181;
				}
				.confirm_select{
					background-color: #B4282D;
					color: #fff;
					span{
						color: #fff;
					}
				}
			}
		}
	}
	.empty_data{
		font-size:.64rem;
		text-align: center;
	}
	.showcover-enter-active, .showcover-leave-active {
		transition: opacity .3s
	}
	.showcover-enter, .showcover-leave-active {
		opacity: 0
	}
	.back_cover{
		position: fixed;
		@include wh(100%, 100%);
		z-index: 10;
		background-color: rgba(0,0,0,0.3);
	}
</style>
