<template>
	<div :class="{'m-p09 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<div class="water f-area f-area-bottom"></div>

		<div class="ripple f-animOpac">

			<div class="bottlebox f-oh">
				<div class="bottle bottle-1">
					<div class="man"></div>
				</div>
			</div>
			<div class="bottle bottle-2"></div>

		</div>

		<div class="rain z-frame2">
			<div class="drop drop-1"></div>
			<div class="drop drop-2"></div>
			<div class="drop drop-3"></div>
		</div>

		<div class="content">
			<p class="u-para">
				还记得
				<span class="s-xsRed">{{ forgetArtistName }}</span>
				的
				<span class="s-xsRed">《{{ forgetSongName }}》</span>
				吗
			</p>
			<p class="u-para u-para-1">TA曾经很喜欢</p>
			<p class="u-para u-para-1">但最近似乎把这首歌遗忘了。</p>
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
    	this.$store.commit( "_update_curRouter", 9 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	},
	computed: {
		// 局部变量,存储data
		userData () {
		  return this.$store.state.data;
		},
		forgetSongName () {
			return this.userData.forgetSongName;
		},
		forgetArtistName () {
			return this.userData.forgetArtistName;
		}
	}
}
</script>

<style lang="scss" scoped >
.m-p09 {
    visibility: hidden;
    .water {
        padding-bottom: 53.466667%;
        opacity: 0;
        &:before {
    		background-image: url(../../static/images/p09/water.png);
		}
    }
    .ripple {
    	position: absolute;
    	bottom: 20px;
    	right: 15px;
    	width: 319px;
    	height: 78px;
    	background-image: url(../../static/images/p09/ripple.png);
    	background-size: cover;
    	.bottlebox {
    	    position: absolute;
    	    bottom: 47px;
    	    left: 0;
    	    width: 100%;
    	    height: 120px;
    	    -webkit-animation: 4s infinite alternate bottle-horizontal;
    	    animation: 4s infinite alternate bottle-horizontal;
    	}
    	.bottle {
    	    position: absolute;
    	    background-size: cover;
    	    -webkit-animation: 3s ease-in infinite alternate;
    	    animation: 3s ease-in infinite alternate;
    	}
    	.bottle-1 {
    	    top: 52px;
    	    left: 155px;
    	    width: 127px;
    	    height: 72px;
    	    background-image: url(../../static/images/p09/bottle_1.png);
    	    -webkit-animation-name: bottle-vertical;
    	    animation-name: bottle-vertical;
    	}
    	.bottle-2 {
    	    top: 30px;
    	    left: 155px;
    	    width: 127px;
    	    height: 87px;
    	    background-image: url(../../static/images/p09/bottle_2.png);
    	    -webkit-animation-name: bottle-vertical-2;
    	        animation-name: bottle-vertical-2;
    	}
    	.man {
    	    position: absolute;
    	    top: -34px;
    	    left: 53px;
    	    width: 100px;
    	    height: 120px;
    	    background-image: url(../../static/images/p09/man_repeat.png);
    	    -webkit-transform-origin: left top;
    	    transform-origin: left top;
    	    -webkit-transform: scale(0.5);
    	    transform: scale(0.5);
    	    -webkit-animation: man-umbrella 2s steps(1) infinite;
    	    animation: man-umbrella 2s steps(1) infinite;
    	}
    }
    .content {
        position: absolute;
        opacity: 0;
        top: 28.5%;
        width: 100%;
        padding-left: 25px;
        padding-right: 25px;
        box-sizing: border-box;
    }
    .rain {
    	.drop {
    	  	position: absolute;
    		top: 0;
    		background-size: cover;
    		// visibility: hidden;
    		opacity: 0;
    		-webkit-animation: rain-drop ease-in infinite alternate;
    		animation: rain-drop ease-in infinite alternate;
    	}
    	.drop-1 {
    	  	left: 100px;
    	  	width: 219px;
    	  	height: 405px;
    	  	background-image: url(../../static/images/p09/rain_1.png);
			-webkit-animation-duration: 0.4s;
			animation-duration: 0.4s;
    	}
    	.drop-2 {
    	  	right: 40px;
    	  	width: 336px;
    	  	height: 403px;
    	  	background-image: url(../../static/images/p09/rain_2.png);
    	  	-webkit-animation-duration: 0.6s;
    	  	animation-duration: 0.6s;
    	}
    	.drop-3 {
    	 	left: 50%;
    	  	width: 172px;
    	  	height: 407px;
    	  	margin-left: -100px;
    	  	background-image: url(../../static/images/p09/rain_3.png);
    	  	-webkit-animation-duration: 0.8s;
    	  	animation-duration: 0.8s;
    	}
    }
}
.m-p09.z-enter {
    visibility: visible;
    .water {
        opacity: 1;
        -webkit-transition: opacity 1s;
        transition: opacity 1s;
    }
    .ripple {
        -webkit-transition: opacity 2.5s .3s;
        transition: opacity 2.5s .3s;
    }
    .content {
        opacity: 1;
        -webkit-transition: opacity .3s .2s;
        transition: opacity .3s .2s;
    }
}
.m-p09.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
/* 漂流瓶左右动 */
@-webkit-keyframes bottle-horizontal {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
}
@keyframes bottle-horizontal {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
}
/* 漂流瓶上下动 */
@-webkit-keyframes bottle-vertical {
  0% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(4px);
            transform: translateY(4px);
  }
}
@keyframes bottle-vertical {
  0% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(4px);
            transform: translateY(4px);
  }
}
/* 漂流瓶倒影上下动 */
@-webkit-keyframes bottle-vertical-2 {
  0% {
    -webkit-transform: translateY(4px);
            transform: translateY(4px);
  }
  100% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
  }
}
@keyframes bottle-vertical-2 {
  0% {
    -webkit-transform: translateY(4px);
            transform: translateY(4px);
  }
  100% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
  }
}
@keyframes rain-drop {
	0% {
		opacity: 0;
		filter:alpha(opacity=0);
	}
	25% {
		opacity: 1;
		filter:alpha(opacity=100);
	}
	50% {
		opacity: 0;
		filter:alpha(opacity=0);
	}
	75% {
		opacity: 1;
		filter:alpha(opacity=100);
	}
	100% {
		opacity: 0;
		filter:alpha(opacity=0);
	}
}
@-webkit-keyframes rain-drop {
	0% {
		opacity: 0;
		filter:alpha(opacity=0);
	}
	25% {
		opacity: 1;
		filter:alpha(opacity=100);
	}
	50% {
		opacity: 0;
		filter:alpha(opacity=0);
	}
	75% {
		opacity: 1;
		filter:alpha(opacity=100);
	}
	100% {
		opacity: 0;
		filter:alpha(opacity=0);
	}
}
@-webkit-keyframes man-umbrella {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -100px 0px;
  }
  4.26% {
    background-position: -200px 0px;
  }
  6.38% {
    background-position: -300px 0px;
  }
  8.51% {
    background-position: -400px 0px;
  }
  10.64% {
    background-position: -500px 0px;
  }
  12.77% {
    background-position: -600px 0px;
  }
  14.89% {
    background-position: -700px 0px;
  }
  17.02% {
    background-position: -800px 0px;
  }
  19.15% {
    background-position: -900px 0px;
  }
  21.28% {
    background-position: -1000px 0px;
  }
  23.40% {
    background-position: -1100px 0px;
  }
  25.53% {
    background-position: -1200px 0px;
  }
  27.66% {
    background-position: -1300px 0px;
  }
  29.79% {
    background-position: -1400px 0px;
  }
  31.91% {
    background-position: -1500px 0px;
  }
  34.04% {
    background-position: -1600px 0px;
  }
  36.17% {
    background-position: -1700px 0px;
  }
  38.30% {
    background-position: -1800px 0px;
  }
  40.43% {
    background-position: -1900px 0px;
  }
  42.55% {
    background-position: 0px -120px;
  }
  44.68% {
    background-position: -100px -120px;
  }
  46.81% {
    background-position: -200px -120px;
  }
  48.94% {
    background-position: -300px -120px;
  }
  51.06% {
    background-position: -400px -120px;
  }
  53.19% {
    background-position: -500px -120px;
  }
  55.32% {
    background-position: -600px -120px;
  }
  57.45% {
    background-position: -700px -120px;
  }
  59.57% {
    background-position: -800px -120px;
  }
  61.70% {
    background-position: -900px -120px;
  }
  63.83% {
    background-position: -1000px -120px;
  }
  65.96% {
    background-position: -1100px -120px;
  }
  68.09% {
    background-position: -1200px -120px;
  }
  70.21% {
    background-position: -1300px -120px;
  }
  72.34% {
    background-position: -1400px -120px;
  }
  74.47% {
    background-position: -1500px -120px;
  }
  76.60% {
    background-position: -1600px -120px;
  }
  78.72% {
    background-position: -1700px -120px;
  }
  80.85% {
    background-position: -1800px -120px;
  }
  82.98% {
    background-position: -1900px -120px;
  }
  85.11% {
    background-position: 0px -240px;
  }
  87.23% {
    background-position: -100px -240px;
  }
  89.36% {
    background-position: -200px -240px;
  }
  91.49% {
    background-position: -300px -240px;
  }
  93.62% {
    background-position: -400px -240px;
  }
  95.74% {
    background-position: -500px -240px;
  }
  97.87% {
    background-position: -600px -240px;
  }
  100.00% {
    background-position: -700px -240px;
  }
}
@keyframes man-umbrella {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -100px 0px;
  }
  4.26% {
    background-position: -200px 0px;
  }
  6.38% {
    background-position: -300px 0px;
  }
  8.51% {
    background-position: -400px 0px;
  }
  10.64% {
    background-position: -500px 0px;
  }
  12.77% {
    background-position: -600px 0px;
  }
  14.89% {
    background-position: -700px 0px;
  }
  17.02% {
    background-position: -800px 0px;
  }
  19.15% {
    background-position: -900px 0px;
  }
  21.28% {
    background-position: -1000px 0px;
  }
  23.40% {
    background-position: -1100px 0px;
  }
  25.53% {
    background-position: -1200px 0px;
  }
  27.66% {
    background-position: -1300px 0px;
  }
  29.79% {
    background-position: -1400px 0px;
  }
  31.91% {
    background-position: -1500px 0px;
  }
  34.04% {
    background-position: -1600px 0px;
  }
  36.17% {
    background-position: -1700px 0px;
  }
  38.30% {
    background-position: -1800px 0px;
  }
  40.43% {
    background-position: -1900px 0px;
  }
  42.55% {
    background-position: 0px -120px;
  }
  44.68% {
    background-position: -100px -120px;
  }
  46.81% {
    background-position: -200px -120px;
  }
  48.94% {
    background-position: -300px -120px;
  }
  51.06% {
    background-position: -400px -120px;
  }
  53.19% {
    background-position: -500px -120px;
  }
  55.32% {
    background-position: -600px -120px;
  }
  57.45% {
    background-position: -700px -120px;
  }
  59.57% {
    background-position: -800px -120px;
  }
  61.70% {
    background-position: -900px -120px;
  }
  63.83% {
    background-position: -1000px -120px;
  }
  65.96% {
    background-position: -1100px -120px;
  }
  68.09% {
    background-position: -1200px -120px;
  }
  70.21% {
    background-position: -1300px -120px;
  }
  72.34% {
    background-position: -1400px -120px;
  }
  74.47% {
    background-position: -1500px -120px;
  }
  76.60% {
    background-position: -1600px -120px;
  }
  78.72% {
    background-position: -1700px -120px;
  }
  80.85% {
    background-position: -1800px -120px;
  }
  82.98% {
    background-position: -1900px -120px;
  }
  85.11% {
    background-position: 0px -240px;
  }
  87.23% {
    background-position: -100px -240px;
  }
  89.36% {
    background-position: -200px -240px;
  }
  91.49% {
    background-position: -300px -240px;
  }
  93.62% {
    background-position: -400px -240px;
  }
  95.74% {
    background-position: -500px -240px;
  }
  97.87% {
    background-position: -600px -240px;
  }
  100.00% {
    background-position: -700px -240px;
  }
}
</style>