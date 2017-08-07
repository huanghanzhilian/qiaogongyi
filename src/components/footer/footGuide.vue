<template>
    <section id='foot_guide'>
        <section @click = "gotoAddress({path: '/msite'})" :class="['guide_item',{active :$route.path.indexOf('msite') !== -1}]">
            <span class="icon_styles icon-tabbar_icon_youxuan"></span>
            <span>优选</span>
        </section>
        <section @click = "gotoAddress({path: '/market'})" :class="['guide_item',{active :$route.path.indexOf('market') !== -1}]">
            <span class="icon_styles icon-tabbar_icon_jishi"></span>
            <span>集市</span>
        </section>
        <!--<section @click = "gotoAddress({path: '/order'})" :class="['guide_item',{active :$route.path.indexOf('order') !== -1}]">
            <span class="icon_styles icon-tabbar_icon_hehuo"></span>
            <span>合伙</span>
        </section>-->
        <!--<section @click = "gotoAddress({path: '/profile', query: {shareId}})" :class="['guide_item',{active :$route.path.indexOf('profile') !== -1}]">
            <span class="icon_styles icon-tabbar_icon_wode"></span>
            <span>我的</span>
        </section>-->
        <section @click = "gotoAddress({path: '/profile'})" :class="['guide_item',{active :$route.path.indexOf('profile') !== -1}]">
            <span class="icon_styles icon-tabbar_icon_wode"></span>
            <span>我的</span>
        </section>
    </section>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
    	data(){
            return{
                
            }
        },
        created(){
           //console.log(this.$route)
           //console.log(this.shareId)
           //console.log(this.userInfo)
        },
        mounted(){
            
        },
        computed: {
            ...mapState([
                'login','shareId','userId','userInfo'
            ]),
        },
        methods: {
        	gotoAddress(path){
                /*console.log(path.path)
                if(path.path=='/profile'){
                    alert(1)
                }*/
        		this.$router.push(path)
                
        	}
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #foot_guide{
        background-color: #fff;
        position: fixed;
        z-index: 12;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 2rem);
        display: flex;
        box-shadow: 0 0 10px 1px rgba(7,17,27,.1);
    }
    .guide_item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
    	align-items: center;
		.icon_style{
			@include wh(.8rem, .8rem);
			margin-bottom: .2rem;
			margin-top: .3rem;
			fill: #ccc;
		}
        .icon_styles{
            margin-bottom: .2rem;
            margin-top: .2rem;
            fill: #ccc;
            font-size:.9rem;
            color: #818181;
        }
        &.active span{
            color: #B4282D;
        }
		span{
            font-size:.45rem;
            color: #818181;
		}
    }
   
</style>
