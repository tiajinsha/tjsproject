<template>
    <div class="parsent">
        <div class="title"  :style="{backgroundImage:`url(${list.images.small})`}"></div>
        <div class="title-list"></div>
            <div class="detail-info">
                <img :src="list.images.large" alt="">
            </div>
            <div class="d1">{{list.title}}</div>
            <div class="d1">上映日期{{list.mainland_pubdate}}</div>
            <div class="d1">评分:{{list.rating.average}}</div>
            <div class="d1">地区:{{list.countries[0]}} {{list.countries[1]}}</div>
            <div class="d1">主演：{{list.casts[0].name}},{{list.casts[1].name}},{{list.casts[2].name}}</div>
            <div class="d2">电影详情：{{list.summary}}</div>
            
    </div>
</template>
<script>
export default {
data(){
    return{
        list:[]
    }
},
props:["lid"],
methods:{
    movietitle(){
                var url=`http://api.douban.com/v2/movie/subject/${this.lid}?apikey=0df993c66c0c636e29ecbb5344252a4a`
               this.$http.jsonp(url, {},{ 
                headers: {},
                emulateJSON: true }).then((response) =>{
                   var result=response.body
                   this.list=result
                   console.log(this.list)
                   console.log(this.lid)
             });  
    }
},created(){
     this.movietitle()
}
}
</script>
<style scoped>
    .title{
        width: 100%;
        height: 611px;
        border: 1px solid red;
        opacity: 0.9;
        filter: blur(30px);
        margin-top:-40px;
    }
     .title-list{
       position: absolute;
       width: 100%;
       height: 610px;
       background: #333;
       top: 0;
       left: 0;
       z-index: -1;
    }
    img{
              width: 172px;
              height: 64%;
              margin-top: 30px;
    }

    /* 3.电影的详细信息 */
.detail-info{
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  padding: 20px;
}
.d1{
    width:210px;
    height: 46px;
    position: relative;
    top:-560px;
    left:190px;
    text-align: center;
    color: #fff;
    font-size: 24rpx;
}
.d2{
    width:90%;
    height: 280px;
    position: absolute;
    top:310px;
    color:#fff;
    font-weight: 100;
    font-size: 15px;
    margin-left: 24px;
}
</style>

