<template>
	<div :class="{'m-p02 z-night':true, 'z-enter':nightClass.enter,'z-leave': nightClass.leave }">
		<div class="night night-2 f-animT100"></div>
		<div class="night night-1 f-animT100"></div>
		<div class="star star-1"></div>
		<div class="star star-2"></div>
		<div class="star star-3"></div>
		<div class="star star-4"></div>
		<div class="meteor meteor-1"></div>
		<div class="meteor meteor-2"></div>
		<div class="building f-animB100p building-6"></div>
		<div class="building f-animB100p building-5"></div>
		<div class="building f-animB100p building-4"></div>
		<div class="building f-animB100p building-3"></div>
		<div class="building f-animB100p building-2"></div>
		<div class="building f-animB100p building-1"></div>
		<div class="moonbox f-page f-animT100">
			<div class="moon">
				<div class="swing">
					<div class="man"></div>
				</div>
			</div>
		</div>
		<div class="content">
			<p class="u-para">这一年里</p>
			<p class="u-para u-para-1">
				TA
				一共在云村听了
				<span class="s-xsRed f-xs18">{{ playSongCount }}</span>
				首歌
			</p>
			<p class="u-para u-para-8">
				TA热衷的风格成谜
			</p>
			<p class="u-para u-para-1">
				喜欢在
				<span class="s-xsRed">{{ playSongTimeOfDay }}</span>
				听歌
			</p>
			<div>
				<p class="u-para u-para-8">
					TA习惯
					<span class="s-xsRed">{{ style }}</span>
					地听
				</p>
				<p class="u-para u-para-1">
					评论区的狂欢TA很少参与
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Night", 
	data () {
		return {
			nightClass: {
				enter: false,
				leave: false
			}
		}
	},
  computed: {
    playSongCount() {
      return this.$store.state.data.playSongCount;
    },
    playSongTimeOfDay() {
      return this.$store.state.data.playSongTimeOfDay;
    },
    style() {
      return this.$store.state.data.style == "unknown"? "默默": "高调";
    }
  },
	mounted () {
		var that = this;
    // 修改当前路由
    this.$store.commit( "_update_curRouter", 1 );
    // 进入动画
		setTimeout(function() {
		  that.nightClass.enter = true;
		}, 50);
	}	
}
</script>

<style lang="scss">
@import url(../../static/css/common.scss);
.m-p02 {
    visibility: hidden;
}
.z-enter {
	.f-animT100 {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: opacity .3s, -webkit-transform .8s;
    transition: opacity .3s, -webkit-transform .8s;
    transition: transform .8s, opacity .3s;
    transition: transform .8s, opacity .3s, -webkit-transform .8s;
	}	
	.f-animB100p {
		opacity: 1;
		-webkit-transform: translateY( 0 );
		transform: translateY( 0 );
		-webkit-transition: opacity .5s, -webkit-transform .8s;
		transition: opacity .5s, -webkit-transform .8s;
		transition: transform .8s, opacity .5s;
		transition: transform .8s, opacity .5s, -webkit-transform .8s;
	}

}
.m-p02.z-night {
	.star-1 {
	    top: 8px;
	    left: 140px;
	}
	.star-2 {
	    top: 40px;
	    right: 165px;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    -webkit-animation-delay: .5s;
	    animation-delay: .5s;
	}
	.star-3 {
	    top: 65px;
	    right: 125px;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    -webkit-animation-delay: 1s;
	    animation-delay: 1s;
	}
	.star-4 {
	    top: 160px;
	    right: 60px;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    -webkit-animation-delay: 1.5s;
	    animation-delay: 1.5s;
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
	.meteor {
	    position: absolute;
	    top: -19px;
	    width: 40px;
	    height: 19px;
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
	.building {
	    position: absolute;
	    bottom: 0;
	    background-size: cover;
	}
	.building-3, .building-6 {
		display: none;
	}
	.building-6 {
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: 0;
	    padding-bottom: 40.666667%;
	    &:before {
	    	content: '';
	    	display: block;
	    	position: absolute;
	    	top: 0;
	    	left: 0;
	    	right: 0;
	    	bottom: 0;
	    	background-image:url(../../static/images/p02_night/building_6.png);
	    	background-size:cover;
		}
	}
	.building-5 {
		left: 0;
		width: 241px;
		height: 145px;
		background-image: url(../../static/images/p02_night/building_5.png);
	}
	.building-4 {
	    right: 0;
	    width: 262px;
	    height: 61px;
	    background-image: url(../../static/images/p02_night/building_4.png);
	}
	.building-3 {
	    display: none;
	    right: 125px;
	    width: 53px;
	    height: 102px;
	    background-image: url(../../static/images/p02_night/building_3.png);
	}
	.building-1 {
	    bottom: 20px;
	    right: 0;
	    width: 38px;
	    height: 119px;
	    background-image: url(../../static/images/p02_night/building_1.png);
	}
	.moon {
		position: absolute;
		right: 0;
		top: 65px;
		width: 146px;
		height: 193px;
		background-image: url(../../static/images/p02_night/moon.png);
		background-size: cover;
		-webkit-transform-origin: right top;
		transform-origin: right top;
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
		.swing {
		    position: absolute;
		    top: 147px;
		    left: 60px;
		    width: 34px;
		    height: 302px;
		    background-image: url(../../static/images/p02_night/swing.png);
		    background-size: cover;
		    -webkit-transform-origin: right 0;
		    transform-origin: right 0;
		    -webkit-animation: 3s forwards infinite alternate chair-light;
		    animation: 3s forwards infinite alternate chair-light;
		    .man {
		        position: absolute;
		        top: 268px;
		        left: 0;
		        width: 60px;
		        height: 90px;
		        background-image: url(../../static/images/p02_night/man_repeat.png);
		        -webkit-animation: man-swing 6s steps(1) infinite;
		        animation: man-swing 6s steps(1) infinite;
		        -webkit-transform-origin: 0 0;
		        transform-origin: 0 0;
		        -webkit-transform: scale(0.5);
		        transform: scale(0.5);
		    }
		}
	}
	.content {
		position: absolute;
		top: 20.53%;
		width: 100%;
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
	}
}
.m-p02.z-enter {
    visibility: visible;
    .night-2 {
        padding-bottom: 85.2%;
        &:before {
            background-image: url(../../static/images/p02_night/night_2.png);
        }
    }
    .night {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        &:before {
    		content: '';
    		display: block;
    		position: absolute;
    		top: 0;
    		left: 0;
    		right: 0;
    		bottom: 0;
    		background-size: cover;
		}
    }
    .night-1 {
        padding-bottom: 70.666667%;
        &:before {
            background-image: url(../../static/images/p02_night/night_1.png);
        }
    }
}
.m-p02.z-night.z-enter {
	.night {
    	-webkit-transition: opacity 3s, -webkit-transform 1.5s;
    	transition: opacity 3s, -webkit-transform 1.5s;
    	transition: transform 1.5s, opacity 3s;
    	transition: transform 1.5s, opacity 3s, -webkit-transform 1.5s;
	}
	.night-1 {
	    -webkit-transition-delay: .2s;
	    transition-delay: .2s;
	}
	.moonbox {
	    -webkit-transition: opacity 1.5s, -webkit-transform 1s;
	    transition: opacity 1.5s, -webkit-transform 1s;
	    transition: transform 1s, opacity 1.5s;
	    transition: transform 1s, opacity 1.5s, -webkit-transform 1s;
	}
}
.m-p02.z-night.z-leave {
	.night {
    	-webkit-transition-delay: 0s;
    	transition-delay: 0s;
	}
}
.z-leave {
	.f-animB100p {
    	opacity: 0;
    	-webkit-transform: translateY(100%);
    	transform: translateY(100%);
    	-webkit-transition: opacity .3s, -webkit-transform .3s;
    	transition: opacity .3s, -webkit-transform .3s;
    	transition: transform .3s, opacity .3s;
    	transition: transform .3s, opacity .3s, -webkit-transform .3s;
	}
	.f-animT100 {
	    opacity: 0;
	    -webkit-transform: translateY(-100px);
	    transform: translateY(-100px);
	    -webkit-transition: opacity .3s, -webkit-transform .3s;
	    transition: opacity .3s, -webkit-transform .3s;
	    transition: transform .3s, opacity .3s;
	    transition: transform .3s, opacity .3s, -webkit-transform .3s;
	}
}
.m-p02.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media (min-width: 360px) {
	.m-p02.z-night {
		.building-6  {
    		display: block;
		}
		.moon {
		    -webkit-transform: none;
		    transform: none;
		}
	}
}
/* 流星坠落 */
@-webkit-keyframes meteor {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  40% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(400px, 190px);
            transform: translate(400px, 190px);
  }
}
@keyframes meteor {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  40% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(400px, 190px);
            transform: translate(400px, 190px);
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
@-webkit-keyframes man-swing {
  0% {
    background-position: 0px 0px;
  }
  0.70% {
    background-position: -60px 0px;
  }
  1.40% {
    background-position: -120px 0px;
  }
  2.10% {
    background-position: -180px 0px;
  }
  2.80% {
    background-position: -240px 0px;
  }
  3.50% {
    background-position: -300px 0px;
  }
  4.20% {
    background-position: -360px 0px;
  }
  4.90% {
    background-position: -420px 0px;
  }
  5.59% {
    background-position: -480px 0px;
  }
  6.29% {
    background-position: -540px 0px;
  }
  6.99% {
    background-position: -600px 0px;
  }
  7.69% {
    background-position: -660px 0px;
  }
  8.39% {
    background-position: -720px 0px;
  }
  9.09% {
    background-position: -780px 0px;
  }
  9.79% {
    background-position: -840px 0px;
  }
  10.49% {
    background-position: -900px 0px;
  }
  11.19% {
    background-position: -960px 0px;
  }
  11.89% {
    background-position: -1020px 0px;
  }
  12.59% {
    background-position: -1080px 0px;
  }
  13.29% {
    background-position: -1140px 0px;
  }
  13.99% {
    background-position: -1200px 0px;
  }
  14.69% {
    background-position: -1260px 0px;
  }
  15.38% {
    background-position: -1320px 0px;
  }
  16.08% {
    background-position: -1380px 0px;
  }
  16.78% {
    background-position: -1440px 0px;
  }
  17.48% {
    background-position: -1500px 0px;
  }
  18.18% {
    background-position: -1560px 0px;
  }
  18.88% {
    background-position: -1620px 0px;
  }
  19.58% {
    background-position: -1680px 0px;
  }
  20.28% {
    background-position: -1740px 0px;
  }
  20.98% {
    background-position: -1800px 0px;
  }
  21.68% {
    background-position: -1860px 0px;
  }
  22.38% {
    background-position: -1920px 0px;
  }
  23.08% {
    background-position: 0px -90px;
  }
  23.78% {
    background-position: -60px -90px;
  }
  24.48% {
    background-position: -120px -90px;
  }
  25.17% {
    background-position: -180px -90px;
  }
  25.87% {
    background-position: -240px -90px;
  }
  26.57% {
    background-position: -300px -90px;
  }
  27.27% {
    background-position: -360px -90px;
  }
  27.97% {
    background-position: -420px -90px;
  }
  28.67% {
    background-position: -480px -90px;
  }
  29.37% {
    background-position: -540px -90px;
  }
  30.07% {
    background-position: -600px -90px;
  }
  30.77% {
    background-position: -660px -90px;
  }
  31.47% {
    background-position: -720px -90px;
  }
  32.17% {
    background-position: -780px -90px;
  }
  32.87% {
    background-position: -840px -90px;
  }
  33.57% {
    background-position: -900px -90px;
  }
  34.27% {
    background-position: -960px -90px;
  }
  34.97% {
    background-position: -1020px -90px;
  }
  35.66% {
    background-position: -1080px -90px;
  }
  36.36% {
    background-position: -1140px -90px;
  }
  37.06% {
    background-position: -1200px -90px;
  }
  37.76% {
    background-position: -1260px -90px;
  }
  38.46% {
    background-position: -1320px -90px;
  }
  39.16% {
    background-position: -1380px -90px;
  }
  39.86% {
    background-position: -1440px -90px;
  }
  40.56% {
    background-position: -1500px -90px;
  }
  41.26% {
    background-position: -1560px -90px;
  }
  41.96% {
    background-position: -1620px -90px;
  }
  42.66% {
    background-position: -1680px -90px;
  }
  43.36% {
    background-position: -1740px -90px;
  }
  44.06% {
    background-position: -1800px -90px;
  }
  44.76% {
    background-position: -1860px -90px;
  }
  45.45% {
    background-position: -1920px -90px;
  }
  46.15% {
    background-position: 0px -180px;
  }
  46.85% {
    background-position: -60px -180px;
  }
  47.55% {
    background-position: -120px -180px;
  }
  48.25% {
    background-position: -180px -180px;
  }
  48.95% {
    background-position: -240px -180px;
  }
  49.65% {
    background-position: -300px -180px;
  }
  50.35% {
    background-position: -360px -180px;
  }
  51.05% {
    background-position: -420px -180px;
  }
  51.75% {
    background-position: -480px -180px;
  }
  52.45% {
    background-position: -540px -180px;
  }
  53.15% {
    background-position: -600px -180px;
  }
  53.85% {
    background-position: -660px -180px;
  }
  54.55% {
    background-position: -720px -180px;
  }
  55.24% {
    background-position: -780px -180px;
  }
  55.94% {
    background-position: -840px -180px;
  }
  56.64% {
    background-position: -900px -180px;
  }
  57.34% {
    background-position: -960px -180px;
  }
  58.04% {
    background-position: -1020px -180px;
  }
  58.74% {
    background-position: -1080px -180px;
  }
  59.44% {
    background-position: -1140px -180px;
  }
  60.14% {
    background-position: -1200px -180px;
  }
  60.84% {
    background-position: -1260px -180px;
  }
  61.54% {
    background-position: -1320px -180px;
  }
  62.24% {
    background-position: -1380px -180px;
  }
  62.94% {
    background-position: -1440px -180px;
  }
  63.64% {
    background-position: -1500px -180px;
  }
  64.34% {
    background-position: -1560px -180px;
  }
  65.03% {
    background-position: -1620px -180px;
  }
  65.73% {
    background-position: -1680px -180px;
  }
  66.43% {
    background-position: -1740px -180px;
  }
  67.13% {
    background-position: -1800px -180px;
  }
  67.83% {
    background-position: -1860px -180px;
  }
  68.53% {
    background-position: -1920px -180px;
  }
  69.23% {
    background-position: 0px -270px;
  }
  69.93% {
    background-position: -60px -270px;
  }
  70.63% {
    background-position: -120px -270px;
  }
  71.33% {
    background-position: -180px -270px;
  }
  72.03% {
    background-position: -240px -270px;
  }
  72.73% {
    background-position: -300px -270px;
  }
  73.43% {
    background-position: -360px -270px;
  }
  74.13% {
    background-position: -420px -270px;
  }
  74.83% {
    background-position: -480px -270px;
  }
  75.52% {
    background-position: -540px -270px;
  }
  76.22% {
    background-position: -600px -270px;
  }
  76.92% {
    background-position: -660px -270px;
  }
  77.62% {
    background-position: -720px -270px;
  }
  78.32% {
    background-position: -780px -270px;
  }
  79.02% {
    background-position: -840px -270px;
  }
  79.72% {
    background-position: -900px -270px;
  }
  80.42% {
    background-position: -960px -270px;
  }
  81.12% {
    background-position: -1020px -270px;
  }
  81.82% {
    background-position: -1080px -270px;
  }
  82.52% {
    background-position: -1140px -270px;
  }
  83.22% {
    background-position: -1200px -270px;
  }
  83.92% {
    background-position: -1260px -270px;
  }
  84.62% {
    background-position: -1320px -270px;
  }
  85.31% {
    background-position: -1380px -270px;
  }
  86.01% {
    background-position: -1440px -270px;
  }
  86.71% {
    background-position: -1500px -270px;
  }
  87.41% {
    background-position: -1560px -270px;
  }
  88.11% {
    background-position: -1620px -270px;
  }
  88.81% {
    background-position: -1680px -270px;
  }
  89.51% {
    background-position: -1740px -270px;
  }
  90.21% {
    background-position: -1800px -270px;
  }
  90.91% {
    background-position: -1860px -270px;
  }
  91.61% {
    background-position: -1920px -270px;
  }
  92.31% {
    background-position: 0px -360px;
  }
  93.01% {
    background-position: -60px -360px;
  }
  93.71% {
    background-position: -120px -360px;
  }
  94.41% {
    background-position: -180px -360px;
  }
  95.10% {
    background-position: -240px -360px;
  }
  95.80% {
    background-position: -300px -360px;
  }
  96.50% {
    background-position: -360px -360px;
  }
  97.20% {
    background-position: -420px -360px;
  }
  97.90% {
    background-position: -480px -360px;
  }
  98.60% {
    background-position: -540px -360px;
  }
  99.30% {
    background-position: -600px -360px;
  }
  100.00% {
    background-position: -660px -360px;
  }
}
@keyframes man-swing {
  0% {
    background-position: 0px 0px;
  }
  0.70% {
    background-position: -60px 0px;
  }
  1.40% {
    background-position: -120px 0px;
  }
  2.10% {
    background-position: -180px 0px;
  }
  2.80% {
    background-position: -240px 0px;
  }
  3.50% {
    background-position: -300px 0px;
  }
  4.20% {
    background-position: -360px 0px;
  }
  4.90% {
    background-position: -420px 0px;
  }
  5.59% {
    background-position: -480px 0px;
  }
  6.29% {
    background-position: -540px 0px;
  }
  6.99% {
    background-position: -600px 0px;
  }
  7.69% {
    background-position: -660px 0px;
  }
  8.39% {
    background-position: -720px 0px;
  }
  9.09% {
    background-position: -780px 0px;
  }
  9.79% {
    background-position: -840px 0px;
  }
  10.49% {
    background-position: -900px 0px;
  }
  11.19% {
    background-position: -960px 0px;
  }
  11.89% {
    background-position: -1020px 0px;
  }
  12.59% {
    background-position: -1080px 0px;
  }
  13.29% {
    background-position: -1140px 0px;
  }
  13.99% {
    background-position: -1200px 0px;
  }
  14.69% {
    background-position: -1260px 0px;
  }
  15.38% {
    background-position: -1320px 0px;
  }
  16.08% {
    background-position: -1380px 0px;
  }
  16.78% {
    background-position: -1440px 0px;
  }
  17.48% {
    background-position: -1500px 0px;
  }
  18.18% {
    background-position: -1560px 0px;
  }
  18.88% {
    background-position: -1620px 0px;
  }
  19.58% {
    background-position: -1680px 0px;
  }
  20.28% {
    background-position: -1740px 0px;
  }
  20.98% {
    background-position: -1800px 0px;
  }
  21.68% {
    background-position: -1860px 0px;
  }
  22.38% {
    background-position: -1920px 0px;
  }
  23.08% {
    background-position: 0px -90px;
  }
  23.78% {
    background-position: -60px -90px;
  }
  24.48% {
    background-position: -120px -90px;
  }
  25.17% {
    background-position: -180px -90px;
  }
  25.87% {
    background-position: -240px -90px;
  }
  26.57% {
    background-position: -300px -90px;
  }
  27.27% {
    background-position: -360px -90px;
  }
  27.97% {
    background-position: -420px -90px;
  }
  28.67% {
    background-position: -480px -90px;
  }
  29.37% {
    background-position: -540px -90px;
  }
  30.07% {
    background-position: -600px -90px;
  }
  30.77% {
    background-position: -660px -90px;
  }
  31.47% {
    background-position: -720px -90px;
  }
  32.17% {
    background-position: -780px -90px;
  }
  32.87% {
    background-position: -840px -90px;
  }
  33.57% {
    background-position: -900px -90px;
  }
  34.27% {
    background-position: -960px -90px;
  }
  34.97% {
    background-position: -1020px -90px;
  }
  35.66% {
    background-position: -1080px -90px;
  }
  36.36% {
    background-position: -1140px -90px;
  }
  37.06% {
    background-position: -1200px -90px;
  }
  37.76% {
    background-position: -1260px -90px;
  }
  38.46% {
    background-position: -1320px -90px;
  }
  39.16% {
    background-position: -1380px -90px;
  }
  39.86% {
    background-position: -1440px -90px;
  }
  40.56% {
    background-position: -1500px -90px;
  }
  41.26% {
    background-position: -1560px -90px;
  }
  41.96% {
    background-position: -1620px -90px;
  }
  42.66% {
    background-position: -1680px -90px;
  }
  43.36% {
    background-position: -1740px -90px;
  }
  44.06% {
    background-position: -1800px -90px;
  }
  44.76% {
    background-position: -1860px -90px;
  }
  45.45% {
    background-position: -1920px -90px;
  }
  46.15% {
    background-position: 0px -180px;
  }
  46.85% {
    background-position: -60px -180px;
  }
  47.55% {
    background-position: -120px -180px;
  }
  48.25% {
    background-position: -180px -180px;
  }
  48.95% {
    background-position: -240px -180px;
  }
  49.65% {
    background-position: -300px -180px;
  }
  50.35% {
    background-position: -360px -180px;
  }
  51.05% {
    background-position: -420px -180px;
  }
  51.75% {
    background-position: -480px -180px;
  }
  52.45% {
    background-position: -540px -180px;
  }
  53.15% {
    background-position: -600px -180px;
  }
  53.85% {
    background-position: -660px -180px;
  }
  54.55% {
    background-position: -720px -180px;
  }
  55.24% {
    background-position: -780px -180px;
  }
  55.94% {
    background-position: -840px -180px;
  }
  56.64% {
    background-position: -900px -180px;
  }
  57.34% {
    background-position: -960px -180px;
  }
  58.04% {
    background-position: -1020px -180px;
  }
  58.74% {
    background-position: -1080px -180px;
  }
  59.44% {
    background-position: -1140px -180px;
  }
  60.14% {
    background-position: -1200px -180px;
  }
  60.84% {
    background-position: -1260px -180px;
  }
  61.54% {
    background-position: -1320px -180px;
  }
  62.24% {
    background-position: -1380px -180px;
  }
  62.94% {
    background-position: -1440px -180px;
  }
  63.64% {
    background-position: -1500px -180px;
  }
  64.34% {
    background-position: -1560px -180px;
  }
  65.03% {
    background-position: -1620px -180px;
  }
  65.73% {
    background-position: -1680px -180px;
  }
  66.43% {
    background-position: -1740px -180px;
  }
  67.13% {
    background-position: -1800px -180px;
  }
  67.83% {
    background-position: -1860px -180px;
  }
  68.53% {
    background-position: -1920px -180px;
  }
  69.23% {
    background-position: 0px -270px;
  }
  69.93% {
    background-position: -60px -270px;
  }
  70.63% {
    background-position: -120px -270px;
  }
  71.33% {
    background-position: -180px -270px;
  }
  72.03% {
    background-position: -240px -270px;
  }
  72.73% {
    background-position: -300px -270px;
  }
  73.43% {
    background-position: -360px -270px;
  }
  74.13% {
    background-position: -420px -270px;
  }
  74.83% {
    background-position: -480px -270px;
  }
  75.52% {
    background-position: -540px -270px;
  }
  76.22% {
    background-position: -600px -270px;
  }
  76.92% {
    background-position: -660px -270px;
  }
  77.62% {
    background-position: -720px -270px;
  }
  78.32% {
    background-position: -780px -270px;
  }
  79.02% {
    background-position: -840px -270px;
  }
  79.72% {
    background-position: -900px -270px;
  }
  80.42% {
    background-position: -960px -270px;
  }
  81.12% {
    background-position: -1020px -270px;
  }
  81.82% {
    background-position: -1080px -270px;
  }
  82.52% {
    background-position: -1140px -270px;
  }
  83.22% {
    background-position: -1200px -270px;
  }
  83.92% {
    background-position: -1260px -270px;
  }
  84.62% {
    background-position: -1320px -270px;
  }
  85.31% {
    background-position: -1380px -270px;
  }
  86.01% {
    background-position: -1440px -270px;
  }
  86.71% {
    background-position: -1500px -270px;
  }
  87.41% {
    background-position: -1560px -270px;
  }
  88.11% {
    background-position: -1620px -270px;
  }
  88.81% {
    background-position: -1680px -270px;
  }
  89.51% {
    background-position: -1740px -270px;
  }
  90.21% {
    background-position: -1800px -270px;
  }
  90.91% {
    background-position: -1860px -270px;
  }
  91.61% {
    background-position: -1920px -270px;
  }
  92.31% {
    background-position: 0px -360px;
  }
  93.01% {
    background-position: -60px -360px;
  }
  93.71% {
    background-position: -120px -360px;
  }
  94.41% {
    background-position: -180px -360px;
  }
  95.10% {
    background-position: -240px -360px;
  }
  95.80% {
    background-position: -300px -360px;
  }
  96.50% {
    background-position: -360px -360px;
  }
  97.20% {
    background-position: -420px -360px;
  }
  97.90% {
    background-position: -480px -360px;
  }
  98.60% {
    background-position: -540px -360px;
  }
  99.30% {
    background-position: -600px -360px;
  }
  100.00% {
    background-position: -660px -360px;
  }
}
</style>