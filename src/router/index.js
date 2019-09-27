import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import TestPage from '@/components/TestPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path: '/MainPage',
			name: 'MainPage',
			component: MainPage
    },
    {
      path: '/TestPage',
      name: 'TestPage',
      component: TestPage
    }
  ]
})
