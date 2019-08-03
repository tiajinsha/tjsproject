<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../assets/img/downloa12d.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/img/download.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/img/download1.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
          <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell  mui-media mui-col-xs-4  mui-col-sm-4"><router-link  to="/home/newslist">
                  <img src="../assets/quanbuxinwen.svg" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
              <li class="mui-table-view-cell  mui-media mui-col-xs-4  mui-col-sm-4"><router-link  to="">
                  <img src="../assets/fenxiang.svg" alt="">
                <div class="mui-media-body">分享</div></router-link></li>
              <li class="mui-table-view-cell  mui-media mui-col-xs-4  mui-col-sm-4"><router-link  to="">
                  <img src="../assets/shangpin.svg" alt="">
                <div class="mui-media-body">购物</div></router-link></li>
              <li class="mui-table-view-cell  mui-media mui-col-xs-4  mui-col-sm-4"><router-link  to="">
                  <img src="../assets/lianxi.svg" alt="">
                <div class="mui-media-body">联系我们</div></router-link></li>
              <li class="mui-table-view-cell  mui-media mui-col-xs-4  mui-col-sm-4"><router-link  to="">
                <img src="../assets/shipin.svg" alt="">
                <div class="mui-media-body">视频</div></router-link></li>
   
              <li class="mui-table-view-cell  mui-media mui-col-xs-4  mui-col-sm-4"><router-link to="/home/dianyinglist">
                   <img src="../assets/dianying.svg" alt=""> 
                <div class="mui-media-body">豆瓣电影</div></router-link></li>
              
            </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.getlunbotu();
    },
    methods:{
         getlunbotu(){
    /*          this.$http.jsonp('', {},
           { 
          headers: {},
          emulateJSON: true }).then((response) => {
          this.movie = response.data;
          console.log(this.movie);
      }); */
        }
        
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
              img{
                width:100%;
              }
        }
    }  
</style>
