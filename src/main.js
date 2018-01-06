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
		data: {
			userId: data.userId,
			nickname: data.nickname,
			avatarUrl: data.avatarUrl,
			hasAvatar: data.hasAvatar,
			lyrics: data.lyrics,
			keywordCount: data.keywordCount,
			keyword: data.keyword,
			playSongCount: data.playSongCount,
			playSongTimeOfDay: data.playSongTimeOfDay,
			commentCount: data.commentCount,
			commentLikeCount: data.commentLikeCount,
			style: data.style,
			replaySongId: data.replaySongId,
			replayCount: data.replayCount,
			replaySongName: data.replaySongName,
			replaySongDate: data.replaySongDate,
			replayArtistName: data.replayArtistName,
			midnightSongId: data.midnightSongId,
			midnightSongName: data.midnightSongName,
			midnightPlayTime: data.midnightPlayTime,
			midnightArtistName: data.midnightArtistName,
			midnightDayCount: data.midnightDayCount,
			minoritySongId: data.minoritySongId,
			minoritySongName: data.minoritySongName,
			minoritySongPlayCount: data.minoritySongPlayCount,
			minorityArtistName: data.minorityArtistName,
			mostDaySongId: data.mostDaySongId,
			mostDaySongName: data.mostDaySongName,
			mostDaySongDayCount: data.mostDaySongDayCount,
			mostDayArtistName: data.mostDayArtistName,
			oldSongId: data.oldSongId,
			oldSongName: data.oldSongName,
			oldSongPubTime: data.oldSongPubTime,
			oldSongArtistName: data.oldSongArtistName,
			forgetSongId: data.forgetSongId,
			forgetSongName: data.forgetSongName,
			forgetArtistName: data.forgetArtistName,
			likeSongCount: data.likeSongCount,
			recommendLikeCount: data.recommendLikeCount,
			createPlaylistCount: data.createPlaylistCount,
			createPlaylistPlayCount: data.createPlaylistPlayCount,
			createPlaylistSubCount:data.createPlaylistSubCount,
			createProgramCount: data.createProgramCount,
			createProgramPlayCount: data.createProgramPlayCount,
			createRadioSubCount:data.createRadioSubCount,
			annualArtistId: data.annualArtistId,
			annualArtistName: data.annualArtistName,
			annualArtistImgUrl: data.annualArtistImgUrl,
			annualArtistPlayCount: data.annualArtistPlayCount,
			annualArtistSongToplist: data.annualArtistSongToplist,
			playSongTime: data.playSongTime,
			songToplist: data.songToplist,
			endVideoUrl: data.endVideoUrl,
			endVideoCoverUrl: data.endVideoCoverUrl
		}
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
