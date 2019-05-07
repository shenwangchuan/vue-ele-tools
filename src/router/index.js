import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'HomePage',
      component: ()=>import('@/pages/homePage/HomePage.vue'),
      children: [
        {
          path: '/SelectTree',
          name: 'SelectTree',
          component: ()=>import('@/pages/selectTree/SelectTree.vue')
        }
      ]
    }
  ]
})
