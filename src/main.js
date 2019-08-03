import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* ui */
import MintUI from 'mint-ui'
import'mint-ui/lib/style.css'
import'./lib/mui/css/mui.min.css'
import'./lib/mui/fonts/mui-icons-extra.ttf'
import'./lib/mui/css/icons-extra.css'
import Vant from 'vant';
import 'vant/lib/index.css';
/* 组件 */
import axios from "./axios"
import VueResource from 'vue-resource'


Vue.use(MintUI);
Vue.use(VueResource) 
Vue.use(Vant);
/* vuex */
import Vuex from "vuex"
Vue.use(Vuex)

/* ======================VUEX========================== */

/* ====================================================== */


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
   