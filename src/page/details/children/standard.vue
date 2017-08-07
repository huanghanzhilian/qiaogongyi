 <template>
	<div class="detail_page">
		<head-top :head-title="question.title" go-back='true'></head-top>
		123
	</div>
</template>

<script>

    export default {
      data(){
            return{
    			
            }
        },
        components: {
            headTop,
        },
        
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
  
    .detail_page{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 202;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .scroll_container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-top: 1.95rem;
        overflow-y: auto;
    }
    .markdown{
    	font-size: .65rem;
    	padding: 0 .7rem;
        color: #666;
        padding-bottom: 2rem;
    }

</style>
