<template>
	<div :class="{'m-p10 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
	
		<div class="back f-area f-area-bottom"></div>
		
		<div class="orb orb-1 f-animL100"></div>
		
		<div class="content">
			<p class="u-para">这一年，在TA收藏的歌</p>
			<p class="u-para u-para-1">
				有
				<span class="f-xs18 s-xsRed">{{ recommendLikeCount }}</span>
				首是网易云音乐精心为TA推荐的
			</p>
			<p class="u-para u-para-1">2017，还是网易云音乐最懂TA。</p>
		</div>
		
		<div class="spinbox f-animR100">
			<div class="box">
				<div class="sun sun-2"></div>
				<div class="sun sun-1"></div>
				<div class="man"></div>

				<svg class="spin" viewBox="-20 -20 670 320">
					<g id="PlanetALL" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="planetPage" transform="translate(-121.000000, -821.000000)">
							<g id="planetGroup" transform="translate(106.000000, 787.000000)">
								<path id="bigPath" d="M341.77773,207.923971 C511.478165,159.263154 641.40229,93.1535859 631.971387,60.2641167 C622.540483,27.3746476 477.325842,40.1598508 307.625407,88.8206674 C137.924973,137.481484 8.00084696,203.591053 17.4317505,236.480522 C26.862654,269.369991 172.077295,256.584788 341.77773,207.923971 Z" stroke="#000000" stroke-width="2"></path>
								<circle id="big3" fill="#A31B01" cx="0" cy="0" r="14">
									<animateMotion begin="0s" dur="15s" rotate="auto" repeatCount="indefinite">
										<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bigPath"></mpath>
									</animateMotion>
								</circle>
								<circle id="big2" fill="#A31B01" cx="0" cy="0" r="17.5">
									<animateMotion begin="0s" dur="15s" rotate="auto" repeatCount="indefinite">
										<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bigPath"></mpath>
									</animateMotion>
								</circle>
								<circle id="big1" fill="#A31B01" cx="0" cy="0" r="9">
									<animateMotion begin="-11s" dur="15s" rotate="auto" repeatCount="indefinite">
										<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bigPath"></mpath>
									</animateMotion>
								</circle>
								<path id="smallPath" d="M366.553285,177.547385 C491.139407,141.822889 586.568404,93.4445038 579.699915,69.4912365 C572.831426,45.5379693 466.266409,55.0804353 341.680286,90.804931 C217.094164,126.529427 121.665167,174.907812 128.533656,198.86108 C135.402145,222.814347 241.967163,213.271881 366.553285,177.547385 Z" stroke="#000000" stroke-width="2"></path>
								<circle id="small1" fill="#A31B01" cx="0" cy="0" r="11.5">
									<animateMotion begin="0s" dur="10s" rotate="auto" repeatCount="indefinite">
										<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#smallPath"></mpath>
									</animateMotion>
								</circle>
								<circle id="small2" fill="#A31B01" cx="0" cy="0" r="12.5">
									<animateMotion begin="-3.3s" dur="10s" rotate="auto" repeatCount="indefinite">
										<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#smallPath"></mpath>
									</animateMotion>
								</circle>
								<circle id="small3" fill="#A31B01" cx="0" cy="0" r="7">
									<animateMotion begin="-6.6s" dur="10s" rotate="auto" repeatCount="indefinite">
										<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#smallPath"></mpath>
									</animateMotion>
								</circle>
								<circle id="small4" fill="#A31B01" cx="0" cy="0" r="7">
									<animateMotion begin="-4s" dur="10s" rotate="auto" repeatCount="indefinite">
										<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#smallPath"></mpath>
									</animateMotion>
								</circle>
								<circle id="small5" fill="#A31B01" cx="0" cy="0" r="4">
									<animateMotion begin="-0.7s" dur="10s" rotate="auto" repeatCount="indefinite">
										<mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#smallPath"></mpath>
									</animateMotion>
								</circle>
							</g>
						</g>
					</g>
				</svg>
			</div>
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
    	this.$store.commit( "_update_curRouter", 10 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	},
	computed: {
		recommendLikeCount () {
			return this.$store.state.data.recommendLikeCount;
		}
	}
}
</script>

<style lang="scss" scoped >
.m-p10 {
    visibility: hidden;
    .content {
        position: absolute;
        top: 28.5%;
        width: 100%;
        opacity: 0;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .back {
        padding-bottom: 89.733333%;
        &:before {
    		background-image: url(../../static/images/p10/back.png);
		}
    }
    .orb {
        position: absolute;
        background-size: cover;
    }
    .orb-1 {
        top: 35px;
        left: 35px;
        width: 56px;
        height: 40px;
        background-image: url(../../static/images/p10/orb_1.png);
    }
    .spinbox {
        position: absolute;
        bottom: 39px;
        right: -10px;
        width: 335px;
        height: 160px;
        .sun {
            position: absolute;
            left: 128px;
            width: 98px;
            height: 49px;
            background-image: url(../../static/images/p10/sun.png);
            background-size: 98px auto;
        }
        .sun-2 {
            top: 54px;
            background-position: 0 -49px;
        }
        .sun-1 {
            top: 5px;
            height: 60px;
        }
        .man {
            position: absolute;
            top: -25px;
            left: 152px;
            width: 75px;
            height: 100px;
            background-image: url(../../static/images/common/head_repeat.png);
            -webkit-transform-origin: left top;
            transform-origin: left top;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-animation: zhanliAnimation 4s steps(1) infinite;
            animation: zhanliAnimation 4s steps(1) infinite;
        }
    }
    .box {
        width: 100%;
        height: 100%;
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
}
.m-p10.z-enter {
    visibility: visible;
    .content {
        opacity: 1;
        -webkit-transition: opacity .3s .2s;
        transition: opacity .3s .2s;
    }
    .back {
        -webkit-transition-duration: 1.5s;
        transition-duration: 1.5s;
        -webkit-transition-delay: .1s;
        transition-delay: .1s;
    }
    .orb-1 {
        -webkit-transition: opacity 1s, -webkit-transform 1s;
        transition: opacity 1s, -webkit-transform 1s;
        transition: transform 1s, opacity 1s;
        transition: transform 1s, opacity 1s, -webkit-transform 1s;
    }
    .spinbox {
        -webkit-transition: opacity 1.5s, -webkit-transform 1.5s;
        transition: opacity 1.5s, -webkit-transform 1.5s;
        transition: transform 1.5s, opacity 1.5s;
        transition: transform 1.5s, opacity 1.5s, -webkit-transform 1.5s;
    }
}
.m-p10.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media (min-width: 360px) {
	.m-p10 {
		.spinbox {
			.box {
				-webkit-transform: none;
				transform: none;
			}
		}
	} 
}
</style>