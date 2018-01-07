<template>
	<div :class="{'m-p04 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<div class="mountain mountain-1 f-animB100"></div>
		<div class="mountain mountain-2 f-animB100"></div>
		<div class="tree tree-1"></div>
		<div class="tree tree-2"></div>
		<div class="tree tree-3"></div>
		<div class="tree tree-4"></div>
		<div class="tree tree-5"></div>
		<div class="tree tree-6"></div>
		<div class="tree tree-7"></div>
		<div class="tree tree-8"></div>
		<div class="moonbox f-animR100">
			<div class="moonwrap">
				<div class="moon">
					<div class="man"></div>
				</div>
			</div>
		</div>
		<div class="content">
			<p class="u-para">
				<span class="s-xsRed">{{ midnightPlayTime.month }}月{{ midnightPlayTime.day }}日</span>
			</p>
			<p class="u-para u-para-1">
				这一天他睡的很晚
			</p>
			<p class="u-para u-para-2">
				<span class="f-xs18 s-xsRed">{{ midnightPlayTime.hour }}</span>
				时
				<span class="f-xs18 s-xsRed">{{ midnightPlayTime.minute }}</span>
				分还在与音乐为伴
			</p>
			<p class="u-para u-para-3">
				那一刻TA在听
				<span class="s-xsRed">{{ midnightArtistName }}</span>
				的
				<span class="s-xsRed">《{{ midnightSongName }}》</span>
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
				laeve: false
			}
		}
	},
	mounted() {
		var that = this;
    	// 修改当前路由
    	this.$store.commit( "_update_curRouter", 4 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	},
	methods: {
		formatDate: function( time ) {
			// 获得当前时间
			var date = new Date( time ),
				tempDate = {};
			// 年
			tempDate.year = date.getFullYear();
			// 月
			tempDate.month = date.getMonth() + 1;
			// 日
			tempDate.day = date.getDate();
			// 时
			tempDate.hour = date.getHours();
			// 分
			tempDate.minute = date.getMinutes();
			// 秒
			tempDate.second = date.getSeconds();
			// 返回时间
			return tempDate;
		}
	},
	computed: {
		// 局部变量,存储data
		userData () {
		  return this.$store.state.data;
		},
		midnightPlayTime () {
			return this.formatDate( this.userData.midnightPlayTime );
		},
		midnightArtistName () {
			return this.userData.midnightArtistName;
		},
		midnightSongName () {
			return this.userData.midnightSongName;
		}
	}
}
</script>

<style lang="scss" scoped>
.m-p04 {
    visibility: hidden;
    .content {
    	opacity: 0;
        position: absolute;
        top: 17.7%;
        width: 100%;
        padding-left: 20px;
        padding-right: 100px;
        box-sizing: border-box;
    }
    .mountain {
    	position: absolute;
    	&:before {
    		content: '';
    		position: absolute;
    		width: 100%;
    		height: 100%;
    		background-size: 100%;
    		-webkit-transform-origin: center bottom;
    		transform-origin: center bottom;
    		-webkit-transform: scale( 0.85 );
    		transform: scale( 0.85 );
    	}
    }
    .mountain-1 {
    	width: 729px;
    	height: 295px;
    	left: -209px;
    	bottom: -33px;
    	opacity: 0.3;
    	&:before {
    		background-image: url(../../static/images/p04/mountain_top.png);
    	}
    }
    .mountain-2 {
    	width: 615px;
    	height: 334px;
    	left: -57px;
    	bottom: -20px;
    	opacity: .4;
    	&:before {
    		background-image: url(../../static/images/p04/mountain_bot.png);
    	}
    }
    .moonbox {
    	position: absolute;
    	top: 0;
    	right: 0;
    	height: 100%;
    }
    .moonwrap {
    	position: absolute;
    	top: 28.2%;
    	right: -20px;
    	width: 354px;
    	height: 360px;
    	-webkit-transform-origin: right top;
    	transform-origin: right top;
    	-webkit-transform: scale(0.75);
    	transform: scale(0.75);	
    }
    .moon {
    	width: 100%;
    	height: 100%;
    	background: url(../../static/images/p04/moon.png) no-repeat;
    	background-size: cover;
    	-webkit-transform: rotateZ(-2deg);
    	transform: rotateZ(-2deg);
    	-webkit-animation: 2s 1s linear infinite alternate moon-rotate;
    	animation: 2s 1s linear infinite alternate moon-rotate;
    }
    .man {
    	position: absolute;
    	top: -19px;
    	right: 110px;
    	width: 100px;
    	height: 100px;
    	background-image: url(../../static/images/p04/man_repeat.png);
    	-webkit-transform-origin: right top;
    	transform-origin: right top;
    	-webkit-transform: scale( 0.5 );
    	transform: scale( 0.5 );
    	-webkit-animation: man-moon 2s steps(1) infinite;
    	animation: man-moon 2s steps(1) infinite;
    }
    .tree {
    	position: absolute;
    	opacity: 0;
    	-webkit-transform: translateY(50%);
    	transform: translateY(50%);
    	&:before {
    		content: '';
    		display: block;
    		width: 100%;
    		height: 100%;
    		background-size: 100%;
    		-webkit-transform-origin: center bottom;
    		transform-origin: center bottom;
   			-webkit-transform: scale(0.85);
    		transform: scale(0.85);
		}
    }
    .tree-1 {
    	width: 46px;
    	height: 269px;
    	right: 87px;
    	bottom: 0;
    	&:before {
    		background-image: url(../../static/images/p04/tree_1.png);
    	}
    }
    .tree-2 {
    	width: 27px;
    	height: 146px;
    	left: 30px;
    	bottom: 0;
    	&:before {
    		background-image: url(../../static/images/p04/tree_2.png);
    	}
    }
    .tree-3 {
    	width: 46px;
    	height: 380px;
    	right: 30px;
    	bottom: 0;
    	&:before {
    		background-image: url(../../static/images/p04/tree_3.png);
    	}
    }
    .tree-4 {
    	width: 46px;
    	height: 342px;
    	left: 10px;
    	bottom: 0px;
    	&:before {
    		background-image: url(../../static/images/p04/tree_4.png);
    	}
    }
    .tree-5 {
    	width: 22px;
    	height: 171px;
    	right: 40px;
    	top: 0px;
    	&:before {
    		background-image: url(../../static/images/p04/tree_5.png);
    	}
    }
    .tree-6 {
    	width: 82px;
    	height: 583px;
    	left: 85px;
    	bottom: 0px;
    	&:before {
    		background-image: url(../../static/images/p04/tree_6.png);
    	}
    }
    .tree-7 {
    	width: 34px;
    	height: 123px;
    	right: 105px;
    	bottom: 0px;
    	&:before {
    		background-image: url(../../static/images/p04/tree_7.png);
    	}
    }
    .tree-8 {
    	width: 34px;
    	height: 295px;
    	right: 10px;
    	top: 80px;
    	&:before {
    		background-image: url(../../static/images/p04/tree_8.png);
    	}
    }
}
.m-p04.z-enter {
    visibility: visible;
    .tree {
    	opacity: 1;
    	-webkit-transform: translateY(0);
    	transform: translateY(0);
    	-webkit-transition: opacity .3s, -webkit-transform .8s;
    	transition: opacity .3s, -webkit-transform .8s;
    	transition: opacity .3s, transform .8s;
    	transition: opacity .3s, -webkit-transform .8s;
    }
    .tree-1,.tree-2,.tree-8 {
		-webkit-transition-delay: .3s;
		transition-delay: .3s;
    }
    .mountain {
        -webkit-transition-duration: 1.5s;
        transition-duration: 1.5s;
    }
    .content {
        opacity: 1;
        -webkit-transition: opacity .3s .2s;
        transition: opacity .3s .2s;
    }
}
.m-p04.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media (min-width: 360px) {
	.m-p04 {
		.mountain{
			&:before {
    			-webkit-transform: none;
    			transform: none;
    		}
		}
		.tree {
			&:before {
			    -webkit-transform: none;
			    transform: none;
			}
		}
		.moonwrap {
		    top: 24.2%;
		    right: -40px;
		    -webkit-transform: none;
		    transform: none;
		}
		.content {
		    top: 28%;
		}
	}
}
@media (min-width: 603px) {
	.m-p04 {
		.moonwrap {
		    top: 28.2%;
		}
	}
}
@-webkit-keyframes moon-rotate {
	0% {
		-webkit-transform: rotateZ(-2deg);	
		transform: rotateZ(-2deg);	
	}
	100% {
		-webkit-transform: rotateZ(2deg);	
		transform: rotateZ(2deg);	
	}
}
@keyframes moon-rotate {
	0% {
		-webkit-transform: rotateZ(-2deg);	
		transform: rotateZ(-2deg);	
	}
	100% {
		-webkit-transform: rotateZ(2deg);	
		transform: rotateZ(2deg);	
	}
}
@-webkit-keyframes man-moon {
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
    background-position: 0px -100px;
  }
  44.68% {
    background-position: -100px -100px;
  }
  46.81% {
    background-position: -200px -100px;
  }
  48.94% {
    background-position: -300px -100px;
  }
  51.06% {
    background-position: -400px -100px;
  }
  53.19% {
    background-position: -500px -100px;
  }
  55.32% {
    background-position: -600px -100px;
  }
  57.45% {
    background-position: -700px -100px;
  }
  59.57% {
    background-position: -800px -100px;
  }
  61.70% {
    background-position: -900px -100px;
  }
  63.83% {
    background-position: -1000px -100px;
  }
  65.96% {
    background-position: -1100px -100px;
  }
  68.09% {
    background-position: -1200px -100px;
  }
  70.21% {
    background-position: -1300px -100px;
  }
  72.34% {
    background-position: -1400px -100px;
  }
  74.47% {
    background-position: -1500px -100px;
  }
  76.60% {
    background-position: -1600px -100px;
  }
  78.72% {
    background-position: -1700px -100px;
  }
  80.85% {
    background-position: -1800px -100px;
  }
  82.98% {
    background-position: -1900px -100px;
  }
  85.11% {
    background-position: 0px -200px;
  }
  87.23% {
    background-position: -100px -200px;
  }
  89.36% {
    background-position: -200px -200px;
  }
  91.49% {
    background-position: -300px -200px;
  }
  93.62% {
    background-position: -400px -200px;
  }
  95.74% {
    background-position: -500px -200px;
  }
  97.87% {
    background-position: -600px -200px;
  }
  100.00% {
    background-position: -700px -200px;
  }
}
@keyframes man-moon {
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
    background-position: 0px -100px;
  }
  44.68% {
    background-position: -100px -100px;
  }
  46.81% {
    background-position: -200px -100px;
  }
  48.94% {
    background-position: -300px -100px;
  }
  51.06% {
    background-position: -400px -100px;
  }
  53.19% {
    background-position: -500px -100px;
  }
  55.32% {
    background-position: -600px -100px;
  }
  57.45% {
    background-position: -700px -100px;
  }
  59.57% {
    background-position: -800px -100px;
  }
  61.70% {
    background-position: -900px -100px;
  }
  63.83% {
    background-position: -1000px -100px;
  }
  65.96% {
    background-position: -1100px -100px;
  }
  68.09% {
    background-position: -1200px -100px;
  }
  70.21% {
    background-position: -1300px -100px;
  }
  72.34% {
    background-position: -1400px -100px;
  }
  74.47% {
    background-position: -1500px -100px;
  }
  76.60% {
    background-position: -1600px -100px;
  }
  78.72% {
    background-position: -1700px -100px;
  }
  80.85% {
    background-position: -1800px -100px;
  }
  82.98% {
    background-position: -1900px -100px;
  }
  85.11% {
    background-position: 0px -200px;
  }
  87.23% {
    background-position: -100px -200px;
  }
  89.36% {
    background-position: -200px -200px;
  }
  91.49% {
    background-position: -300px -200px;
  }
  93.62% {
    background-position: -400px -200px;
  }
  95.74% {
    background-position: -500px -200px;
  }
  97.87% {
    background-position: -600px -200px;
  }
  100.00% {
    background-position: -700px -200px;
  }
}
</style>