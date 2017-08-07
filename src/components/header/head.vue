<template>
    <header id='head_top' :class="{'logins':logins}">
        <slot name='logo'></slot>
        <slot name='search'></slot>
        <section  class="head_goback" v-if="goBack" @click="oplsiwo">
            <span class="icon-xiangqing_icon_fanhui go_back" :class="{'goBackcolor':goBackcolor}"></span>
        </section>

        <section class="search-input" v-if="search">
        	<span class="icon-jishi_icon_sousuo"></span>
            <input type="text" class="search_item" name="words" value="" placeholder="搜索">
        </section>

        <slot name="shocart"></slot>
        <slot name="shocarts"></slot>

        <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span" v-else>登录|注册</span>
        </router-link>
        
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import {getStore} from 'src/config/mUtils'
    export default {
    	data(){
            return{

            }
        },
        mounted(){
            //获取用户信息
            //this.getUserInfo();
            //console.log(getStore('userId'))
            //console.log(this.userId)

        },
        props: ['signinUp', 'headTitle', 'goBack','goBackcolor','search','logins'],
        computed: {
            ...mapState([
                'userId'
            ]),
        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
            //如果有code返回两步
	        oplsiwo(){
	        	if(history.length==1){
					this.$router.push('market')
				}else{
					if(this.$route.query.code){
		        		this.$router.push('market')
		        	}else{
		        		this.$router.go(-1)
		        	}
				}
	        	
	        	
	        }
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #head_top{
        background-color: $topbg;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
    }
    #head_top.logins{
    	background-color: transparent;
    }
    .go_back{
    	font-size:.8rem;
    	&.goBackcolor{
    		color:#fff;
    	}
    }
    .head_goback{
        left: 0.4rem;
        @include wh(0.6rem, 1rem);
        line-height: 1.9rem;
        margin-left: .4rem;
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include sc(0.8rem, #333);
            text-align: center;
            font-weight: 400;
        }
    }

    .shocart_item{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        font-size:.9rem;
    }
    .shocart_items{
    	right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        font-size:.9rem;
    }
    
    .search-input{
        width:11.8rem;
        left:.55rem;
        @include ct;
        height:1.12rem;
        .search_item{
            box-sizing: border-box;
            padding:0 1rem;
            width:100%;
            height:100%;
            display:block;
            border-radius: 4px;
            color:#8e8e93;
            background:rgba(0,0,0,0.08);
        }
        span{
            position: absolute;
            top:0;
            font-size:.6rem;
            @include ct;
            left:.2rem;
        }
    }
    
</style>
