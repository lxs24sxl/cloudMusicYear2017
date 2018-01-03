import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/components/cover'
import Night from "@/components/night"

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', name: 'Cover', component: Cover },
    { path: '/night', name: "Night", component: Night }
  ]
})
