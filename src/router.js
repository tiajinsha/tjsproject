import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home'
import member from './components/member'
import shopcar from './components/shopcar'
import search from './components/searvh'
import homenewslist from './components/view/newslist/newslist'
import hometitlelit from './components/view/newslist/titlelist'
import homedianyinglist from './components/view/dianyinglist/dianyinglist'
import movietitle from './components/view/dianyinglist/movietitle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home
    },
    {
      path: '/member',
      component:member
    },
    {
      path: '/shopcar',
      component:shopcar
    },
    {
      path: '/search',
      component:search
    },
    /* ==========新闻=========== */
    {
      path:'/home/newslist',
      component:homenewslist
    },
    {
      path:'/home/newslist/titlelist',
      component:hometitlelit
    },
    /* ==============电影============== */
    {
      path:'/home/dianyinglist',
      component:homedianyinglist
    },
    {
      path:'/home/dianyinglist/movietitle/:lid',
      component:movietitle,
      props:true
    }
 
  ],
  linkActiveClass:'mui-active'
})