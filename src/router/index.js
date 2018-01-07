import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/views/cover'
import Night from "@/views/night"
import mP01 from "@/views/m-p01"
import mP03 from "@/views/m-p03"
import mP04 from "@/views/m-p04"
import mP05 from "@/views/m-p05"
import mP06 from "@/views/m-p06"
import mP07 from "@/views/m-p07"
import mP08 from "@/views/m-p08"
import mP09 from "@/views/m-p09"
import mP10 from "@/views/m-p10"
import mP12 from "@/views/m-p12"
import mP13 from "@/views/m-p13"
import mP14 from "@/views/m-p14"
import video from "@/views/video"

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', name: 'Cover', component: Cover },
    { path: '/night', name: "Night", component: Night },
    { path: '/m-p01', name: "mP01", component: mP01 },
    { path: '/m-p03', name: "mP03", component: mP03 },
    { path: '/m-p04', name: "mP04", component: mP04 },
    { path: '/m-p05', name: "mP05", component: mP05 },
    { path: '/m-p06', name: "mP06", component: mP06 },
    { path: '/m-p07', name: "mP07", component: mP07 },
    { path: '/m-p08', name: "mP08", component: mP08 },
    { path: '/m-p09', name: "mP09", component: mP09 },
    { path: '/m-p10', name: "mP10", component: mP10 },
    { path: '/m-p12', name: "mP12", component: mP12 },
    { path: '/m-p13', name: "mP13", component: mP13 },
    { path: '/m-p14', name: "mP14", component: mP14 },
    { path: '/video', name: "video", component: video }
  ]
})
