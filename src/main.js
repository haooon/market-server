// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import haooon from './haooon.js'
import Promise from "promise-polyfill";
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(haooon)
Vue.config.productionTip = false
// fetch
if(!window.Promise){
    window.Promise = Promise;
}
const store = new Vuex.Store({
  state: {
    infoData: null
  },
  mutations: {
    setInfo (state, info) {
      state.infoData = info
    }
  }
})

Vue.prototype.$store = store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
