import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import WeedOverview from "./views/Weed/WeedOverview";
import WeedCreate from "./views/Weed/WeedCreate";
import WeedUpdate from "./views/Weed/WeedUpdate";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/weed',
      name: 'weed',
      component: WeedOverview
    },
    {
      path: '/weedCreate',
      name: 'weedCreate',
      component: WeedCreate
    },
    {
      path: '/weedUpdate',
      name: 'weedUpdate',
      component: WeedUpdate
    },
  ]
})
