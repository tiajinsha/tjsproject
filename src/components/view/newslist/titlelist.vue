<template>
    <div>    
          <div class="mui-card">
	      <!--页眉，放置标题-->awdwadwadwa
	      <div class="mui-card-header mui-card-media"><div class="mui-media-body">
	      <p>发表于 2016-06-30 15:30</p>
	      </div></div>
	      <!--内容区-->
	      <div class="mui-card-content">
          <img src="./download.jpg" alt=""> 
          </div>
	      <!--页脚，放置补充信息或支持的操作-->
	      <div class="mui-card-footer">
              哇多久啊十大抠脚大汉无奈地表示的
          </div>
          </div>

             <div class="mui-card">
	      <!--页眉，放置标题-->awdwadwadwa
	      <div class="mui-card-header mui-card-media"><div class="mui-media-body">
	      <p>发表于 2016-06-30 15:30</p>
	      </div></div>
	      <!--内容区-->
	      <div class="mui-card-content">
          <img src="../../../assets/img/download.jpg" alt=""> 
          </div>
	      <!--页脚，放置补充信息或支持的操作-->
	      <div class="mui-card-footer">哇多久啊十大抠脚大汉无奈地表示的</div>
          </div> 
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },created(){
        this.getlunbotu()
    },methods:{
          methods: {
  },
         getlunbotu(){
       var url="http://api.tianapi.com/txapi/toutiaotxt/?&key=d171ec3c4755783de7dc5b00fed440ee&url=https://www.toutiao.com/i6692902120846262797/"
                var obj={};
                this.axios.get(url,{params:obj}).then(result=>{
                    console.log(result)
                })
                }
    }
}
</script>
<style scoped>
    img{
        width:100%;
    }
</style>
