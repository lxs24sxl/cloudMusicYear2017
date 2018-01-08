<template>
	<div :class="{'m-p13 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">、
		<div class="line f-area f-area-top f-animOpac"></div>
		<div class="back f-area f-area-bottom f-animOpac"></div>
		
		<div class="glass f-animT100 glass-1">
			<div class="s">
				<div class="c"></div>
			</div>
		</div>
		<div class="glass f-animL100 glass-2">
			<div class="s">
				<div class="c"></div>
			</div>
		</div>
		<div class="glass f-animOpac glass-3">
			<div class="sand sand-2"></div>
			<div class="sand sand-1"></div>
			<div class="man z-repeat"></div>
		</div>
		
		<div class="content">
			<p class="u-para">这一年</p>
			<p class="u-para u-para-6">
				TA有
				<span class="f-xs18 s-xsRed">{{ playSongTime }}小时</span>
			</p>
			<p class="u-para u-para-6">沉浸在音乐的世界</p>
			<p class="u-para u-para-6">时光中的音乐</p>
			<p class="u-para u-para-6">是不散的宴席</p>
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
    	this.$store.commit( "_update_curRouter", 12 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	},
	methods: {
	},
	computed: {
		// 播放时长
		playSongTime () {
			return Math.floor( this.$store.state.data.playSongTime / 1000 / 60 / 60 );
		}
	}
}
</script>

<style lang="scss" scoped >
.m-p13 {
    visibility: hidden;
    .back {
        padding-bottom: 46.533333%;
        &:before {
            background-image: url(../../static/images/p13/back.png);
        }
    }
    .line {
        padding-bottom: 66.8%;
        &:before {
    		background-image: url(../../static/images/p13/line.png);
		}
    }
    .glass {
        position: absolute;
        background-size: cover;
        .s, .c {
        	width: 100%;
        	height: 100%;
        }
        .s {
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
        }
    }
    .glass-1 {
        top: -13px;
        left: 85px;
        width: 189px;
        height: 110px;
        .s {
            -webkit-transform-origin: center top;
            transform-origin: center top;
            .c {
            	&:before {
                	background-image: url(../../static/images/p13/glass_1.png);
            	}
            }
        }
    }
    .glass-2 {
        top: 315px;
        left: 0;
        width: 113px;
        height: 134px;
        .s {
            -webkit-transform-origin: left center;
            transform-origin: left center;
            .c {
            	&:before {
            		background-image: url(../../static/images/p13/glass_2.png);
            	}
            }
        }
    }
    .glass-1, .glass-2 {
    	.c {
    		&:before {
    		    content: '';
    		    display: block;
    		    width: 100%;
    		    height: 100%;
    		    background-size: cover;
    		}
    	}
    }
    .glass-3 {
        bottom: 35px;
        right: 25px;
        width: 159px;
        height: 337px;
        background-image: url(../../static/images/p13/glass_3.png);
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        .sand {
            position: absolute;
            background-size: cover;
        }
        .sand-2 {
            top: 167px;
            left: 70px;
            width: 35px;
            height: 200px;
            background-image: url(../../static/images/p13/sand_2.png);
            -webkit-transform-origin: left top;
            transform-origin: left top;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-animation: sand 1s steps(1) infinite;
            animation: sand 1s steps(1) infinite;
        }
        .sand-1 {
            top: 148px;
            left: 56px;
            width: 48px;
            height: 30px;
            background-image: url(../../static/images/p13/sand_1.png);
            -webkit-transform-origin: 23px bottom;
            transform-origin: 23px bottom;
        }
        .man {
            position: absolute;
            top: 270px;
            left: -30px;
            width: 78px;
            height: 68px;
            background-image: url(../../static/images/p13/man_trans.png);
            -webkit-transform-origin: left top;
            transform-origin: left top;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        .man.z-repeat {
            background-image: url(../../static/images/p13/man_repeat.png);
        }
    }
    .content {
        position: absolute;
        top: 25.7%;
        width: 100%;
        opacity: 0;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
    }
}
.m-p13.z-enter {
    visibility: visible;
    .line, .back {
    	-webkit-transition-delay: 0.5s;
    	transition-delay: 0.5s;
    }
    .content {
    	opacity: 1;
    	-webkit-transition: opacity .3s;
    	transition: opacity .3s;
    }
    .glass-1, .glass-2 {
    	.c {
    		-webkit-transition-duration: 3s;
    		transition-duration: 3s;
    	}
    }
    .glass-1 {
    	.c {
    		&:before {
    			-webkit-animation: 2s linear infinite alternate glass-rotate;
    			animation: 2s linear infinite alternate glass-rotate;
    			-webkit-transform-origin: 94px 45px;
    			transform-origin: 94px 45px;
			}
    	}
    }
    .glass-2 {
    	.c {
    		&:before {
    		    -webkit-animation: 2s linear infinite alternate glass-vertical-reverse;
    		    animation: 2s linear infinite alternate glass-vertical-reverse;
    		}
    	}
    }

    .glass-3 {
        -webkit-transition-duration: 2s;
        transition-duration: 2s;
        -webkit-transition-delay: .2s;
        transition-delay: .2s;
        .man {
            -webkit-animation: man-glass 1.17s 0.1s steps(1) forwards;
            animation: man-glass 1.17s 0.1s steps(1) forwards;
        }
        .man.z-repeat {
            -webkit-animation: man-glass-repeat 2s steps(1) infinite;
            animation: man-glass-repeat 2s steps(1) infinite;
        }
    }
    .sand-1 {
        -webkit-animation: 10s ease-in forwards sand-shrink;
        animation: 10s ease-in forwards sand-shrink;
    }

}
.m-p13.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media ( min-width: 360px ) {
	.m-p13 {
		.glass {
			.s {
				-webkit-transform: none;
				transform: none;
			}
		}
		.glass-3 {
			-webkit-transform: none;
			transform: none;
		}
	}
}
/* 沙漏上下动 反方向 */
@-webkit-keyframes glass-vertical-reverse {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
  }
}
@keyframes glass-vertical-reverse {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
  }
}
/* 沙漏旋转 */
@-webkit-keyframes glass-rotate {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(5deg);
            transform: rotateZ(5deg);
  }
}
@keyframes glass-rotate {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(5deg);
            transform: rotateZ(5deg);
  }
}
@-webkit-keyframes man-glass {
  0% {
    background-position: 0px 0px;
  }
  3.57% {
    background-position: -78px 0px;
  }
  7.14% {
    background-position: -156px 0px;
  }
  10.71% {
    background-position: -234px 0px;
  }
  14.29% {
    background-position: -312px 0px;
  }
  17.86% {
    background-position: -390px 0px;
  }
  21.43% {
    background-position: -468px 0px;
  }
  25.00% {
    background-position: -546px 0px;
  }
  28.57% {
    background-position: -624px 0px;
  }
  32.14% {
    background-position: -702px 0px;
  }
  35.71% {
    background-position: -780px 0px;
  }
  39.29% {
    background-position: -858px 0px;
  }
  42.86% {
    background-position: -936px 0px;
  }
  46.43% {
    background-position: -1014px 0px;
  }
  50.00% {
    background-position: -1092px 0px;
  }
  53.57% {
    background-position: -1170px 0px;
  }
  57.14% {
    background-position: -1248px 0px;
  }
  60.71% {
    background-position: -1326px 0px;
  }
  64.29% {
    background-position: -1404px 0px;
  }
  67.86% {
    background-position: -1482px 0px;
  }
  71.43% {
    background-position: -1560px 0px;
  }
  75.00% {
    background-position: -1638px 0px;
  }
  78.57% {
    background-position: -1716px 0px;
  }
  82.14% {
    background-position: -1794px 0px;
  }
  85.71% {
    background-position: -1872px 0px;
  }
  89.29% {
    background-position: 0px -68px;
  }
  92.86% {
    background-position: -78px -68px;
  }
  96.43% {
    background-position: -156px -68px;
  }
  100.00% {
    background-position: -234px -68px;
  }
}
@keyframes man-glass {
  0% {
    background-position: 0px 0px;
  }
  3.57% {
    background-position: -78px 0px;
  }
  7.14% {
    background-position: -156px 0px;
  }
  10.71% {
    background-position: -234px 0px;
  }
  14.29% {
    background-position: -312px 0px;
  }
  17.86% {
    background-position: -390px 0px;
  }
  21.43% {
    background-position: -468px 0px;
  }
  25.00% {
    background-position: -546px 0px;
  }
  28.57% {
    background-position: -624px 0px;
  }
  32.14% {
    background-position: -702px 0px;
  }
  35.71% {
    background-position: -780px 0px;
  }
  39.29% {
    background-position: -858px 0px;
  }
  42.86% {
    background-position: -936px 0px;
  }
  46.43% {
    background-position: -1014px 0px;
  }
  50.00% {
    background-position: -1092px 0px;
  }
  53.57% {
    background-position: -1170px 0px;
  }
  57.14% {
    background-position: -1248px 0px;
  }
  60.71% {
    background-position: -1326px 0px;
  }
  64.29% {
    background-position: -1404px 0px;
  }
  67.86% {
    background-position: -1482px 0px;
  }
  71.43% {
    background-position: -1560px 0px;
  }
  75.00% {
    background-position: -1638px 0px;
  }
  78.57% {
    background-position: -1716px 0px;
  }
  82.14% {
    background-position: -1794px 0px;
  }
  85.71% {
    background-position: -1872px 0px;
  }
  89.29% {
    background-position: 0px -68px;
  }
  92.86% {
    background-position: -78px -68px;
  }
  96.43% {
    background-position: -156px -68px;
  }
  100.00% {
    background-position: -234px -68px;
  }
}
@-webkit-keyframes man-glass-repeat {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -78px 0px;
  }
  4.26% {
    background-position: -156px 0px;
  }
  6.38% {
    background-position: -234px 0px;
  }
  8.51% {
    background-position: -312px 0px;
  }
  10.64% {
    background-position: -390px 0px;
  }
  12.77% {
    background-position: -468px 0px;
  }
  14.89% {
    background-position: -546px 0px;
  }
  17.02% {
    background-position: -624px 0px;
  }
  19.15% {
    background-position: -702px 0px;
  }
  21.28% {
    background-position: -780px 0px;
  }
  23.40% {
    background-position: -858px 0px;
  }
  25.53% {
    background-position: -936px 0px;
  }
  27.66% {
    background-position: -1014px 0px;
  }
  29.79% {
    background-position: -1092px 0px;
  }
  31.91% {
    background-position: -1170px 0px;
  }
  34.04% {
    background-position: -1248px 0px;
  }
  36.17% {
    background-position: -1326px 0px;
  }
  38.30% {
    background-position: -1404px 0px;
  }
  40.43% {
    background-position: -1482px 0px;
  }
  42.55% {
    background-position: -1560px 0px;
  }
  44.68% {
    background-position: -1638px 0px;
  }
  46.81% {
    background-position: -1716px 0px;
  }
  48.94% {
    background-position: -1794px 0px;
  }
  51.06% {
    background-position: -1872px 0px;
  }
  53.19% {
    background-position: 0px -68px;
  }
  55.32% {
    background-position: -78px -68px;
  }
  57.45% {
    background-position: -156px -68px;
  }
  59.57% {
    background-position: -234px -68px;
  }
  61.70% {
    background-position: -312px -68px;
  }
  63.83% {
    background-position: -390px -68px;
  }
  65.96% {
    background-position: -468px -68px;
  }
  68.09% {
    background-position: -546px -68px;
  }
  70.21% {
    background-position: -624px -68px;
  }
  72.34% {
    background-position: -702px -68px;
  }
  74.47% {
    background-position: -780px -68px;
  }
  76.60% {
    background-position: -858px -68px;
  }
  78.72% {
    background-position: -936px -68px;
  }
  80.85% {
    background-position: -1014px -68px;
  }
  82.98% {
    background-position: -1092px -68px;
  }
  85.11% {
    background-position: -1170px -68px;
  }
  87.23% {
    background-position: -1248px -68px;
  }
  89.36% {
    background-position: -1326px -68px;
  }
  91.49% {
    background-position: -1404px -68px;
  }
  93.62% {
    background-position: -1482px -68px;
  }
  95.74% {
    background-position: -1560px -68px;
  }
  97.87% {
    background-position: -1638px -68px;
  }
  100.00% {
    background-position: -1716px -68px;
  }
}
@keyframes man-glass-repeat {
  0% {
    background-position: 0px 0px;
  }
  2.13% {
    background-position: -78px 0px;
  }
  4.26% {
    background-position: -156px 0px;
  }
  6.38% {
    background-position: -234px 0px;
  }
  8.51% {
    background-position: -312px 0px;
  }
  10.64% {
    background-position: -390px 0px;
  }
  12.77% {
    background-position: -468px 0px;
  }
  14.89% {
    background-position: -546px 0px;
  }
  17.02% {
    background-position: -624px 0px;
  }
  19.15% {
    background-position: -702px 0px;
  }
  21.28% {
    background-position: -780px 0px;
  }
  23.40% {
    background-position: -858px 0px;
  }
  25.53% {
    background-position: -936px 0px;
  }
  27.66% {
    background-position: -1014px 0px;
  }
  29.79% {
    background-position: -1092px 0px;
  }
  31.91% {
    background-position: -1170px 0px;
  }
  34.04% {
    background-position: -1248px 0px;
  }
  36.17% {
    background-position: -1326px 0px;
  }
  38.30% {
    background-position: -1404px 0px;
  }
  40.43% {
    background-position: -1482px 0px;
  }
  42.55% {
    background-position: -1560px 0px;
  }
  44.68% {
    background-position: -1638px 0px;
  }
  46.81% {
    background-position: -1716px 0px;
  }
  48.94% {
    background-position: -1794px 0px;
  }
  51.06% {
    background-position: -1872px 0px;
  }
  53.19% {
    background-position: 0px -68px;
  }
  55.32% {
    background-position: -78px -68px;
  }
  57.45% {
    background-position: -156px -68px;
  }
  59.57% {
    background-position: -234px -68px;
  }
  61.70% {
    background-position: -312px -68px;
  }
  63.83% {
    background-position: -390px -68px;
  }
  65.96% {
    background-position: -468px -68px;
  }
  68.09% {
    background-position: -546px -68px;
  }
  70.21% {
    background-position: -624px -68px;
  }
  72.34% {
    background-position: -702px -68px;
  }
  74.47% {
    background-position: -780px -68px;
  }
  76.60% {
    background-position: -858px -68px;
  }
  78.72% {
    background-position: -936px -68px;
  }
  80.85% {
    background-position: -1014px -68px;
  }
  82.98% {
    background-position: -1092px -68px;
  }
  85.11% {
    background-position: -1170px -68px;
  }
  87.23% {
    background-position: -1248px -68px;
  }
  89.36% {
    background-position: -1326px -68px;
  }
  91.49% {
    background-position: -1404px -68px;
  }
  93.62% {
    background-position: -1482px -68px;
  }
  95.74% {
    background-position: -1560px -68px;
  }
  97.87% {
    background-position: -1638px -68px;
  }
  100.00% {
    background-position: -1716px -68px;
  }
}
/* 沙子缩小 */
@-webkit-keyframes sand-shrink {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.3);
            transform: scale(0.3);
  }
}
@keyframes sand-shrink {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.3);
            transform: scale(0.3);
  }
}
@-webkit-keyframes sand {
  0% {
    background-position: 0px 0px;
  }
  4.35% {
    background-position: -35px 0px;
  }
  8.70% {
    background-position: -70px 0px;
  }
  13.04% {
    background-position: -105px 0px;
  }
  17.39% {
    background-position: -140px 0px;
  }
  21.74% {
    background-position: -175px 0px;
  }
  26.09% {
    background-position: -210px 0px;
  }
  30.43% {
    background-position: -245px 0px;
  }
  34.78% {
    background-position: -280px 0px;
  }
  39.13% {
    background-position: -315px 0px;
  }
  43.48% {
    background-position: -350px 0px;
  }
  47.83% {
    background-position: -385px 0px;
  }
  52.17% {
    background-position: -420px 0px;
  }
  56.52% {
    background-position: -455px 0px;
  }
  60.87% {
    background-position: -490px 0px;
  }
  65.22% {
    background-position: -525px 0px;
  }
  69.57% {
    background-position: -560px 0px;
  }
  73.91% {
    background-position: -595px 0px;
  }
  78.26% {
    background-position: -630px 0px;
  }
  82.61% {
    background-position: -665px 0px;
  }
  86.96% {
    background-position: -700px 0px;
  }
  91.30% {
    background-position: -735px 0px;
  }
  95.65% {
    background-position: -770px 0px;
  }
  100.00% {
    background-position: -805px 0px;
  }
}
@keyframes sand {
  0% {
    background-position: 0px 0px;
  }
  4.35% {
    background-position: -35px 0px;
  }
  8.70% {
    background-position: -70px 0px;
  }
  13.04% {
    background-position: -105px 0px;
  }
  17.39% {
    background-position: -140px 0px;
  }
  21.74% {
    background-position: -175px 0px;
  }
  26.09% {
    background-position: -210px 0px;
  }
  30.43% {
    background-position: -245px 0px;
  }
  34.78% {
    background-position: -280px 0px;
  }
  39.13% {
    background-position: -315px 0px;
  }
  43.48% {
    background-position: -350px 0px;
  }
  47.83% {
    background-position: -385px 0px;
  }
  52.17% {
    background-position: -420px 0px;
  }
  56.52% {
    background-position: -455px 0px;
  }
  60.87% {
    background-position: -490px 0px;
  }
  65.22% {
    background-position: -525px 0px;
  }
  69.57% {
    background-position: -560px 0px;
  }
  73.91% {
    background-position: -595px 0px;
  }
  78.26% {
    background-position: -630px 0px;
  }
  82.61% {
    background-position: -665px 0px;
  }
  86.96% {
    background-position: -700px 0px;
  }
  91.30% {
    background-position: -735px 0px;
  }
  95.65% {
    background-position: -770px 0px;
  }
  100.00% {
    background-position: -805px 0px;
  }
}
</style>