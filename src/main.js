// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import touch from 'vue-directive-touch'
import Vuex from 'vuex'

import data from '../static/data/data.js'

Vue.use( touch )
Vue.use( Vuex )

const store = new Vuex.Store({
	state: {
		data: {
			userId: data.userId,
			nickname: data.data,
			avatarUrl: data.avatarUrl,
			hasAvatar: data.hasAvatar,
			lyrics: [{
				songId: data.lyrics[0].songId,
				songName: data.lyrics[0].songName,
				artistName:data.lyrics[0].artistName,
				lyric: data.lyrics[0].lyric,
				word: data.lyrics[0].word
			}, {
				songId: data.lyrics[1].songId,
				songName: data.lyrics[1].songName,
				artistName: data.lyrics[1].artistName,
				lyric: data.lyrics[1].lyric,
				word: data.lyrics[1].word
			}, {
				songId: data.lyrics[2].songId,
				songName: data.lyrics[2].songName,
				artistName: data.lyrics[2].artistName,
				lyric: data.lyrics[2].lyric,
				word: data.lyrics[2].word
			}, {
				songId: data.lyrics[3].songId,
				songName: data.lyrics[3].songName,
				artistName: data.lyrics[3].artistName,
				lyric: data.lyrics[3].lyric,
				word: data.lyrics[3].word
			}],
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
			annualArtistSongToplist: [{
				songId: data.annualArtistSongToplist[ 0 ].songId,
				songName: data.annualArtistSongToplist[ 0 ].songName,
				artistName: data.annualArtistSongToplist[ 0 ].artistName,
				playCount: data.annualArtistSongToplist[ 0 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 1 ].songId,
				songName: data.annualArtistSongToplist[ 1 ].songName,
				artistName: data.annualArtistSongToplist[ 1 ].artistName,
				playCount: data.annualArtistSongToplist[ 1 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 2 ].songId,
				songName: data.annualArtistSongToplist[ 2 ].songName,
				artistName: data.annualArtistSongToplist[ 2 ].artistName,
				playCount: data.annualArtistSongToplist[ 2 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 3 ].songId,
				songName: data.annualArtistSongToplist[ 3 ].songName,
				artistName: data.annualArtistSongToplist[ 3 ].artistName,
				playCount: data.annualArtistSongToplist[ 3 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 4 ].songId,
				songName: data.annualArtistSongToplist[ 4 ].songName,
				artistName: data.annualArtistSongToplist[ 4 ].artistName,
				playCount: data.annualArtistSongToplist[ 4 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 5 ].songId,
				songName: data.annualArtistSongToplist[ 5 ].songName,
				artistName: data.annualArtistSongToplist[ 5 ].artistName,
				playCount: data.annualArtistSongToplist[ 5 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 6 ].songId,
				songName: data.annualArtistSongToplist[ 6 ].songName,
				artistName: data.annualArtistSongToplist[ 6 ].artistName,
				playCount: data.annualArtistSongToplist[ 6 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 7 ].songId,
				songName: data.annualArtistSongToplist[ 7 ].songName,
				artistName: data.annualArtistSongToplist[ 7 ].artistName,
				playCount: data.annualArtistSongToplist[ 7 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 8 ].songId,
				songName: data.annualArtistSongToplist[ 8 ].songName,
				artistName: data.annualArtistSongToplist[ 8 ].artistName,
				playCount: data.annualArtistSongToplist[ 8 ].playCount
			}, {
				songId: data.annualArtistSongToplist[ 9 ].songId,
				songName: data.annualArtistSongToplist[ 9 ].songName,
				artistName: data.annualArtistSongToplist[ 9 ].artistName,
				playCount: data.annualArtistSongToplist[ 9 ].playCount
			}],
			playSongTime: data.playSongTime,
			songToplist: [{
				songId: data.songToplist[ 0 ].songId,
				songName: data.songToplist[ 0 ].songName,
				artistName: data.songToplist[ 0 ].artistName,
				playCount: data.songToplist[ 0 ].playCount
			}, {
				songId: data.songToplist[ 1 ].songId,
				songName: data.songToplist[ 1 ].songName,
				artistName: data.songToplist[ 1 ].artistName,
				playCount: data.songToplist[ 1 ].playCount
			}, {
				songId: data.songToplist[ 2 ].songId,
				songName: data.songToplist[ 2 ].songName,
				artistName: data.songToplist[ 2 ].artistName,
				playCount: data.songToplist[ 2 ].playCount
			}, {
				songId: data.songToplist[ 3 ].songId,
				songName: data.songToplist[ 3 ].songName,
				artistName: data.songToplist[ 3 ].artistName,
				playCount: data.songToplist[ 3 ].playCount
			}, {
				songId: data.songToplist[ 4 ].songId,
				songName: data.songToplist[ 4 ].songName,
				artistName: data.songToplist[ 4 ].artistName,
				playCount: data.songToplist[ 4 ].playCount
			}, {
				songId: data.songToplist[ 5 ].songId,
				songName: data.songToplist[ 5 ].songName,
				artistName: data.songToplist[ 5 ].artistName,
				playCount: data.songToplist[ 5 ].playCount
			}, {
				songId: data.songToplist[ 6 ].songId,
				songName: data.songToplist[ 6 ].songName,
				artistName: data.songToplist[ 6 ].artistName,
				playCount: data.songToplist[ 6 ].playCount
			}, {
				songId: data.songToplist[ 7 ].songId,
				songName: data.songToplist[ 7 ].songName,
				artistName: data.songToplist[ 7 ].artistName,
				playCount: data.songToplist[ 7 ].playCount
			}, {
				songId: data.songToplist[ 8 ].songId,
				songName: data.songToplist[ 8 ].songName,
				artistName: data.songToplist[ 8 ].artistName,
				playCount: data.songToplist[ 8 ].playCount
			}, {
				songId: data.songToplist[ 9 ].songId,
				songName: data.songToplist[ 9 ].songName,
				artistName: data.songToplist[ 9 ].artistName,
				playCount: data.songToplist[ 9 ].playCount
			}],
			endVideoUrl: data.endVideoUrl,
			endVideoCoverUrl: data.endVideoCoverUrl
		}
	},
	mutations: {

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
