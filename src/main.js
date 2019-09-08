// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import haooon from './haooon.js'
import Promise from "promise-polyfill";

Vue.use(haooon)
Vue.config.productionTip = false
// fetch
if(!window.Promise){
    window.Promise = Promise;
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
