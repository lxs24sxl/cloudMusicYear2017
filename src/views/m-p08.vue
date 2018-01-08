<template>
	<div :class="{'m-p08 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<!-- 底部背景 -->
		<div class="back f-area f-area-bottom f-animOpac"></div>
		<!-- 日历本 -->
		<div class="calendarbox f-animB100">
			<div class="calendar">
				<div class="man"></div>
			</div>
		</div>
		<!-- 文本内容 -->
		<div class="content">
			<p class="u-para">
				这首
				<span class="s-xsRed">《The Rose》</span>
			</p>
			<p class="u-para u-para-1">是TA今年听过年代最久远的歌</p>
			<p class="u-para u-para-1">
				发行于
				<span class="f-xs18 s-xsRed">{{ oldSongPubTime.year }}</span>
				年
				<span class="f-xs18 s-xsRed">{{ oldSongPubTime.month }}</span>
				月
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			boxClass: {
				enter: false,
				leave: false
			}
		}
	},
	mounted() {
		var that = this;
    	// 修改当前路由
    	this.$store.commit( "_update_curRouter", 8 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	},
  methods: {
    formatDate: function( time ) {
      // 获得当前时间
      var date = new Date( time ),
        tempDate = {};
      // 年
      tempDate.year = date.getFullYear();
      // 月
      tempDate.month = date.getMonth() + 1;
      // 日
      tempDate.day = date.getDate();
      // 时
      tempDate.hour = date.getHours();
      // 分
      tempDate.minute = date.getMinutes();
      // 秒
      tempDate.second = date.getSeconds();
      // 返回时间
      return tempDate;
    }
  },
  computed: {
    // 局部变量,存储data
    userData () {
      return this.$store.state.data;
    },
    // 最古老的歌名字
    oldSongName () {
      return this.userData.oldSongName;
    },
    oldSongPubTime () {
      return this.formatDate( this.userData.oldSongPubTime );
    }
  }
}
</script>

<style lang="scss" scoped >
.m-p08 {
    visibility: hidden;
    .content {
        position: absolute;
        top: 28%;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        opacity: 0;
    }
    .back {
        padding-bottom: 39.47%;
        &:before {
 		   background-image: url(../../static/images/p08/back.png);
		}
    }
    .calendarbox {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        .calendar {
            position: absolute;
            width: 284px;
            height: 209px;
            bottom: 40px;
            right: -14px;
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
            &:before {
            	content: '';
				display: block;
				width: 100%;
				height: 100%;
				background-image: url(../../static/images/p08/calendar.png);
				background-size: cover;
            }
            .man {
                position: absolute;
                bottom: 159px;
                right: 65px;
                width: 60px;
                height: 100px;
                background-image: url(../../static/images/p08/man_repeat.png);
                -webkit-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
                -webkit-animation: man-calendar 2s steps(1) infinite;
                animation: man-calendar 2s steps(1) infinite;
            }
        }
    }
}
.m-p08.z-enter {
    visibility: visible;
    .content {
    	opacity: 1;
    	-webkit-transition: opacity .3s .2s;
    	transition: opacity .3s .2s;
    }
    .back {
        -webkit-transition-duration: 1.5s;
        transition-duration: 1.5s;
        -webkit-transition-delay: .8s;
        transition-delay: .8s;
    }
    .calendarbox {
    	-webkit-transition: opacity 1s .1s, -webkit-transform 1.5s;
    	transition: opacity 1s .1s, -webkit-transform 1.5s;
    	transition: transform 1.5s, opacity 1s .1s;
    	transition: transform 1.5s, opacity 1s .1s, -webkit-transform 1.5s;
    }
}
.m-p08.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@-webkit-keyframes man-calendar {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -60px 0px;
  }
  4.26% {
    background-position: -120px 0px;
  }
  6.38% {
    background-position: -180px 0px;
  }
  8.51% {
    background-position: -240px 0px;
  }
  10.64% {
    background-position: -300px 0px;
  }
  12.77% {
    background-position: -360px 0px;
  }
  14.89% {
    background-position: -420px 0px;
  }
  17.02% {
    background-position: -480px 0px;
  }
  19.15% {
    background-position: -540px 0px;
  }
  21.28% {
    background-position: -600px 0px;
  }
  23.40% {
    background-position: -660px 0px;
  }
  25.53% {
    background-position: -720px 0px;
  }
  27.66% {
    background-position: -780px 0px;
  }
  29.79% {
    background-position: -840px 0px;
  }
  31.91% {
    background-position: -900px 0px;
  }
  34.04% {
    background-position: -960px 0px;
  }
  36.17% {
    background-position: -1020px 0px;
  }
  38.30% {
    background-position: -1080px 0px;
  }
  40.43% {
    background-position: -1140px 0px;
  }
  42.55% {
    background-position: -1200px 0px;
  }
  44.68% {
    background-position: -1260px 0px;
  }
  46.81% {
    background-position: -1320px 0px;
  }
  48.94% {
    background-position: -1380px 0px;
  }
  51.06% {
    background-position: -1440px 0px;
  }
  53.19% {
    background-position: -1500px 0px;
  }
  55.32% {
    background-position: -1560px 0px;
  }
  57.45% {
    background-position: -1620px 0px;
  }
  59.57% {
    background-position: -1680px 0px;
  }
  61.70% {
    background-position: -1740px 0px;
  }
  63.83% {
    background-position: -1800px 0px;
  }
  65.96% {
    background-position: -1860px 0px;
  }
  68.09% {
    background-position: -1920px 0px;
  }
  70.21% {
    background-position: 0px -100px;
  }
  72.34% {
    background-position: -60px -100px;
  }
  74.47% {
    background-position: -120px -100px;
  }
  76.60% {
    background-position: -180px -100px;
  }
  78.72% {
    background-position: -240px -100px;
  }
  80.85% {
    background-position: -300px -100px;
  }
  82.98% {
    background-position: -360px -100px;
  }
  85.11% {
    background-position: -420px -100px;
  }
  87.23% {
    background-position: -480px -100px;
  }
  89.36% {
    background-position: -540px -100px;
  }
  91.49% {
    background-position: -600px -100px;
  }
  93.62% {
    background-position: -660px -100px;
  }
  95.74% {
    background-position: -720px -100px;
  }
  97.87% {
    background-position: -780px -100px;
  }
  100.00% {
    background-position: -840px -100px;
  }
}
@keyframes man-calendar {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -60px 0px;
  }
  4.26% {
    background-position: -120px 0px;
  }
  6.38% {
    background-position: -180px 0px;
  }
  8.51% {
    background-position: -240px 0px;
  }
  10.64% {
    background-position: -300px 0px;
  }
  12.77% {
    background-position: -360px 0px;
  }
  14.89% {
    background-position: -420px 0px;
  }
  17.02% {
    background-position: -480px 0px;
  }
  19.15% {
    background-position: -540px 0px;
  }
  21.28% {
    background-position: -600px 0px;
  }
  23.40% {
    background-position: -660px 0px;
  }
  25.53% {
    background-position: -720px 0px;
  }
  27.66% {
    background-position: -780px 0px;
  }
  29.79% {
    background-position: -840px 0px;
  }
  31.91% {
    background-position: -900px 0px;
  }
  34.04% {
    background-position: -960px 0px;
  }
  36.17% {
    background-position: -1020px 0px;
  }
  38.30% {
    background-position: -1080px 0px;
  }
  40.43% {
    background-position: -1140px 0px;
  }
  42.55% {
    background-position: -1200px 0px;
  }
  44.68% {
    background-position: -1260px 0px;
  }
  46.81% {
    background-position: -1320px 0px;
  }
  48.94% {
    background-position: -1380px 0px;
  }
  51.06% {
    background-position: -1440px 0px;
  }
  53.19% {
    background-position: -1500px 0px;
  }
  55.32% {
    background-position: -1560px 0px;
  }
  57.45% {
    background-position: -1620px 0px;
  }
  59.57% {
    background-position: -1680px 0px;
  }
  61.70% {
    background-position: -1740px 0px;
  }
  63.83% {
    background-position: -1800px 0px;
  }
  65.96% {
    background-position: -1860px 0px;
  }
  68.09% {
    background-position: -1920px 0px;
  }
  70.21% {
    background-position: 0px -100px;
  }
  72.34% {
    background-position: -60px -100px;
  }
  74.47% {
    background-position: -120px -100px;
  }
  76.60% {
    background-position: -180px -100px;
  }
  78.72% {
    background-position: -240px -100px;
  }
  80.85% {
    background-position: -300px -100px;
  }
  82.98% {
    background-position: -360px -100px;
  }
  85.11% {
    background-position: -420px -100px;
  }
  87.23% {
    background-position: -480px -100px;
  }
  89.36% {
    background-position: -540px -100px;
  }
  91.49% {
    background-position: -600px -100px;
  }
  93.62% {
    background-position: -660px -100px;
  }
  95.74% {
    background-position: -720px -100px;
  }
  97.87% {
    background-position: -780px -100px;
  }
  100.00% {
    background-position: -840px -100px;
  }
}
</style>