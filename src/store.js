import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource) 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      login:0,
    },
  mutations: {
    increment(state){
      state.login="1";
    },
  },
  actions: {

  }
})
