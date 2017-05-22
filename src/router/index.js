import Vue from 'vue'
import Router from 'vue-router'
import homeWrapper from '@/pages/home_wrapper'
import homeTabA from '@/pages/home_tab_a'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: homeWrapper,
      children: [
        {
          path: '',
          redirect: 'taba'
        },
        {
          path: 'taba',
          component: homeTabA
        }
      ]
    }
  ]
})
