<template>
	<div :class="{'m-p05 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<div class="night f-animT100 night-1"></div>
		<div class="night f-animT100 night-2"></div>
		<div class="star star-1"></div>
		<div class="star star-2"></div>
		<div class="star star-3"></div>
		<div class="star star-4"></div>
		<div class="meteor meteor-1">1</div>
		<div class="meteor meteor-2">2</div>
		<div class="box">
			<div class="chair">
				<div class="light"></div>
			</div>
			<div class="man"></div>
			<div class="cat cat-1"></div>
			<div class="cat cat-2"></div>
		</div>
		<div class="content">
			<p class="u-para">
				这一年，TA有
				<span class="f-xs18 s-xsRed">{{ midnightDayCount }}</span>
				天，
			</p>
			<p class="u-para u-para-1">深夜12点后</p>
			<p class="u-para u-para-1">仍沉浸在音乐世界</p>
			<p class="u-para u-para-4">睡不着的夜晚</p>
			<p class="u-para u-para-1">还有网易云音乐陪伴</p></div>
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
    	this.$store.commit( "_update_curRouter", 5 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	},
  computed: {
    midnightDayCount () {
      return this.$store.state.data.midnightDayCount;
    }
  }
}
</script>

<style lang="scss" scoped >
.m-p05 {
    visibility: hidden;
    .night {
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 0;
    	&:after {
    		content: '';
    		display: block;
    		position: absolute;
    		left: 0;
    		top: 0;
    		right: 0;
    		bottom: 0;
    		background-repeat: no-repeat;
    		background-size: cover;
    	}
    }
    .night-1 {
    	top: -20px;
    	padding-bottom: 91.86%;
    	&:after {
    		background-image: url(../../static/images/p05/night_bot.png);
    	}
    }
    .night-2 {
    	padding-bottom: 78.8%;
    	&:after {
    		background-image: url(../../static/images/p05/night_top.png);
    	}
    }
    .star {
        position: absolute;
        width: 7px;
        height: 7px;
        background-image: url(../../static/images/common/star.png);
        background-size: cover;
        opacity: .2;
        -webkit-animation: 2s ease-in infinite alternate glow;
        animation: 2s ease-in infinite alternate glow;
    }
    .star-1 {
        top: 15px;
        right: 27px;
    }
    .star-2 {
        top: 30px;
        left: 145px;
        -webkit-animation-delay: .5s;
        animation-delay: .5s;
    }
    .star-3 {
        top: 65px;
        right: 160px;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }
    .star-4 {
        top: 90px;
        right: 125px;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-animation-delay: 1.5s;
        animation-delay: 1.5s;
    }
    .meteor {
        position: absolute;
        top: -19px;
        width: 40px;
        height: 19px;
        text-indent: -9999em;
        background-image: url(../../static/images/common/meteor.png);
        background-size: cover;
        -webkit-animation: 2s ease-in infinite meteor;
        animation: 2s ease-in infinite meteor;
    }
    .meteor-1 {
        top: -50px;
        left: -40px;
    }
    .meteor-2 {
        left: 30%;
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }
    .box {
    	position: absolute;
    	bottom: 0;
    	right: 0;
    	widows: 100%;
    	height: 100%;
    	-webkit-transform-origin: right bottom;
    	transform-origin: right bottom;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
   	    opacity: 0;
    }
    .chair {
    	position: absolute;
    	bottom: 0;
    	right: 45px;
    	width: 122px;
    	height: 410px;
    	background-image: url(../../static/images/p05/chair.png);
    	background-size: cover;
    }
    .light {
    	position: absolute;
    	top: 68px;
    	left: -276px;
    	width: 697px;
    	height: 307px;
    	background-image: url(../../static/images/p05/light.png);
    	background-size: cover;
    	-webkit-transform-origin: 335px 22px;
    	transform-origin: 335px 22px;
		-webkit-animation: 3s ease-in infinite alternate chair-light;
		animation: 3s ease-in infinite alternate chair-light;
    }
    .man {
        position: absolute;
        bottom: 46px;
        right: 90px;
        width: 80px;
        height: 130px;
        background-image: url(../../static/images/p05/man_repeat.png);
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-animation: man-chair 2s steps(1) infinite;
        animation: man-chair 2s steps(1) infinite;
    }
    .cat {
        position: absolute;
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }
    .cat-1 {
        bottom: 28px;
        right: 75px;
        width: 80px;
        height: 40px;
        background-image: url(../../static/images/p05/cat_repeat_1.png);
        -webkit-animation: cat-chair-1 0.67s steps(1) infinite;
        animation: cat-chair-1 0.67s steps(1) infinite;
    }
    .cat-2 {
        bottom: 35px;
        right: 43px;
        width: 65px;
        height: 60px;
        background-image: url(../../static/images/p05/cat_repeat_2.png);
        -webkit-animation: cat-chair-2 2s steps(1) infinite;
        animation: cat-chair-2 2s steps(1) infinite;
    }
    .content {
        position: absolute;
        top: 28.5%;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        opacity: 0;
    }
}
.m-p05.z-enter {
    visibility: visible;
   	.night {
        -webkit-transition: opacity 3s, -webkit-transform 1.5s;
        transition: opacity 3s, -webkit-transform 1.5s;
        transition: transform 1.5s, opacity 3s;
        transition: transform 1.5s, opacity 3s, -webkit-transform 1.5s;
    }
    .box {
        opacity: 1;
        -webkit-transition: opacity 1s .2s;
        transition: opacity 1s .2s;
    }
    .content {
        opacity: 1;
        -webkit-transition: opacity .3s .2s;
        transition: opacity .3s .2s;
    }
}
.m-p05.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    .box {
        opacity: 0;
        -webkit-transition: opacity 1s .2s;
        transition: opacity 1s .2s;
    }
}
@media ( min-width: 360px) {
	.m-p05 {
		.box {
			-webkit-transform: none;
			transform: none;
		}
	}
}
/* 灯光晃动 */
@-webkit-keyframes chair-light {
  0% {
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotateZ(5deg);
            transform: rotateZ(5deg);
  }
}
@keyframes chair-light {
  0% {
    -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotateZ(5deg);
            transform: rotateZ(5deg);
  }
}
@-webkit-keyframes man-chair {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -80px 0px;
  }
  4.26% {
    background-position: -160px 0px;
  }
  6.38% {
    background-position: -240px 0px;
  }
  8.51% {
    background-position: -320px 0px;
  }
  10.64% {
    background-position: -400px 0px;
  }
  12.77% {
    background-position: -480px 0px;
  }
  14.89% {
    background-position: -560px 0px;
  }
  17.02% {
    background-position: -640px 0px;
  }
  19.15% {
    background-position: -720px 0px;
  }
  21.28% {
    background-position: -800px 0px;
  }
  23.40% {
    background-position: -880px 0px;
  }
  25.53% {
    background-position: -960px 0px;
  }
  27.66% {
    background-position: -1040px 0px;
  }
  29.79% {
    background-position: -1120px 0px;
  }
  31.91% {
    background-position: -1200px 0px;
  }
  34.04% {
    background-position: -1280px 0px;
  }
  36.17% {
    background-position: -1360px 0px;
  }
  38.30% {
    background-position: -1440px 0px;
  }
  40.43% {
    background-position: -1520px 0px;
  }
  42.55% {
    background-position: -1600px 0px;
  }
  44.68% {
    background-position: -1680px 0px;
  }
  46.81% {
    background-position: -1760px 0px;
  }
  48.94% {
    background-position: -1840px 0px;
  }
  51.06% {
    background-position: -1920px 0px;
  }
  53.19% {
    background-position: 0px -130px;
  }
  55.32% {
    background-position: -80px -130px;
  }
  57.45% {
    background-position: -160px -130px;
  }
  59.57% {
    background-position: -240px -130px;
  }
  61.70% {
    background-position: -320px -130px;
  }
  63.83% {
    background-position: -400px -130px;
  }
  65.96% {
    background-position: -480px -130px;
  }
  68.09% {
    background-position: -560px -130px;
  }
  70.21% {
    background-position: -640px -130px;
  }
  72.34% {
    background-position: -720px -130px;
  }
  74.47% {
    background-position: -800px -130px;
  }
  76.60% {
    background-position: -880px -130px;
  }
  78.72% {
    background-position: -960px -130px;
  }
  80.85% {
    background-position: -1040px -130px;
  }
  82.98% {
    background-position: -1120px -130px;
  }
  85.11% {
    background-position: -1200px -130px;
  }
  87.23% {
    background-position: -1280px -130px;
  }
  89.36% {
    background-position: -1360px -130px;
  }
  91.49% {
    background-position: -1440px -130px;
  }
  93.62% {
    background-position: -1520px -130px;
  }
  95.74% {
    background-position: -1600px -130px;
  }
  97.87% {
    background-position: -1680px -130px;
  }
  100.00% {
    background-position: -1760px -130px;
  }
}
@keyframes man-chair {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -80px 0px;
  }
  4.26% {
    background-position: -160px 0px;
  }
  6.38% {
    background-position: -240px 0px;
  }
  8.51% {
    background-position: -320px 0px;
  }
  10.64% {
    background-position: -400px 0px;
  }
  12.77% {
    background-position: -480px 0px;
  }
  14.89% {
    background-position: -560px 0px;
  }
  17.02% {
    background-position: -640px 0px;
  }
  19.15% {
    background-position: -720px 0px;
  }
  21.28% {
    background-position: -800px 0px;
  }
  23.40% {
    background-position: -880px 0px;
  }
  25.53% {
    background-position: -960px 0px;
  }
  27.66% {
    background-position: -1040px 0px;
  }
  29.79% {
    background-position: -1120px 0px;
  }
  31.91% {
    background-position: -1200px 0px;
  }
  34.04% {
    background-position: -1280px 0px;
  }
  36.17% {
    background-position: -1360px 0px;
  }
  38.30% {
    background-position: -1440px 0px;
  }
  40.43% {
    background-position: -1520px 0px;
  }
  42.55% {
    background-position: -1600px 0px;
  }
  44.68% {
    background-position: -1680px 0px;
  }
  46.81% {
    background-position: -1760px 0px;
  }
  48.94% {
    background-position: -1840px 0px;
  }
  51.06% {
    background-position: -1920px 0px;
  }
  53.19% {
    background-position: 0px -130px;
  }
  55.32% {
    background-position: -80px -130px;
  }
  57.45% {
    background-position: -160px -130px;
  }
  59.57% {
    background-position: -240px -130px;
  }
  61.70% {
    background-position: -320px -130px;
  }
  63.83% {
    background-position: -400px -130px;
  }
  65.96% {
    background-position: -480px -130px;
  }
  68.09% {
    background-position: -560px -130px;
  }
  70.21% {
    background-position: -640px -130px;
  }
  72.34% {
    background-position: -720px -130px;
  }
  74.47% {
    background-position: -800px -130px;
  }
  76.60% {
    background-position: -880px -130px;
  }
  78.72% {
    background-position: -960px -130px;
  }
  80.85% {
    background-position: -1040px -130px;
  }
  82.98% {
    background-position: -1120px -130px;
  }
  85.11% {
    background-position: -1200px -130px;
  }
  87.23% {
    background-position: -1280px -130px;
  }
  89.36% {
    background-position: -1360px -130px;
  }
  91.49% {
    background-position: -1440px -130px;
  }
  93.62% {
    background-position: -1520px -130px;
  }
  95.74% {
    background-position: -1600px -130px;
  }
  97.87% {
    background-position: -1680px -130px;
  }
  100.00% {
    background-position: -1760px -130px;
  }
}
@-webkit-keyframes cat-chair-1 {
  0% {
    background-position: 0px 0px;
  }
  6.25% {
    background-position: -80px 0px;
  }
  12.50% {
    background-position: -160px 0px;
  }
  18.75% {
    background-position: -240px 0px;
  }
  25.00% {
    background-position: -320px 0px;
  }
  31.25% {
    background-position: -400px 0px;
  }
  37.50% {
    background-position: -480px 0px;
  }
  43.75% {
    background-position: -560px 0px;
  }
  50.00% {
    background-position: -640px 0px;
  }
  56.25% {
    background-position: -720px 0px;
  }
  62.50% {
    background-position: -800px 0px;
  }
  68.75% {
    background-position: -880px 0px;
  }
  75.00% {
    background-position: -960px 0px;
  }
  81.25% {
    background-position: -1040px 0px;
  }
  87.50% {
    background-position: -1120px 0px;
  }
  93.75% {
    background-position: -1200px 0px;
  }
  100.00% {
    background-position: -1280px 0px;
  }
}
@keyframes cat-chair-1 {
  0% {
    background-position: 0px 0px;
  }
  6.25% {
    background-position: -80px 0px;
  }
  12.50% {
    background-position: -160px 0px;
  }
  18.75% {
    background-position: -240px 0px;
  }
  25.00% {
    background-position: -320px 0px;
  }
  31.25% {
    background-position: -400px 0px;
  }
  37.50% {
    background-position: -480px 0px;
  }
  43.75% {
    background-position: -560px 0px;
  }
  50.00% {
    background-position: -640px 0px;
  }
  56.25% {
    background-position: -720px 0px;
  }
  62.50% {
    background-position: -800px 0px;
  }
  68.75% {
    background-position: -880px 0px;
  }
  75.00% {
    background-position: -960px 0px;
  }
  81.25% {
    background-position: -1040px 0px;
  }
  87.50% {
    background-position: -1120px 0px;
  }
  93.75% {
    background-position: -1200px 0px;
  }
  100.00% {
    background-position: -1280px 0px;
  }
}
@-webkit-keyframes cat-chair-2 {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -65px 0px;
  }
  4.26% {
    background-position: -130px 0px;
  }
  6.38% {
    background-position: -195px 0px;
  }
  8.51% {
    background-position: -260px 0px;
  }
  10.64% {
    background-position: -325px 0px;
  }
  12.77% {
    background-position: -390px 0px;
  }
  14.89% {
    background-position: -455px 0px;
  }
  17.02% {
    background-position: -520px 0px;
  }
  19.15% {
    background-position: -585px 0px;
  }
  21.28% {
    background-position: -650px 0px;
  }
  23.40% {
    background-position: -715px 0px;
  }
  25.53% {
    background-position: -780px 0px;
  }
  27.66% {
    background-position: -845px 0px;
  }
  29.79% {
    background-position: -910px 0px;
  }
  31.91% {
    background-position: -975px 0px;
  }
  34.04% {
    background-position: -1040px 0px;
  }
  36.17% {
    background-position: -1105px 0px;
  }
  38.30% {
    background-position: -1170px 0px;
  }
  40.43% {
    background-position: -1235px 0px;
  }
  42.55% {
    background-position: -1300px 0px;
  }
  44.68% {
    background-position: -1365px 0px;
  }
  46.81% {
    background-position: -1430px 0px;
  }
  48.94% {
    background-position: -1495px 0px;
  }
  51.06% {
    background-position: -1560px 0px;
  }
  53.19% {
    background-position: -1625px 0px;
  }
  55.32% {
    background-position: -1690px 0px;
  }
  57.45% {
    background-position: -1755px 0px;
  }
  59.57% {
    background-position: -1820px 0px;
  }
  61.70% {
    background-position: -1885px 0px;
  }
  63.83% {
    background-position: 0px -60px;
  }
  65.96% {
    background-position: -65px -60px;
  }
  68.09% {
    background-position: -130px -60px;
  }
  70.21% {
    background-position: -195px -60px;
  }
  72.34% {
    background-position: -260px -60px;
  }
  74.47% {
    background-position: -325px -60px;
  }
  76.60% {
    background-position: -390px -60px;
  }
  78.72% {
    background-position: -455px -60px;
  }
  80.85% {
    background-position: -520px -60px;
  }
  82.98% {
    background-position: -585px -60px;
  }
  85.11% {
    background-position: -650px -60px;
  }
  87.23% {
    background-position: -715px -60px;
  }
  89.36% {
    background-position: -780px -60px;
  }
  91.49% {
    background-position: -845px -60px;
  }
  93.62% {
    background-position: -910px -60px;
  }
  95.74% {
    background-position: -975px -60px;
  }
  97.87% {
    background-position: -1040px -60px;
  }
  100.00% {
    background-position: -1105px -60px;
  }
}
@keyframes cat-chair-2 {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -65px 0px;
  }
  4.26% {
    background-position: -130px 0px;
  }
  6.38% {
    background-position: -195px 0px;
  }
  8.51% {
    background-position: -260px 0px;
  }
  10.64% {
    background-position: -325px 0px;
  }
  12.77% {
    background-position: -390px 0px;
  }
  14.89% {
    background-position: -455px 0px;
  }
  17.02% {
    background-position: -520px 0px;
  }
  19.15% {
    background-position: -585px 0px;
  }
  21.28% {
    background-position: -650px 0px;
  }
  23.40% {
    background-position: -715px 0px;
  }
  25.53% {
    background-position: -780px 0px;
  }
  27.66% {
    background-position: -845px 0px;
  }
  29.79% {
    background-position: -910px 0px;
  }
  31.91% {
    background-position: -975px 0px;
  }
  34.04% {
    background-position: -1040px 0px;
  }
  36.17% {
    background-position: -1105px 0px;
  }
  38.30% {
    background-position: -1170px 0px;
  }
  40.43% {
    background-position: -1235px 0px;
  }
  42.55% {
    background-position: -1300px 0px;
  }
  44.68% {
    background-position: -1365px 0px;
  }
  46.81% {
    background-position: -1430px 0px;
  }
  48.94% {
    background-position: -1495px 0px;
  }
  51.06% {
    background-position: -1560px 0px;
  }
  53.19% {
    background-position: -1625px 0px;
  }
  55.32% {
    background-position: -1690px 0px;
  }
  57.45% {
    background-position: -1755px 0px;
  }
  59.57% {
    background-position: -1820px 0px;
  }
  61.70% {
    background-position: -1885px 0px;
  }
  63.83% {
    background-position: 0px -60px;
  }
  65.96% {
    background-position: -65px -60px;
  }
  68.09% {
    background-position: -130px -60px;
  }
  70.21% {
    background-position: -195px -60px;
  }
  72.34% {
    background-position: -260px -60px;
  }
  74.47% {
    background-position: -325px -60px;
  }
  76.60% {
    background-position: -390px -60px;
  }
  78.72% {
    background-position: -455px -60px;
  }
  80.85% {
    background-position: -520px -60px;
  }
  82.98% {
    background-position: -585px -60px;
  }
  85.11% {
    background-position: -650px -60px;
  }
  87.23% {
    background-position: -715px -60px;
  }
  89.36% {
    background-position: -780px -60px;
  }
  91.49% {
    background-position: -845px -60px;
  }
  93.62% {
    background-position: -910px -60px;
  }
  95.74% {
    background-position: -975px -60px;
  }
  97.87% {
    background-position: -1040px -60px;
  }
  100.00% {
    background-position: -1105px -60px;
  }
}
</style>