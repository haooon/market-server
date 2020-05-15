// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import haooon from './haooon.js'
import Promise from "promise-polyfill";
import ElementUI from 'element-ui';
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

Vue.use(ElementUI);
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
  render: h => h(App),
  template: '<App/>'
})
