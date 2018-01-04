<template>
	<div :class="{'m-p01 f-page':true, 'z-enter': boxClass.enter,'z-leave':boxClass.leave}">
		<div class="tt f-animOpac">
			2017，TA在网易云音乐听到最多的歌词是
		</div>
		<div class="rock f-animL100 rock-2">
			<div class="c"></div>
		</div>
		<div class="rock f-animL100 rock-1">
			<div class="c"></div>
		</div>
		
		<div class="mountainbox f-animB100">
			<div class="mountain">
				<div class="word word-33 word-w1">
					<div class="count">
						<span class="s-xsRed">724次</span>
						<div class="man"></div>
					</div>
				</div>

				<div class="listbox">
					<div class="list">
						<div class="itm">
							<div class="lyric f-thide">
								<span class="s-xsRed">心</span>
								不定是变的 是凉的 是炽热
							</div>
							<div class="artist f-thide">
								—王博文《一课一颗》
							</div>
						</div>
						<div class="itm">
							<div class="lyric f-thide">
								可我的
								<span class="s-xsRed">心</span>
								, 我的家
							</div>
							<div class="artist f-thide">
								—海龟先生《男孩别哭》
							</div>
						</div>
						<div class="itm">
							<div class="lyric f-thide">
								我把
								<span class="s-xsRed">心</span>停泊进你的臂弯
							</div>
							<div class="artist f-thide">
								>—群星《习惯》
							</div>
						</div>
						<div class="itm">
							<div class="lyric f-thide">
								我的
								<span class="s-xsRed">心</span>
								开始想你了
							</div>
							<div class="artist f-thide">
								—张学友《我真的受伤了》
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	
		

		<div class="rock f-animR100 rock-3">
			<div class="c"></div>
		</div>
		<div class="rock f-animR100 rock-4">
			<div class="c"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "mP01",
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
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	}
}
</script>

<style lang="scss" scoped>
@import url(../../static/css/common.scss);
.m-p01 {
	visibility: hidden;
	opacity: 0;
	.tt {
		position: absolute;
		left: 0;
		top: 9.9%;
		width: 100%;
		font-size: 15px;
		color: #222;
		font-weight: bold;
		text-align: center;
	}
	.rock {
	    position: absolute;
	    .c {
	        width: 100%;
	        height: 100%;
	        -webkit-transform: scale(0.7);
	        transform: scale(0.7);
	        &:before {
	            content: '';
	            display: block;
	            width: 100%;
	            height: 100%;
	            background-size: cover;
	            -webkit-animation: 2s linear infinite alternate glass-vertical;
	            animation: 2s linear infinite alternate glass-vertical;
	        }
	    }
	}
	.rock-1 {
	    left: 0;
	    bottom: 75px;
	    width: 55px;
	    height: 70px;
	    .c {
	    	&:before {
    			background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p01/rock_1.png?8a740bd…);
			}
	    }
	}
	.rock-2 {
	    left: 0;
	    bottom: 120px;
	    width: 59px;
	    height: 79px;
	    .c {
	    	&:before {
			    background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p01/rock_2.png);
			}
	    }
	}
	.rock-3 {
	    right: 94px;
	    bottom: 30px;
	    width: 35px;
	    height: 35px;
	    .c {
	    	&:before {
	    		background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p01/rock_3.png?17d3b26…);
	    	}
	    }
	}
	.rock-4 {
	    right: 0;
	    bottom: -15px;
	    width: 91px;
	    height: 117px;
	    .c {
	    	&:before {
	    		background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p01/rock_4.png?7ad9bab…);

	    	}
	    }
	}
	.mountainbox {
	    position: absolute;
	    top: 170px;
	    left: 50%;
	    width: 366px;
	    height: 380px;
	    margin-left: -183px;
	}
	.rock-2,.rock-4 {
		.c {
			&:before {
				-webkit-animation: 2s 1s linear infinite alternate glass-vertical-reverse;
				animation: 2s 1s linear infinite alternate glass-vertical-reverse;
			}
		}
	}
	.mountain {
		width: 100%;
		height: 100%;
		background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p01/mountain.png?a036d93…);
		background-size: cover;
		-webkit-transform-origin: center top;
		transform-origin: center top;
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
		.word-33 {
		    background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p01/word/33.png?c694103…);
		}
		.word {
		    position: absolute;
		    top: -75px;
		    left: 50%;
		    width: 240px;
		    height: 110px;
		    margin-left: -120px;
		    background-repeat: no-repeat;
		    background-size: 100%;
		    .count {
		        position: absolute;
		        bottom: -10px;
		        right: -12px;
		        width: 78px;
		        height: 24px;
		        line-height: 24px;
		        text-align: center;
		        background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p01/border.png?09d2d1c…);
		        background-size: cover;
		        .man {
		            position: absolute;
		            top: -28px;
		            right: -5px;
		            width: 19px;
		            height: 41px;
		            background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p01/man.png?1b77412…);
		            background-size: cover;
		        }
		    }
		}
		.word-w1 {
			.count {
		    	right: 33px;
			}
		}
		.listbox {
			position: absolute;
			top: 65px;
			left: 0;
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-origin: vertical;
			-webkit-box-direction: normal;
			-webkit-flex-direction: column;
			flex-direction: column;
			-webkit-box-align:center;
			-webkit-align-items:center;
			.list {
			    display: -webkit-box;
			    display: -webkit-flex;
			    display: flex;
			    -webkit-box-orient: vertical;
			    -webkit-box-direction: normal;
			    -webkit-flex-direction: column;
			    flex-direction: column;
			    max-width: 100%;
			    .itm {
			        text-align: left;
			        margin-top: 10px;
			    }
			    .lyric {
			        font-size: 14px;
			        color: #222;
			    }
			    .artist {
			        font-size: 11px;
			        color: rgba(34, 34, 34, 0.7);
			    }
			}
		}
	}
}
.z-enter {
	.rock {
	    -webkit-transition-delay: .5s;
	    transition-delay: .5s;
	    -webkit-transition-duration: 1.5s;
	    transition-duration: 1.5s;
	}
	.f-animOpac {
	    opacity: 1;
	    -webkit-transition: opacity .5s;
	    transition: opacity .5s;
	}
	.f-animL100 {
	    opacity: 1;
	    -webkit-transform: translateX(0);
	    transform: translateX(0);
	    -webkit-transition: opacity .5s, -webkit-transform .8s;
	    transition: opacity .5s, -webkit-transform .8s;
	    transition: transform .8s, opacity .5s;
	    transition: transform .8s, opacity .5s, -webkit-transform .8s;
	}   
	.f-animB100 {
	    opacity: 1;
	    -webkit-transform: translateY(0);
	    transform: translateY(0);
	    -webkit-transition: opacity .5s, -webkit-transform .8s;
	    transition: opacity .5s, -webkit-transform .8s;
	    transition: transform .8s, opacity .5s;
	    transition: transform .8s, opacity .5s, -webkit-transform .8s;
	}
	.f-animR100 {
	    opacity: 1;
	    -webkit-transform: translateX(0);
	    transform: translateX(0);
	    -webkit-transition: opacity .5s, -webkit-transform .8s;
	    transition: opacity .5s, -webkit-transform .8s;
	    transition: transform .8s, opacity .5s;
	    transition: transform .8s, opacity .5s, -webkit-transform .8s;
	}
}
    
.m-p01.z-enter {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    .rock-2, .rock-4 {
       -webkit-transition-delay: .8s;
    	transition-delay: .8s;
    	.c {
    		&:before {
    			-webkit-transition-delay: .8s;
    			transition-delay: .8s;
    		}
    	}
    }
}
.z-leave {
	.f-animR100 {
    	opacity: 0;
   		-webkit-transform: translateX(100px);
    	transform: translateX(100px);
    	-webkit-transition: opacity .3s, -webkit-transform .3s;
    	transition: opacity .3s, -webkit-transform .3s;
    	transition: transform .3s, opacity .3s;
    	transition: transform .3s, opacity .3s, -webkit-transform .3s;
    }
    .f-animB100 {
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        -webkit-transition: opacity .3s, -webkit-transform .3s;
        transition: opacity .3s, -webkit-transform .3s;
        transition: transform .3s, opacity .3s;
        transition: transform .3s, opacity .3s, -webkit-transform .3s;
    }
    .f-animL100 {
        opacity: 0;
        -webkit-transform: translateX(-100px);
        transform: translateX(-100px);
        -webkit-transition: opacity .3s, -webkit-transform .3s;
        transition: opacity .3s, -webkit-transform .3s;
        transition: transform .3s, opacity .3s;
        transition: transform .3s, opacity .3s, -webkit-transform .3s;
    }
}
.m-p01.z-leave {
    opacity: 0;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    .rock {
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
    }
}
@media (min-width: 360px) {
	.m-p01 {
		.tt {
	    	font-size: 18px;
		}
		.rock {
			.c {
		    	-webkit-transform: scale(0.8);
		    	transform: scale(0.8);
			}
		}
		.mountainbox {
			top: 190px;
		}
		.mountain {
		    -webkit-transform: scale(0.9);
		    transform: scale(0.9);
		}
	}
}
@media (min-width: 375px) {
	.m-p01 {
		.rock {
			.c {
		   		-webkit-transform: none;
		    	transform: none;
			}	
		}
		.mountainbox {
			top: 190px;
		}
		.mountain {
		    -webkit-transform: none;
		    transform: none;
		}
	}
}    
/* 沙漏上下动 */
@-webkit-keyframes glass-vertical {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(12px);
            transform: translateY(12px);
  }
}
@keyframes glass-vertical {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(12px);
            transform: translateY(12px);
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
/* 灯光旋转 */
@-webkit-keyframes spotlight-rotate {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(3deg);
            transform: rotateZ(3deg);
  }
}
@keyframes spotlight-rotate {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(3deg);
            transform: rotateZ(3deg);
  }
}
/* 灯光旋转 反方向 */
@-webkit-keyframes spotlight-rotate-reverse {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-3deg);
            transform: rotateZ(-3deg);
  }
}
@keyframes spotlight-rotate-reverse {
  0% {
    -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-3deg);
            transform: rotateZ(-3deg);
  }
}
</style>