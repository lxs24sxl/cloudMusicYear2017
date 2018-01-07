<template>
	<div :class="{'m-p12 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<div class="info">

			<div class="photobox f-animT100">
				<div class="photo">
					<img class="pic" :src="annualArtistImgUrl">
					<div class="man z-repeat"></div>
					<div class="man2"></div>
				</div>
			</div>

			<div class="content">
				<div class="name f-thide">{{ annualArtistName }}</div>
				<p class="para u-para">是TA的2017年度歌手</p>
				<p class="para u-para">
					共听了
					<span class="f-xs18 s-xsRed">{{ annualArtistPlayCount }}</span>
					次
				</p>
			</div>

		</div>

		<div class="waves">
			<div class="wave f-animR100 wave-4"></div>
			<div class="wave f-animR100 wave-3"></div>
			<div class="wave f-animR100 wave-2"></div>
			<div class="wave f-animR100 wave-1"></div>
		</div>

		<div class="lines">
			<li v-for="item in annualArtistSongToplist">
				<span class="text" :style="'left:' + item.left + 'px;transition-delay:' + item.delay + 's;' ">
					{{ item.song }}{{ item.count }}次
				</span>
			</li>
		</div>
	</div>
</template>

<script>
import Error from '../utils/error.js';
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
    if ( this.$store.state.curRouter != 11 ) {
    	// 修改当前路由
    	this.$store.commit( "_update_curRouter", 11 );
    }
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
		// 年度专辑图片路径
		annualArtistImgUrl () {
			return this.userData.annualArtistImgUrl;
		},
		// 年度歌手名字
		annualArtistName () {
			return this.userData.annualArtistName;
		},
		// 播放年度歌手的次数
		annualArtistPlayCount () {
			return this.userData.annualArtistPlayCount;
		},
		// 重写数组，方便遍历
		annualArtistSongToplist () {
			// 歌手歌单数据
			let data = this.userData.annualArtistSongToplist,
			// 临时数组
				tempArr = [],
			// 延迟
				delay = 5,
				that = this;
			// 遍历歌单
			data.forEach( function ( value, index ) {
				// 临时对象
				let tempObj = new Object();
				// 歌曲名
				tempObj.song = "《" + value.songName + "》";
				// 播放次数
				tempObj.count = value.playCount;
				// 当下标为偶数时, 向 临时对象的left属性 添加130-190的值
				if ( index % 2 ) {
					tempObj.left = that.getRandom( 130, 190 );
				// 当下标为奇数时, 向 临时对象的left属性 添加10-50的值
				} else {
					tempObj.left = that.getRandom( 10, 50 );
				}
				// 延迟时间 + 0.1
				tempObj.delay = ( delay++ ) / 10 ;
				// 存放临时对象
				tempArr.push( tempObj );
			});
			// 返回临时数组
			return tempArr;
		}
	},
	methods: {
		// 获得[ min, mix ]范围的数
		getRandom: function ( min , mix ) {
			try {
				// 传入的参数的长度
				let len = arguments.length,
					// 随机数
					randomNum;

				switch ( len ) {
					// 参数为两个时，[ min, mix ]
					case 2: 
						randomNum = Math.floor( Math.random() * ( arguments[ 1 ] - arguments[ 0 ] ) + arguments[ 0 ] );
						break;
					// 参数为一个时, [ 0, min ]
					case 1:
						randomNum =  Math.floor( Math.random() * arguments[ 0 ] + 1 );
						break;
					// 参数不为一个或两个时
					default:
						// 当传入的参数数量大于2或者数量小于0
						if ( len > 2 || len <= 0 ) {
							throw new Error( "传入的参数数量出错" );
						}
						// 当传入的参数不是数字时
						for ( let i = 0; i < len; i++ ) {
							if ( typeof arguments[ i ] !== 'number' ) {
								throw new Error( '传入的参数格式出错' );
							}
						}
						break;
				}
				// 返回随机数
				return randomNum;
			} catch ( e ) {
				// 打印错误
				console.log( e.name + ": " + e.message );
			}
		}
	}
}
</script>

<style lang="scss" scoped >
.m-p12 {
    visibility: hidden;
    .info {
        position: absolute;
        top: 20px;
        left: 25px;
        right: 17px;
        .photobox {
            position: absolute;
            width: 226px;
            height: 173px;
            .photo {
                width: 100%;
                height: 100%;
                -webkit-transform-origin: left top;
                transform-origin: left top;
                -webkit-transform: scale(0.75);
                transform: scale(0.75);
                background-image: url(../../static/images/p12/photo.png);
                background-size: cover;
                .pic {
                    position: absolute;
                    top: 40px;
                    left: 5px;
                    width: 91px;
                    height: 91px;
                }
            }
            .man {
                position: absolute;
                top: 77px;
                left: 121px;
                width: 103px;
                height: 95px;
                opacity: 0;
                background-image: url(../../static/images/p12/man_trans.png);
                -webkit-transform-origin: left top;
                transform-origin: left top;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
            }
            .man.z-repeat {
                background-image: url(../../static/images/p12/man_repeat.png);
            }
        }
    }
    .content {
        position: absolute;
        top: 82px;
        left: 95px;
        right: 0;
        text-align: right;
        .name {
            padding-left: 40px;
            font-size: 23px;
            color: #222;
            font-weight: bold;
            box-sizing: border-box;

        }
        .para {
            margin-top: -4px;
        }
    }
    .waves {
        position: absolute;
        left: 0;
        bottom: -100px;
        width: 100%;
    }
    .wave {
        position: absolute;
        bottom: 0;
        left: 50%;
        background-size: cover;
    }
    .wave-1 {
        width: 718px;
        height: 264px;
        margin-left: -420px;
        background-image: url(../../static/images/p12/wave_1.png);
    }
    .wave-2 {
        bottom: 28px;
        width: 662px;
        height: 240px;
        margin-left: -340px;
        background-image: url(../../static/images/p12/wave_2.png);
    }
    .wave-3 {
        bottom: 195px;
        width: 688px;
        height: 115px;
        margin-left: -388px;
        background-image: url(../../static/images/p12/wave_3.png);
    }
    .wave-4 {
        bottom: 270px;
        width: 754px;
        height: 88px;
        margin-left: -460px;
        background-image: url(../../static/images/p12/wave_4.png);
    }
    .lines {
    	position: absolute;
    	bottom: 10px;
    	left: 10px;
    	right: 10px;
    	height: 290px;
    	display: -webkit-box;
    	-webkit-box-orient: vertical;
    	-webkit-box-direction: normal;
    	display: -webkit-flex;
    	display: flex;
    	-webkit-flex-direction: column;
    	flex-direction: column;
    	-webkit-justify-content: center;
    	justify-content: center;
    	font-size: 13px;
    	color: #222;
    	.line {
    		margin-top: 0;
    		&:first-child {
    			margin-top: 0;
    		}
    		&:nth-child(2n + 1) {
    			.text {
    			   -webkit-animation: 2s linear infinite alternate cloud-horizontal-reverse;
    			    animation: 2s linear infinite alternate cloud-horizontal-reverse;
    			}
    		} 
    		&:nth-child(2n) {
    			.text {
 				   -webkit-animation: 2s linear infinite alternate cloud-horizontal;
   					 animation: 2s linear infinite alternate cloud-horizontal;
   				}
			}
    	}
    	.text {
    	    position: relative;
    	    display: inline-block;
    	    opacity: 0;
    	}
    }
}
.m-p12.z-enter {
    visibility: visible;
    .info {
    	.photo {
    		.man {
    		    opacity: 1;
    		    -webkit-transition: opacity .5s .5s;
    		    transition: opacity .5s .5s;
    		    -webkit-animation: man-wall-trans 0.42s 1s steps(1) forwards;
    		    animation: man-wall-trans 0.42s 1s steps(1) forwards;
    		}
    		.man.z-repeat {
    		    -webkit-animation: man-wall-repeat 0.96s steps(1) infinite;
    		    animation: man-wall-repeat 0.96s steps(1) infinite;
    		}
    	}
    }
    .wave {
        -webkit-animation: 2s linear infinite alternate wave-horizontal-reverse;
        animation: 2s linear infinite alternate wave-horizontal-reverse;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-transition: opacity .5s, -webkit-transform 2s;
        transition: opacity .5s, -webkit-transform 2s;
        transition: transform 2s, opacity .5s;
        transition: transform 2s, opacity .5s, -webkit-transform 2s;
    }
    .wave-1 {
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
    }
    .wave-2 {
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-name: wave-horizontal;
        animation-name: wave-horizontal;
    }
    .wave-3 {
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
    }
    .wave-4 {
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-name: wave-horizontal;
        animation-name: wave-horizontal;
    }
    .content,.lines {
        opacity: 1;
        -webkit-transition: opacity .5s .2s;
        transition: opacity .5s .2s;
    }
	.lines {
		.text {
		    opacity: 1;
		    -webkit-transition: opacity .5s;
		    transition: opacity .5s;
		}
	}
}

.m-p12.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media (min-height: 576px) {
	.m-p12 {
		.info {
			top: 30px;
			.photobox {
				.photo {
				    -webkit-transform: none;
				    transform: none;
				}
			}
			.content {
				top: 125px;
				.para {
				    margin-top: -1px;
				}
			}
		}
		.lines {
		    height: 310px;
		    .line {
		    	margin-top: 2px;
		    }
		}
	}
}
@media (min-height: 603px) {
	.m-p12 {
		.info {
			top: 38px;
			.content {
				top: 125px;
				.para {
					margin-top: 5px;
				}
			}
		}
		.lines {
			.line {
			    margin-top: 5px;
			}
		}
	}
}

@-webkit-keyframes man-wall-trans {
  0% {
    background-position: 0px 0px;
  }
  10.00% {
    background-position: -103px 0px;
  }
  20.00% {
    background-position: -206px 0px;
  }
  30.00% {
    background-position: -309px 0px;
  }
  40.00% {
    background-position: -412px 0px;
  }
  50.00% {
    background-position: -515px 0px;
  }
  60.00% {
    background-position: -618px 0px;
  }
  70.00% {
    background-position: -721px 0px;
  }
  80.00% {
    background-position: -824px 0px;
  }
  90.00% {
    background-position: -927px 0px;
  }
  100.00% {
    background-position: -927px 0px;
  }
}
@keyframes man-wall-trans {
  0% {
    background-position: 0px 0px;
  }
  10.00% {
    background-position: -103px 0px;
  }
  20.00% {
    background-position: -206px 0px;
  }
  30.00% {
    background-position: -309px 0px;
  }
  40.00% {
    background-position: -412px 0px;
  }
  50.00% {
    background-position: -515px 0px;
  }
  60.00% {
    background-position: -618px 0px;
  }
  70.00% {
    background-position: -721px 0px;
  }
  80.00% {
    background-position: -824px 0px;
  }
  90.00% {
    background-position: -927px 0px;
  }
  100.00% {
    background-position: -927px 0px;
  }
}
@-webkit-keyframes man-wall-repeat {
  0% {
    background-position: 0px 0px;
  }
  4.35% {
    background-position: -103px 0px;
  }
  8.70% {
    background-position: -206px 0px;
  }
  13.04% {
    background-position: -309px 0px;
  }
  17.39% {
    background-position: -412px 0px;
  }
  21.74% {
    background-position: -515px 0px;
  }
  26.09% {
    background-position: -618px 0px;
  }
  30.43% {
    background-position: -721px 0px;
  }
  34.78% {
    background-position: -824px 0px;
  }
  39.13% {
    background-position: -927px 0px;
  }
  43.48% {
    background-position: -1030px 0px;
  }
  47.83% {
    background-position: -1133px 0px;
  }
  52.17% {
    background-position: -1236px 0px;
  }
  56.52% {
    background-position: -1339px 0px;
  }
  60.87% {
    background-position: -1442px 0px;
  }
  65.22% {
    background-position: -1545px 0px;
  }
  69.57% {
    background-position: -1648px 0px;
  }
  73.91% {
    background-position: -1751px 0px;
  }
  78.26% {
    background-position: -1854px 0px;
  }
  82.61% {
    background-position: 0px -95px;
  }
  86.96% {
    background-position: -103px -95px;
  }
  91.30% {
    background-position: -206px -95px;
  }
  95.65% {
    background-position: -309px -95px;
  }
  100.00% {
    background-position: -412px -95px;
  }
}
@keyframes man-wall-repeat {
  0% {
    background-position: 0px 0px;
  }
  4.35% {
    background-position: -103px 0px;
  }
  8.70% {
    background-position: -206px 0px;
  }
  13.04% {
    background-position: -309px 0px;
  }
  17.39% {
    background-position: -412px 0px;
  }
  21.74% {
    background-position: -515px 0px;
  }
  26.09% {
    background-position: -618px 0px;
  }
  30.43% {
    background-position: -721px 0px;
  }
  34.78% {
    background-position: -824px 0px;
  }
  39.13% {
    background-position: -927px 0px;
  }
  43.48% {
    background-position: -1030px 0px;
  }
  47.83% {
    background-position: -1133px 0px;
  }
  52.17% {
    background-position: -1236px 0px;
  }
  56.52% {
    background-position: -1339px 0px;
  }
  60.87% {
    background-position: -1442px 0px;
  }
  65.22% {
    background-position: -1545px 0px;
  }
  69.57% {
    background-position: -1648px 0px;
  }
  73.91% {
    background-position: -1751px 0px;
  }
  78.26% {
    background-position: -1854px 0px;
  }
  82.61% {
    background-position: 0px -95px;
  }
  86.96% {
    background-position: -103px -95px;
  }
  91.30% {
    background-position: -206px -95px;
  }
  95.65% {
    background-position: -309px -95px;
  }
  100.00% {
    background-position: -412px -95px;
  }
}
/* 山左右动 */
@-webkit-keyframes wave-horizontal {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(40px);
            transform: translateX(40px);
  }
}
@keyframes wave-horizontal {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(40px);
            transform: translateX(40px);
  }
}
/* 山左右动 反方向 */
@-webkit-keyframes wave-horizontal-reverse {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-40px);
            transform: translateX(-40px);
  }
}
@keyframes wave-horizontal-reverse {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-40px);
            transform: translateX(-40px);
  }
}
/* 云左右动 */
@-webkit-keyframes cloud-horizontal {
  0% {
    -webkit-transform: translateX(-5px);
            transform: translateX(-5px);
  }
  100% {
    -webkit-transform: translateX(5px);
            transform: translateX(5px);
  }
}
@keyframes cloud-horizontal {
  0% {
    -webkit-transform: translateX(-5px);
            transform: translateX(-5px);
  }
  100% {
    -webkit-transform: translateX(5px);
            transform: translateX(5px);
  }
}
/* 云左右动 反方向 */
@-webkit-keyframes cloud-horizontal-reverse {
  0% {
    -webkit-transform: translateX(5px);
            transform: translateX(5px);
  }
  100% {
    -webkit-transform: translateX(-5px);
            transform: translateX(-5px);
  }
}
@keyframes cloud-horizontal-reverse {
  0% {
    -webkit-transform: translateX(5px);
            transform: translateX(5px);
  }
  100% {
    -webkit-transform: translateX(-5px);
            transform: translateX(-5px);
  }
}
</style>