<template>
  <div id="app">
 <!--       <mt-header fixed>
         <router-link title="awda"  to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
         </router-link>
         <mt-button icon="more" slot="right"></mt-button>
       </mt-header> -->
        <van-nav-bar
        title=""
        left-text="首页"
        right-text="按钮"
        @click-left="onClickLeft()"
        @click-right="onClickRight()"
           /> 
  
      <transition >
       <router-view class="app"></router-view>
      </transition>
        <nav class="mui-bar mui-bar-tab">    
            <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
            </router-link>
              <router-link class="mui-tab-item  " to="/member">
            <span class="mui-icon mui-icon-pengyouquan"></span>
            <span class="mui-tab-label">会员</span>
            </router-link>
              <router-link class="mui-tab-item " to="/shopcar">
            <span class="mui-icon mui-icon-extra  mui-icon-extra-cart  "><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">购物车</span>
            </router-link>
              <router-link class="mui-tab-item " to="/search">
            <span class="mui-icon mui-icon-contact "></span>
            <span class="mui-tab-label" v-show="this.$store.state.login==1">我的</span>
            <span class="mui-tab-label" v-show="this.$store.state.login==0">未登录</span>
            </router-link>
        </nav>
                   <!-- <mt-tabbar v-model="selected">
         <mt-tab-item id="外卖">
          <img slot="icon" src="./assets/shouye (1).svg" alt="">
           首页
         </mt-tab-item>
         <mt-tab-item id="订单">
           <img slot="icon" src="./assets/xiaoxi.svg">
          消息
         </mt-tab-item>
         <mt-tab-item id="发现">
           <img slot="icon" src="./assets/icon-test.svg">
           购物车
         </mt-tab-item>
         <mt-tab-item id="我的">
           <img slot="icon" src="./assets/wode.svg">
           我的
         </mt-tab-item>
     </mt-tabbar> -->
  </div>
</template>
 <script>
 export default {
    data() {
      return  {
        selected:"",
        title:"",
        x:"dsad"

      }
    },created(){
  
      },methods:{
            onClickLeft() {
               this.$router.push("/")
        },
        onClickRight() {
              alert()
        }
    }
 }
 </script>
 
<style scoped>
   #app{
     padding-top:0px;
     overflow-x: hidden;
   }
   img{
     font-size: 20px;
   }
   .v-enter{
     opacity: 0;
     transform: translateX(100%);
   }
      .v-leave-to{
     opacity: 0;
     transform: translateX(-100%);
     position: absolute;
   }
   .v-enter-active, 
   .v-leave-active{
     transition: all 0.5s ease;
   }
   .mui-bar{
     box-shadow: 0 0 0 !important;
   }
</style>
