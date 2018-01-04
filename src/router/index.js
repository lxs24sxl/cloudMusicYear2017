import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/components/cover'
import Night from "@/components/night"
import mP01 from "@/components/m-p01"
import mP03 from "@/components/m-p03"

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', name: 'Cover', component: Cover },
    { path: '/night', name: "Night", component: Night },
    { path: '/m-p01', name: "mP01", component: mP01},
    { path: '/m-p03', name: "mP03", component: mP03}
  ]
})
