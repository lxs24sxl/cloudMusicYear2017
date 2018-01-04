<template>
	<div :class="{'m-p03 f-page':true, 'z-enter': boxClass.enter,'z-leave': boxClass.leave}">
		<div class="wave1 wave1-2">
			<img class="pic" src="//s3.music.126.net/nact/s/client/images/year2017/p03/wave_2.png?bde3f4069f7bc4289ff0c6c5741b39cf">
			<div class="ripple"></div>
		</div>
		<div class="wave1 wave1-1">
			<img src="//s3.music.126.net/nact/s/client/images/year2017/p03/wave_1.png?47c9ba8df010097db8c0da36a6c7bc67" class="pic">
		</div>
		<div class="circle f-animR100"></div>
		<div class="wave2 wave2-2"></div>
		<div class="wave2 wave2-1"></div>
		<div class="manbox f-animOpac">
			<div class="splash"></div>
			<div class="man"></div>
		</div>
		<div class="content">
			<p class="u-para">
				<span class="s-xsRed">4</span>
				月<span class="s-xsRed">9</span>
				日大概是很特别的一天
			</p>
			<p class="u-para u-para-2">这一天里</p>
			<p class="u-para u-para-2">
				TA把
				<span class="s-xsRed">薛之谦</span>
				的
				<span class="s-xsRed">
				《动物世界》</span>
			</p>
			<p class="u-para u-para-2">
				反复听了
				<span class="s-xsRed f-fs18">18</span>
				次
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
	computed: {
		data () {
			return this.$store.state.data.userId;
		}
	},
	mounted() {
		var that = this;
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	}
}
</script>

<style lang="scss" scoped>
@import url(../../static/css/common.scss);
.m-p03 {
    visibility: hidden;
    opacity: 0;
	.wave1 {
    	position: absolute;
    	right: -3%;
    	height: 100%;
    	-webkit-transform: translateX(100%);
    	transform: translateX(100%);
	}
	.wave2 {
	    position: absolute;
	    bottom: -15px;
	    left: -15px;
	    background-size: cover;
	    -webkit-transform: translate(-100%, 100%);
	    transform: translate(-100%, 100%);
	}
	.wave1-2 {
		.ripple {
		    position: absolute;
	    	top: 18px;
	    	left: 5px;
	    	width: 20px;
	    	height: 165px;
	    	background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p03/ripple.png?e850181…);
	    	background-size: cover;
	    }
	}
	.wave2-2 {
	    width: 375px;
	    height: 199px;
	    background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p03/wave_4.png?c475e9e…);
	}
	.wave2-1 {
	    width: 375px;
	    height: 241px;
	    background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p03/wave_3.png?916ee8e…);
	}
	.circle {
	    position: absolute;
	    bottom: 64px;
	    right: 85px;
	    width: 26px;
	    height: 26px;
	    &:before {
	    	content: '';
	    	display: block;
	    	width: 100%;
	    	height: 100%;
	    	background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p03/circle.png?96409ee…);
	    	background-size: cover;
	    }
	}
	.manbox {
	    position: absolute;
	    bottom: 0;
	    right: 0;
	}
}
.m-p03.z-enter {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    .wave1 {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition: -webkit-transform 1s;
        transition: -webkit-transform 1s;
        transition: transform 1s;
        transition: transform 1s, -webkit-transform 1s;
        -webkit-transition-delay: .2s;
        transition-delay: .2s;
        -webkit-animation: 1.8s 1.2s infinite alternate waves1;
        animation: 1.8s 1.2s infinite alternate waves1;
        .pic {
            height: 100%;
            width: auto;
        }
    }
    .wave2 {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
        -webkit-transition: -webkit-transform 1s;
        transition: -webkit-transform 1s;
        transition: transform 1s;
        transition: transform 1s, -webkit-transform 1s;
        -webkit-animation: 1.8s 1s infinite alternate waves2;
        animation: 1.8s 1s infinite alternate waves2;
    }
    .wave2-1 {
        -webkit-transition-delay: .1s;
        transition-delay: .1s;
        -webkit-animation: 1.8s 1.2s infinite alternate waves2;
        animation: 1.8s 1.2s infinite alternate waves2;
    }
    .circle {
        -webkit-transition: opacity 1s .2s, -webkit-transform 1.4s;
        transition: opacity 1s .2s, -webkit-transform 1.4s;
        transition: transform 1.4s, opacity 1s .2s;
        transition: transform 1.4s, opacity 1s .2s, -webkit-transform 1.4s;
        &:before {
    		 -webkit-animation: 1.8s 1.4s infinite alternate wave-circle;
    		animation: 1.8s 1.4s infinite alternate wave-circle;
		}
    }
    .manbox {
        -webkit-transition-delay: .5s;
        transition-delay: .5s;
        -webkit-transition-duration: 1s;
        transition-duration: 1s;
    }
    .splash {
        position: absolute;
        bottom: -40px;
        right: -2px;
        width: 113px;
        height: 381px;
        background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p03/splash_repeat.png?18bd56c…);
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-animation: splashAnimation 2.43s steps(1) infinite;
        animation: splashAnimation 2.43s steps(1) infinite;
    }
    .man {
        position: absolute;
        bottom: 100px;
        right: 5px;
        width: 85px;
        height: 111px;
        background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p03/man_repeat.png?761d02e…);
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-animation: swimAnimation 2.43s steps(1) infinite;
        animation: swimAnimation 2.43s steps(1) infinite;
    }
    .content {
    	position: absolute;
    	top: 20.5%;
    	width: 100%;
    	padding-left: 20px;
    	padding-right: 105px;
   		box-sizing: border-box;
	}
}
.z-enter{
	.f-animR100 {
	    opacity: 1;
	    -webkit-transform: translateX(0);
	    transform: translateX(0);
	    -webkit-transition: opacity .5s, -webkit-transform .8s;
	    transition: opacity .5s, -webkit-transform .8s;
	    transition: transform .8s, opacity .5s;
	    transition: transform .8s, opacity .5s, -webkit-transform .8s;
	}	
	.f-animOpac {
	    opacity: 1;
	    -webkit-transition: opacity .5s;
	    transition: opacity .5s;
	}
}
.z-leave {
	.f-animOpac {
 	   opacity: 0;
 	   -webkit-transition: opacity .3s;
   		transition: opacity .3s;
   	}
   	.f-animR100 {
   	    opacity: 0;
   	    -webkit-transform: translateX(100px);
   	    transform: translateX(100px);
   	    -webkit-transition: opacity .3s, -webkit-transform .3s;
   	    transition: opacity .3s, -webkit-transform .3s;
   	    transition: transform .3s, opacity .3s;
   	    transition: transform .3s, opacity .3s, -webkit-transform .3s;
   	}
}
.m-p03.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    .manbox {
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }
}
@media (min-width: 360px) {
	.m-p03 {
		.content {
    		top: 26.5%;
		}   
	}
}
@-webkit-keyframes waves1 {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  30% {
    opacity: .8;
  }
  100% {
    opacity: .8;
    -webkit-transform: translateX(20%);
            transform: translateX(20%);
  }
}
@keyframes waves1 {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  30% {
    opacity: .8;
  }
  100% {
    opacity: .8;
    -webkit-transform: translateX(20%);
            transform: translateX(20%);
  }
}
@-webkit-keyframes waves2 {
  0% {
    opacity: 1;
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  30% {
    opacity: .8;
  }
  100% {
    opacity: .8;
    -webkit-transform: translate(-15px, 15px);
            transform: translate(-15px, 15px);
  }
}
@keyframes waves2 {
  0% {
    opacity: 1;
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  30% {
    opacity: .8;
  }
  100% {
    opacity: .8;
    -webkit-transform: translate(-15px, 15px);
            transform: translate(-15px, 15px);
  }
}
@-webkit-keyframes wave-circle {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(30px);
            transform: translateX(30px);
  }
}
@keyframes wave-circle {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(30px);
            transform: translateX(30px);
  }
}
@-webkit-keyframes swimAnimation {
  0% {
    background-position: 0px 0px;
  }
  1.39% {
    background-position: -85px 0px;
  }
  2.78% {
    background-position: -170px 0px;
  }
  4.17% {
    background-position: -255px 0px;
  }
  5.56% {
    background-position: -340px 0px;
  }
  6.94% {
    background-position: -425px 0px;
  }
  8.33% {
    background-position: -510px 0px;
  }
  9.72% {
    background-position: -595px 0px;
  }
  11.11% {
    background-position: -680px 0px;
  }
  12.50% {
    background-position: -765px 0px;
  }
  13.89% {
    background-position: -850px 0px;
  }
  15.28% {
    background-position: -935px 0px;
  }
  16.67% {
    background-position: -1020px 0px;
  }
  18.06% {
    background-position: -1105px 0px;
  }
  19.44% {
    background-position: -1190px 0px;
  }
  20.83% {
    background-position: -1275px 0px;
  }
  22.22% {
    background-position: -1360px 0px;
  }
  23.61% {
    background-position: -1445px 0px;
  }
  25.00% {
    background-position: -1530px 0px;
  }
  26.39% {
    background-position: -1615px 0px;
  }
  27.78% {
    background-position: -1700px 0px;
  }
  29.17% {
    background-position: -1785px 0px;
  }
  30.56% {
    background-position: -1870px 0px;
  }
  31.94% {
    background-position: 0px -111px;
  }
  33.33% {
    background-position: -85px -111px;
  }
  34.72% {
    background-position: -170px -111px;
  }
  36.11% {
    background-position: -255px -111px;
  }
  37.50% {
    background-position: -340px -111px;
  }
  38.89% {
    background-position: -425px -111px;
  }
  40.28% {
    background-position: -510px -111px;
  }
  41.67% {
    background-position: -595px -111px;
  }
  43.06% {
    background-position: -680px -111px;
  }
  44.44% {
    background-position: -765px -111px;
  }
  45.83% {
    background-position: -850px -111px;
  }
  47.22% {
    background-position: -935px -111px;
  }
  48.61% {
    background-position: -1020px -111px;
  }
  50.00% {
    background-position: -1105px -111px;
  }
  51.39% {
    background-position: -1190px -111px;
  }
  52.78% {
    background-position: -1275px -111px;
  }
  54.17% {
    background-position: -1360px -111px;
  }
  55.56% {
    background-position: -1445px -111px;
  }
  56.94% {
    background-position: -1530px -111px;
  }
  58.33% {
    background-position: -1615px -111px;
  }
  59.72% {
    background-position: -1700px -111px;
  }
  61.11% {
    background-position: -1785px -111px;
  }
  62.50% {
    background-position: -1870px -111px;
  }
  63.89% {
    background-position: 0px -222px;
  }
  65.28% {
    background-position: -85px -222px;
  }
  66.67% {
    background-position: -170px -222px;
  }
  68.06% {
    background-position: -255px -222px;
  }
  69.44% {
    background-position: -340px -222px;
  }
  70.83% {
    background-position: -425px -222px;
  }
  72.22% {
    background-position: -510px -222px;
  }
  73.61% {
    background-position: -595px -222px;
  }
  75.00% {
    background-position: -680px -222px;
  }
  76.39% {
    background-position: -765px -222px;
  }
  77.78% {
    background-position: -850px -222px;
  }
  79.17% {
    background-position: -935px -222px;
  }
  80.56% {
    background-position: -1020px -222px;
  }
  81.94% {
    background-position: -1105px -222px;
  }
  83.33% {
    background-position: -1190px -222px;
  }
  84.72% {
    background-position: -1275px -222px;
  }
  86.11% {
    background-position: -1360px -222px;
  }
  87.50% {
    background-position: -1445px -222px;
  }
  88.89% {
    background-position: -1530px -222px;
  }
  90.28% {
    background-position: -1615px -222px;
  }
  91.67% {
    background-position: -1700px -222px;
  }
  93.06% {
    background-position: -1785px -222px;
  }
  94.44% {
    background-position: -1870px -222px;
  }
  95.83% {
    background-position: 0px -333px;
  }
  97.22% {
    background-position: -85px -333px;
  }
  98.61% {
    background-position: -170px -333px;
  }
  100.00% {
    background-position: -255px -333px;
  }
}
@keyframes swimAnimation {
  0% {
    background-position: 0px 0px;
  }
  1.39% {
    background-position: -85px 0px;
  }
  2.78% {
    background-position: -170px 0px;
  }
  4.17% {
    background-position: -255px 0px;
  }
  5.56% {
    background-position: -340px 0px;
  }
  6.94% {
    background-position: -425px 0px;
  }
  8.33% {
    background-position: -510px 0px;
  }
  9.72% {
    background-position: -595px 0px;
  }
  11.11% {
    background-position: -680px 0px;
  }
  12.50% {
    background-position: -765px 0px;
  }
  13.89% {
    background-position: -850px 0px;
  }
  15.28% {
    background-position: -935px 0px;
  }
  16.67% {
    background-position: -1020px 0px;
  }
  18.06% {
    background-position: -1105px 0px;
  }
  19.44% {
    background-position: -1190px 0px;
  }
  20.83% {
    background-position: -1275px 0px;
  }
  22.22% {
    background-position: -1360px 0px;
  }
  23.61% {
    background-position: -1445px 0px;
  }
  25.00% {
    background-position: -1530px 0px;
  }
  26.39% {
    background-position: -1615px 0px;
  }
  27.78% {
    background-position: -1700px 0px;
  }
  29.17% {
    background-position: -1785px 0px;
  }
  30.56% {
    background-position: -1870px 0px;
  }
  31.94% {
    background-position: 0px -111px;
  }
  33.33% {
    background-position: -85px -111px;
  }
  34.72% {
    background-position: -170px -111px;
  }
  36.11% {
    background-position: -255px -111px;
  }
  37.50% {
    background-position: -340px -111px;
  }
  38.89% {
    background-position: -425px -111px;
  }
  40.28% {
    background-position: -510px -111px;
  }
  41.67% {
    background-position: -595px -111px;
  }
  43.06% {
    background-position: -680px -111px;
  }
  44.44% {
    background-position: -765px -111px;
  }
  45.83% {
    background-position: -850px -111px;
  }
  47.22% {
    background-position: -935px -111px;
  }
  48.61% {
    background-position: -1020px -111px;
  }
  50.00% {
    background-position: -1105px -111px;
  }
  51.39% {
    background-position: -1190px -111px;
  }
  52.78% {
    background-position: -1275px -111px;
  }
  54.17% {
    background-position: -1360px -111px;
  }
  55.56% {
    background-position: -1445px -111px;
  }
  56.94% {
    background-position: -1530px -111px;
  }
  58.33% {
    background-position: -1615px -111px;
  }
  59.72% {
    background-position: -1700px -111px;
  }
  61.11% {
    background-position: -1785px -111px;
  }
  62.50% {
    background-position: -1870px -111px;
  }
  63.89% {
    background-position: 0px -222px;
  }
  65.28% {
    background-position: -85px -222px;
  }
  66.67% {
    background-position: -170px -222px;
  }
  68.06% {
    background-position: -255px -222px;
  }
  69.44% {
    background-position: -340px -222px;
  }
  70.83% {
    background-position: -425px -222px;
  }
  72.22% {
    background-position: -510px -222px;
  }
  73.61% {
    background-position: -595px -222px;
  }
  75.00% {
    background-position: -680px -222px;
  }
  76.39% {
    background-position: -765px -222px;
  }
  77.78% {
    background-position: -850px -222px;
  }
  79.17% {
    background-position: -935px -222px;
  }
  80.56% {
    background-position: -1020px -222px;
  }
  81.94% {
    background-position: -1105px -222px;
  }
  83.33% {
    background-position: -1190px -222px;
  }
  84.72% {
    background-position: -1275px -222px;
  }
  86.11% {
    background-position: -1360px -222px;
  }
  87.50% {
    background-position: -1445px -222px;
  }
  88.89% {
    background-position: -1530px -222px;
  }
  90.28% {
    background-position: -1615px -222px;
  }
  91.67% {
    background-position: -1700px -222px;
  }
  93.06% {
    background-position: -1785px -222px;
  }
  94.44% {
    background-position: -1870px -222px;
  }
  95.83% {
    background-position: 0px -333px;
  }
  97.22% {
    background-position: -85px -333px;
  }
  98.61% {
    background-position: -170px -333px;
  }
  100.00% {
    background-position: -255px -333px;
  }
}
@-webkit-keyframes splashAnimation {
  0% {
    background-position: 0px 0px;
  }
  1.39% {
    background-position: -113px 0px;
  }
  2.78% {
    background-position: -226px 0px;
  }
  4.17% {
    background-position: -339px 0px;
  }
  5.56% {
    background-position: -452px 0px;
  }
  6.94% {
    background-position: -565px 0px;
  }
  8.33% {
    background-position: -678px 0px;
  }
  9.72% {
    background-position: -791px 0px;
  }
  11.11% {
    background-position: -904px 0px;
  }
  12.50% {
    background-position: -1017px 0px;
  }
  13.89% {
    background-position: -1130px 0px;
  }
  15.28% {
    background-position: -1243px 0px;
  }
  16.67% {
    background-position: -1356px 0px;
  }
  18.06% {
    background-position: -1469px 0px;
  }
  19.44% {
    background-position: -1582px 0px;
  }
  20.83% {
    background-position: -1695px 0px;
  }
  22.22% {
    background-position: -1808px 0px;
  }
  23.61% {
    background-position: 0px -381px;
  }
  25.00% {
    background-position: -113px -381px;
  }
  26.39% {
    background-position: -226px -381px;
  }
  27.78% {
    background-position: -339px -381px;
  }
  29.17% {
    background-position: -452px -381px;
  }
  30.56% {
    background-position: -565px -381px;
  }
  31.94% {
    background-position: -678px -381px;
  }
  33.33% {
    background-position: -791px -381px;
  }
  34.72% {
    background-position: -904px -381px;
  }
  36.11% {
    background-position: -1017px -381px;
  }
  37.50% {
    background-position: -1130px -381px;
  }
  38.89% {
    background-position: -1243px -381px;
  }
  40.28% {
    background-position: -1356px -381px;
  }
  41.67% {
    background-position: -1469px -381px;
  }
  43.06% {
    background-position: -1582px -381px;
  }
  44.44% {
    background-position: -1695px -381px;
  }
  45.83% {
    background-position: -1808px -381px;
  }
  47.22% {
    background-position: 0px -762px;
  }
  48.61% {
    background-position: -113px -762px;
  }
  50.00% {
    background-position: -226px -762px;
  }
  51.39% {
    background-position: -339px -762px;
  }
  52.78% {
    background-position: -452px -762px;
  }
  54.17% {
    background-position: -565px -762px;
  }
  55.56% {
    background-position: -678px -762px;
  }
  56.94% {
    background-position: -791px -762px;
  }
  58.33% {
    background-position: -904px -762px;
  }
  59.72% {
    background-position: -1017px -762px;
  }
  61.11% {
    background-position: -1130px -762px;
  }
  62.50% {
    background-position: -1243px -762px;
  }
  63.89% {
    background-position: -1356px -762px;
  }
  65.28% {
    background-position: -1469px -762px;
  }
  66.67% {
    background-position: -1582px -762px;
  }
  68.06% {
    background-position: -1695px -762px;
  }
  69.44% {
    background-position: -1808px -762px;
  }
  70.83% {
    background-position: 0px -1143px;
  }
  72.22% {
    background-position: -113px -1143px;
  }
  73.61% {
    background-position: -226px -1143px;
  }
  75.00% {
    background-position: -339px -1143px;
  }
  76.39% {
    background-position: -452px -1143px;
  }
  77.78% {
    background-position: -565px -1143px;
  }
  79.17% {
    background-position: -678px -1143px;
  }
  80.56% {
    background-position: -791px -1143px;
  }
  81.94% {
    background-position: -904px -1143px;
  }
  83.33% {
    background-position: -1017px -1143px;
  }
  84.72% {
    background-position: -1130px -1143px;
  }
  86.11% {
    background-position: -1243px -1143px;
  }
  87.50% {
    background-position: -1356px -1143px;
  }
  88.89% {
    background-position: -1469px -1143px;
  }
  90.28% {
    background-position: -1582px -1143px;
  }
  91.67% {
    background-position: -1695px -1143px;
  }
  93.06% {
    background-position: -1808px -1143px;
  }
  94.44% {
    background-position: 0px -1524px;
  }
  95.83% {
    background-position: -113px -1524px;
  }
  97.22% {
    background-position: -226px -1524px;
  }
  98.61% {
    background-position: -339px -1524px;
  }
  100.00% {
    background-position: -452px -1524px;
  }
}
@keyframes splashAnimation {
  0% {
    background-position: 0px 0px;
  }
  1.39% {
    background-position: -113px 0px;
  }
  2.78% {
    background-position: -226px 0px;
  }
  4.17% {
    background-position: -339px 0px;
  }
  5.56% {
    background-position: -452px 0px;
  }
  6.94% {
    background-position: -565px 0px;
  }
  8.33% {
    background-position: -678px 0px;
  }
  9.72% {
    background-position: -791px 0px;
  }
  11.11% {
    background-position: -904px 0px;
  }
  12.50% {
    background-position: -1017px 0px;
  }
  13.89% {
    background-position: -1130px 0px;
  }
  15.28% {
    background-position: -1243px 0px;
  }
  16.67% {
    background-position: -1356px 0px;
  }
  18.06% {
    background-position: -1469px 0px;
  }
  19.44% {
    background-position: -1582px 0px;
  }
  20.83% {
    background-position: -1695px 0px;
  }
  22.22% {
    background-position: -1808px 0px;
  }
  23.61% {
    background-position: 0px -381px;
  }
  25.00% {
    background-position: -113px -381px;
  }
  26.39% {
    background-position: -226px -381px;
  }
  27.78% {
    background-position: -339px -381px;
  }
  29.17% {
    background-position: -452px -381px;
  }
  30.56% {
    background-position: -565px -381px;
  }
  31.94% {
    background-position: -678px -381px;
  }
  33.33% {
    background-position: -791px -381px;
  }
  34.72% {
    background-position: -904px -381px;
  }
  36.11% {
    background-position: -1017px -381px;
  }
  37.50% {
    background-position: -1130px -381px;
  }
  38.89% {
    background-position: -1243px -381px;
  }
  40.28% {
    background-position: -1356px -381px;
  }
  41.67% {
    background-position: -1469px -381px;
  }
  43.06% {
    background-position: -1582px -381px;
  }
  44.44% {
    background-position: -1695px -381px;
  }
  45.83% {
    background-position: -1808px -381px;
  }
  47.22% {
    background-position: 0px -762px;
  }
  48.61% {
    background-position: -113px -762px;
  }
  50.00% {
    background-position: -226px -762px;
  }
  51.39% {
    background-position: -339px -762px;
  }
  52.78% {
    background-position: -452px -762px;
  }
  54.17% {
    background-position: -565px -762px;
  }
  55.56% {
    background-position: -678px -762px;
  }
  56.94% {
    background-position: -791px -762px;
  }
  58.33% {
    background-position: -904px -762px;
  }
  59.72% {
    background-position: -1017px -762px;
  }
  61.11% {
    background-position: -1130px -762px;
  }
  62.50% {
    background-position: -1243px -762px;
  }
  63.89% {
    background-position: -1356px -762px;
  }
  65.28% {
    background-position: -1469px -762px;
  }
  66.67% {
    background-position: -1582px -762px;
  }
  68.06% {
    background-position: -1695px -762px;
  }
  69.44% {
    background-position: -1808px -762px;
  }
  70.83% {
    background-position: 0px -1143px;
  }
  72.22% {
    background-position: -113px -1143px;
  }
  73.61% {
    background-position: -226px -1143px;
  }
  75.00% {
    background-position: -339px -1143px;
  }
  76.39% {
    background-position: -452px -1143px;
  }
  77.78% {
    background-position: -565px -1143px;
  }
  79.17% {
    background-position: -678px -1143px;
  }
  80.56% {
    background-position: -791px -1143px;
  }
  81.94% {
    background-position: -904px -1143px;
  }
  83.33% {
    background-position: -1017px -1143px;
  }
  84.72% {
    background-position: -1130px -1143px;
  }
  86.11% {
    background-position: -1243px -1143px;
  }
  87.50% {
    background-position: -1356px -1143px;
  }
  88.89% {
    background-position: -1469px -1143px;
  }
  90.28% {
    background-position: -1582px -1143px;
  }
  91.67% {
    background-position: -1695px -1143px;
  }
  93.06% {
    background-position: -1808px -1143px;
  }
  94.44% {
    background-position: 0px -1524px;
  }
  95.83% {
    background-position: -113px -1524px;
  }
  97.22% {
    background-position: -226px -1524px;
  }
  98.61% {
    background-position: -339px -1524px;
  }
  100.00% {
    background-position: -452px -1524px;
  }
}
</style>