// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import touch from 'vue-directive-touch'
import Vuex from 'vuex'



Vue.use( touch )
Vue.use( Vuex )


import data from '../static/data/data.js'
const store = new Vuex.Store({
	state: {
		curRouter: 0,
		data: data
	},
	mutations: {
		// 更新路由
		_update_curRouter ( state, index ) {
			state.curRouter = index;
		}
	},
	action: {

	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
