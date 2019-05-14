import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HomePage',
      component: ()=>import('@/pages/homePage/HomePage.vue'),
      children: [
        { // 下拉树
          path: '/SelectTree',
          name: 'SelectTree',
          component: ()=>import('@/pages/selectTree/SelectTree.vue')
        }, { //数据表格
          path: '/dataTable',
          name: 'dataTable',
          component: ()=>import('@/pages/table/dataTable.vue')
        }, { //数据表单
          path: '/dataForm',
          name: 'dataForm',
          component: ()=>import('@/pages/form/dataForm.vue')
        }
      ]
    }
  ]
})
