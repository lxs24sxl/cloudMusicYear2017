<template>
	<div :class="{'m-p07 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<div class="back f-area f-area-bottom f-animOpac"></div>
		<div class="box f-animB100">
			<div class="disc">
				<div class="roll"></div>
				<div class="man"></div>
			</div>
		</div>
		<div class="content">
			<p class="u-para">这一年</p>
			<p class="u-para u-para-1">
				有
				<span class="f-xs18 s-xsRed">{{ minoritySongPlayCount }}</span>
				天TA都听了
				<span class="s-xsRed">《{{ minoritySongName }}》</span>
			</p>
			<p class="u-para u-para-1">在所有熟悉的旋律中</p>
			<p class="u-para u-para-1">TA对这首歌最专一</p>
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
    	this.$store.commit( "_update_curRouter", 7 );
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
    // 常播的音乐名字
    minoritySongName () {
      return this.userData.minoritySongName;
    },
    // 播放次数
    minoritySongPlayCount () {
      return this.userData.minoritySongPlayCount;
    }
  }
}
</script>

<style lang="scss" scoped >
.m-p07 {
    visibility: hidden;
    .back {
        padding-bottom: 27.2%;
        &:before {
   			background-image: url(../../static/images/p07/back.png);
		}	
    }
    .box {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .disc {
        position: absolute;
        bottom: 19px;
        right: 0;
        width: 189px;
        height: 283px;
        background-image: url(../../static/images/p07/disc.png);
        background-size: cover;
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-perspective: 10000px;
        perspective: 10000px;
        .roll {
            position: absolute;
            left: 40px;
            top: 144px;
            width: 115px;
            height: 115px;
            -webkit-transform: translateZ(100px) rotateY(6deg) rotateX(70deg);
            transform: translateZ(100px) rotateY(6deg) rotateX(70deg);
            &:before {
    			content: '';
    			display: block;
    			width: 100%;
    			height: 100%;
    			background-image: url(../../static/images/p07/roll.png);
    			background-size: 100%;
    			-webkit-animation: 4s linear infinite roll;
    			animation: 4s linear infinite roll;
			}
        }
        .man {
            position: absolute;
            bottom: 18px;
            right: 38px;
            width: 50px;
            height: 90px;
            background-image: url(../../static/images/p07/man_repeat.png);
            -webkit-transform-origin: left top;
            transform-origin: left top;
            -webkit-transform: translateZ(200px) scale(0.5);
            transform: translateZ(200px) scale(0.5);
            -webkit-animation: man-disc 1.42s steps(1) infinite;
            animation: man-disc 1.42s steps(1) infinite;
        }
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
.m-p07.z-enter {
    visibility: visible;
    .back {
        -webkit-transition-duration: 1.5s;
        transition-duration: 1.5s;
        -webkit-transition-delay: .8s;
        transition-delay: .8s;
    }
    .box {
        -webkit-transition: opacity 1s .1s, -webkit-transform 1.5s;
        transition: opacity 1s .1s, -webkit-transform 1.5s;
        transition: transform 1.5s, opacity 1s .1s;
        transition: transform 1.5s, opacity 1s .1s, -webkit-transform 1.5s;
    }
    .content {
        opacity: 1;
        -webkit-transition: opacity .3s .2s;
        transition: opacity .3s .2s;
    }
}
.m-p07.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media (min-width: 360px) {
	.m-p07{
		.disc {
			-webkit-transform: none;
			transform: none;
		}
	} 
}
@-webkit-keyframes roll {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-360deg);
            transform: rotateZ(-360deg);
  }
}
@keyframes roll {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-360deg);
            transform: rotateZ(-360deg);
  }
}
@-webkit-keyframes man-disc {
  0% {
    background-position: 0px 0px;
  }
  2.94% {
    background-position: -50px 0px;
  }
  5.88% {
    background-position: -100px 0px;
  }
  8.82% {
    background-position: -150px 0px;
  }
  11.76% {
    background-position: -200px 0px;
  }
  14.71% {
    background-position: -250px 0px;
  }
  17.65% {
    background-position: -300px 0px;
  }
  20.59% {
    background-position: -350px 0px;
  }
  23.53% {
    background-position: -400px 0px;
  }
  26.47% {
    background-position: -450px 0px;
  }
  29.41% {
    background-position: -500px 0px;
  }
  32.35% {
    background-position: -550px 0px;
  }
  35.29% {
    background-position: -600px 0px;
  }
  38.24% {
    background-position: -650px 0px;
  }
  41.18% {
    background-position: -700px 0px;
  }
  44.12% {
    background-position: -750px 0px;
  }
  47.06% {
    background-position: -800px 0px;
  }
  50.00% {
    background-position: -850px 0px;
  }
  52.94% {
    background-position: -900px 0px;
  }
  55.88% {
    background-position: -950px 0px;
  }
  58.82% {
    background-position: -1000px 0px;
  }
  61.76% {
    background-position: -1050px 0px;
  }
  64.71% {
    background-position: -1100px 0px;
  }
  67.65% {
    background-position: -1150px 0px;
  }
  70.59% {
    background-position: -1200px 0px;
  }
  73.53% {
    background-position: -1250px 0px;
  }
  76.47% {
    background-position: -1300px 0px;
  }
  79.41% {
    background-position: -1350px 0px;
  }
  82.35% {
    background-position: -1400px 0px;
  }
  85.29% {
    background-position: -1450px 0px;
  }
  88.24% {
    background-position: -1500px 0px;
  }
  91.18% {
    background-position: -1550px 0px;
  }
  94.12% {
    background-position: -1600px 0px;
  }
  97.06% {
    background-position: -1650px 0px;
  }
  100.00% {
    background-position: -1700px 0px;
  }
}
@keyframes man-disc {
  0% {
    background-position: 0px 0px;
  }
  2.94% {
    background-position: -50px 0px;
  }
  5.88% {
    background-position: -100px 0px;
  }
  8.82% {
    background-position: -150px 0px;
  }
  11.76% {
    background-position: -200px 0px;
  }
  14.71% {
    background-position: -250px 0px;
  }
  17.65% {
    background-position: -300px 0px;
  }
  20.59% {
    background-position: -350px 0px;
  }
  23.53% {
    background-position: -400px 0px;
  }
  26.47% {
    background-position: -450px 0px;
  }
  29.41% {
    background-position: -500px 0px;
  }
  32.35% {
    background-position: -550px 0px;
  }
  35.29% {
    background-position: -600px 0px;
  }
  38.24% {
    background-position: -650px 0px;
  }
  41.18% {
    background-position: -700px 0px;
  }
  44.12% {
    background-position: -750px 0px;
  }
  47.06% {
    background-position: -800px 0px;
  }
  50.00% {
    background-position: -850px 0px;
  }
  52.94% {
    background-position: -900px 0px;
  }
  55.88% {
    background-position: -950px 0px;
  }
  58.82% {
    background-position: -1000px 0px;
  }
  61.76% {
    background-position: -1050px 0px;
  }
  64.71% {
    background-position: -1100px 0px;
  }
  67.65% {
    background-position: -1150px 0px;
  }
  70.59% {
    background-position: -1200px 0px;
  }
  73.53% {
    background-position: -1250px 0px;
  }
  76.47% {
    background-position: -1300px 0px;
  }
  79.41% {
    background-position: -1350px 0px;
  }
  82.35% {
    background-position: -1400px 0px;
  }
  85.29% {
    background-position: -1450px 0px;
  }
  88.24% {
    background-position: -1500px 0px;
  }
  91.18% {
    background-position: -1550px 0px;
  }
  94.12% {
    background-position: -1600px 0px;
  }
  97.06% {
    background-position: -1650px 0px;
  }
  100.00% {
    background-position: -1700px 0px;
  }
}
</style>