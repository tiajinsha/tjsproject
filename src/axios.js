/* 引入vue实例 */
import Vue from "vue"
/* 引入axios库 */
import axios from "axios"
/* 发送请求保存session信息 */
axios.defaults.withCredentials=true
/* 设置请求基础路径 */
axios.defaults.baseURL="http://127.0.0.1:3000"
/* 将axios注册vue实例 */
Vue.prototype.axios=axios 
/* 在main，js引入axios。js */
