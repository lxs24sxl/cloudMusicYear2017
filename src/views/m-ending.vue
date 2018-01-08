<template>
	<div :class="{'m-ending f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">

		<div class="content">
			<p class="para-1 u-para f-animOpac">2017年11月15日</p>
			<p class="para-2 u-para f-animOpac">
				网易云音乐收获了
				<span class="s-xsRed f-xs18">4亿</span>
				用户
			</p>
			<p class="para-3 u-para u-para-3 f-animOpac">
				今后的时光
			</p>
			<p class="para-4 u-para f-animOpac">让网易云音乐陪伴你一同走过</p>
		</div>

		<div class="ground">
			<div class="clockbox2 f-animOpac">
				<div class="min"></div>
				<div class="hour"></div>
			</div>
			<div class="man"></div>
			<div class="crowd crowd-1"></div>
			<div class="crowd crowd-2"></div>
			<div class="crowd crowd-3"></div>
			<div class="crowd crowd-4"></div>
			<div class="crowd crowd-5"></div>
		</div>
		
		<div class="tip">欸，有彩蛋吗？滑动看下~</div>

	</div>
</template>

<script>
export default {
	data () {
		return {
			boxClass: {
				enter: false,
				laeve: false
			}
		}
	},
	mounted() {
		var that = this;
		if ( this.$store.state.curRouter != 14 ) {
    		// 修改当前路由
    		this.$store.commit( "_update_curRouter", 14 );
    	}
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	}
}
</script>

<style lang="scss" scoped >
.m-ending {
    visibility: hidden;
    .content {
        position: absolute;
        top: 14.9%;
        left: 0;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
    }
    .ground {
        position: absolute;
        bottom: 24.9%;
        left: 50%;
        width: 335px;
        height: 84px;
        margin-left: -166px;
        background-image: url(../../static/images/ending/ground.png);
        background-size: cover;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        -webkit-perspective: 10000px;
        perspective: 10000px;
        .crowd {
            position: absolute;
            background-size: cover;
            opacity: 0;
        }
        .crowd-1 {
            top: -30px;
            left: 10px;
            width: 317px;
            height: 149px;
            background-image: url(../../static/images/ending/crowd_1.png);
        }
        .crowd-2 {
            top: -30px;
            left: -32px;
            width: 383px;
            height: 163px;
            background-image: url(../../static/images/ending/crowd_2.png);
        }
        .crowd-3 {
            top: -42px;
            left: -42px;
            width: 406px;
            height: 210px;
            background-image: url(../../static/images/ending/crowd_3.png);
        }
        .crowd-4 {
            top: -83px;
            left: -56px;
            width: 429px;
            height: 336px;
            background-image: url(../../static/images/ending/crowd_4.png);
        }
        .crowd-5 {
            top: -122px;
            left: -45px;
            width: 621px;
            height: 425px;
            background-image: url(../../static/images/ending/crowd_5.png);
        }
        .man {
            position: absolute;
            top: 0;
            left: 50%;
            width: 16px;
            height: 43px;
            margin-left: -8px;
            background-image: url(../../static/images/ending/man.png);
            background-size: cover;
        }
        .clockbox2 {
            position: absolute;
            top: -126px;
            left: 0;
            width: 335px;
            height: 335px;
            -webkit-transform: translateZ(1000px) rotateX(76deg);
            transform: translateZ(1000px) rotateX(76deg);
            .min {
                position: absolute;
                top: 154px;
                left: 43px;
                width: 141px;
                height: 11px;
                background-image: url(../../static/images/ending/clock_min2.png);
                background-size: 100%;
                -webkit-transform-origin: 127px 5px;
                transform-origin: 127px 5px;
                -webkit-animation: 15s linear infinite clock-min2;
                animation: 15s linear infinite clock-min2;
            }
            .hour {
                position: absolute;
                top: 153px;
                left: 137px;
                width: 37px;
                height: 11px;
                background-image: url(../../static/images/ending/clock_hour2.png);
                background-size: 100%;
                -webkit-transform-origin: 33px 5px;
                transform-origin: 33px 5px;
                -webkit-animation: 20s linear infinite clock-hour2;
                animation: 20s linear infinite clock-hour2;
            }
        }
    }
    .tip {
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.7);
        &:before {
    		content: '';
    		display: block;
    		position: absolute;
    		top: -15px;
    		left: 50%;
    		margin-left: -7px;
    		width: 14px;
    		height: 11px;
    		background: url(../../static/images/ending/arrow.png) no-repeat;
    		background-size: 100%;
		}
    }
}
.m-ending.z-enter {
    visibility: visible;
    .u-para {
        -webkit-transition-duration: 1.5s;
        transition-duration: 1.5s;
    }
    .para-1 {
        -webkit-transition-delay: .2s;
        transition-delay: .2s;
    }
    .para-2 {
        -webkit-transition-delay: .6s;
        transition-delay: .6s;
    }
    .para-3 {
        -webkit-transition-delay: 1.4s;
        transition-delay: 1.4s;
    }
    .para-4 {
        -webkit-transition-delay: 1.8s;
        transition-delay: 1.8s;
    }
    .crowd {
        -webkit-animation: 1s forwards crowd;
        animation: 1s forwards crowd;
    }
    .crowd-2 {
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }
    .crowd-3 {
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
    }
    .crowd-4 {
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
    }
    .crowd-5 {
        -webkit-animation-delay: 4s;
        animation-delay: 4s;
    }
}
.m-ending.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
} 
@media (min-height: 724px) {
	.m-ending {
		.content {
    		top: 18.9%;
		}
	}
}
@media (min-width: 360px) {
	.m-ending {
		.ground {
			-webkit-transform: none;
			transform: none;
		}
	} 
}
/* 人群出现 */
@-webkit-keyframes crowd {
  0% {
    opacity: 0;
  }
  100% {
    opacity: .51;
  }
}
@keyframes crowd {
  0% {
    opacity: 0;
  }
  100% {
    opacity: .51;
  }
}
/* 时针分针转动 */
@-webkit-keyframes clock-min2 {
  0% {
    -webkit-transform: scale(1, 2) rotateZ(0deg);
            transform: scale(1, 2) rotateZ(0deg);
  }
  10% {
    -webkit-transform: scale(0.5, 1.5) rotateZ(36deg);
            transform: scale(0.5, 1.5) rotateZ(36deg);
  }
  25% {
    -webkit-transform: scale(0.5, 1) rotateZ(90deg);
            transform: scale(0.5, 1) rotateZ(90deg);
  }
  40% {
    -webkit-transform: scale(0.5, 1.5) rotateZ(144deg);
            transform: scale(0.5, 1.5) rotateZ(144deg);
  }
  50% {
    -webkit-transform: scale(1, 2) rotateZ(180deg);
            transform: scale(1, 2) rotateZ(180deg);
  }
  60% {
    -webkit-transform: scale(0.5, 1.5) rotateZ(216deg);
            transform: scale(0.5, 1.5) rotateZ(216deg);
  }
  75% {
    -webkit-transform: scale(0.5, 1) rotateZ(270deg);
            transform: scale(0.5, 1) rotateZ(270deg);
  }
  90% {
    -webkit-transform: scale(0.5, 1.5) rotateZ(324deg);
            transform: scale(0.5, 1.5) rotateZ(324deg);
  }
  100% {
    -webkit-transform: scale(1, 2) rotateZ(360deg);
            transform: scale(1, 2) rotateZ(360deg);
  }
}
@keyframes clock-min2 {
  0% {
    -webkit-transform: scale(1, 2) rotateZ(0deg);
            transform: scale(1, 2) rotateZ(0deg);
  }
  10% {
    -webkit-transform: scale(0.5, 1.5) rotateZ(36deg);
            transform: scale(0.5, 1.5) rotateZ(36deg);
  }
  25% {
    -webkit-transform: scale(0.5, 1) rotateZ(90deg);
            transform: scale(0.5, 1) rotateZ(90deg);
  }
  40% {
    -webkit-transform: scale(0.5, 1.5) rotateZ(144deg);
            transform: scale(0.5, 1.5) rotateZ(144deg);
  }
  50% {
    -webkit-transform: scale(1, 2) rotateZ(180deg);
            transform: scale(1, 2) rotateZ(180deg);
  }
  60% {
    -webkit-transform: scale(0.5, 1.5) rotateZ(216deg);
            transform: scale(0.5, 1.5) rotateZ(216deg);
  }
  75% {
    -webkit-transform: scale(0.5, 1) rotateZ(270deg);
            transform: scale(0.5, 1) rotateZ(270deg);
  }
  90% {
    -webkit-transform: scale(0.5, 1.5) rotateZ(324deg);
            transform: scale(0.5, 1.5) rotateZ(324deg);
  }
  100% {
    -webkit-transform: scale(1, 2) rotateZ(360deg);
            transform: scale(1, 2) rotateZ(360deg);
  }
}
/* 时针分针转动 */
@-webkit-keyframes clock-hour2 {
  0% {
    -webkit-transform: rotateZ(0deg) scale(2, 2);
            transform: rotateZ(0deg) scale(2, 2);
  }
  10% {
    -webkit-transform: rotateZ(36deg) scale(2, 1.5);
            transform: rotateZ(36deg) scale(2, 1.5);
  }
  25% {
    -webkit-transform: rotateZ(90deg) scale(3, 1);
            transform: rotateZ(90deg) scale(3, 1);
  }
  40% {
    -webkit-transform: rotateZ(144deg) scale(2, 1.5);
            transform: rotateZ(144deg) scale(2, 1.5);
  }
  50% {
    -webkit-transform: rotateZ(180deg) scale(2, 2);
            transform: rotateZ(180deg) scale(2, 2);
  }
  60% {
    -webkit-transform: rotateZ(216deg) scale(2, 1.5);
            transform: rotateZ(216deg) scale(2, 1.5);
  }
  75% {
    -webkit-transform: rotateZ(270deg) scale(3.5, 1);
            transform: rotateZ(270deg) scale(3.5, 1);
  }
  90% {
    -webkit-transform: rotateZ(324deg) scale(2, 1.5);
            transform: rotateZ(324deg) scale(2, 1.5);
  }
  100% {
    -webkit-transform: rotateZ(360deg) scale(2, 2);
            transform: rotateZ(360deg) scale(2, 2);
  }
}
@keyframes clock-hour2 {
  0% {
    -webkit-transform: rotateZ(0deg) scale(2, 2);
            transform: rotateZ(0deg) scale(2, 2);
  }
  10% {
    -webkit-transform: rotateZ(36deg) scale(2, 1.5);
            transform: rotateZ(36deg) scale(2, 1.5);
  }
  25% {
    -webkit-transform: rotateZ(90deg) scale(3, 1);
            transform: rotateZ(90deg) scale(3, 1);
  }
  40% {
    -webkit-transform: rotateZ(144deg) scale(2, 1.5);
            transform: rotateZ(144deg) scale(2, 1.5);
  }
  50% {
    -webkit-transform: rotateZ(180deg) scale(2, 2);
            transform: rotateZ(180deg) scale(2, 2);
  }
  60% {
    -webkit-transform: rotateZ(216deg) scale(2, 1.5);
            transform: rotateZ(216deg) scale(2, 1.5);
  }
  75% {
    -webkit-transform: rotateZ(270deg) scale(3.5, 1);
            transform: rotateZ(270deg) scale(3.5, 1);
  }
  90% {
    -webkit-transform: rotateZ(324deg) scale(2, 1.5);
            transform: rotateZ(324deg) scale(2, 1.5);
  }
  100% {
    -webkit-transform: rotateZ(360deg) scale(2, 2);
            transform: rotateZ(360deg) scale(2, 2);
  }
}
</style>