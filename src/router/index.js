import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import CreateWed from '@/components/CreateWed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
  },
    {
      path: '/wed/create',
      name: 'CreateWed',
      component: CreateWed
    }
],
mode: 'history'
})
