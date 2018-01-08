<template>
	<div :class="{'m-p14 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">

		<div class="light2 light2-2"></div>
		<div class="light2 light2-1"></div>

		<div class="info">
			<div class="avatar f-animaOpac">
				<img src="../../static/images/common/avatar.jpg">
			</div>
			<div class="title f-animaOpac"></div>
		</div>
		
		<div class="content f-animaOpac">
			<ol>
				<li class="itm f-oc" v-for="( item, index ) in songToplist">
					<div class="lt">
						<!-- 当歌单里的歌排名为前三个时,渲染该标签 -->
						<span class="num s-xsRed" v-if="index <= 2 "> {{ index + 1 }}</span>
						<!-- 当歌单里的歌排名为前三个时 -->
						<span class="num" v-else> {{ index + 1 }} </span>
						<!-- 歌曲名 -->
						<div class="f-oh">
							<div class="tt">
								<span class="in">{{ item.songName }}</span>
							</div>
						</div>
					</div>
					<!-- 歌手名 -->
					<div class="rt">{{ item.artistName }}</div>
				</li>
			</ol>
		</div>

		<div class="man f-animaOpac"></div>
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
		if ( this.$store.state.curRouter != 13 ) {
    		// 修改当前路由
    		this.$store.commit( "_update_curRouter", 13 );
    	}
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	},
	computed: {
		songToplist () {
			return this.$store.state.data.songToplist;
		}
	}
}
</script>

<style lang="scss" scoped >
.m-p14 {
    visibility: hidden;
    .light2 {
        position: absolute;
        top: -30px;
        left: -32px;
        opacity: 0;
        -webkit-transform-origin: 79px 22px;
        transform-origin: 79px 22px;
        -webkit-transform: rotateZ(-25deg);
        transform: rotateZ(-25deg);
        &:before {
    		position: relative;
    		content: '';
    		display: block;
    		width: 100%;
    		height: 100%;
    		background-size: 100%;
		}
    }
    .light2-1 {
        width: 450px;
        height: 238px;
        &:before {
       		background-image: url(../../static/images/p14/light_1.png);
       		-webkit-transform-origin: 79px 22px;
        	transform-origin: 79px 22px;
    	}
    }    
    .light2-2 {
        width: 450px;
        height: 175px;
        &:before {
    		left: -5px;
    		background-image: url(../../static/images/p14/light_2.png);
    		-webkit-transform-origin: 150px 49px;
   			transform-origin: 150px 49px;
		}
    }
    .man {
        position: absolute;
        bottom: 17px;
        right: 20px;
        width: 75px;
        height: 100px;
        background-image: url(../../static/images/common/head_repeat.png);
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-animation: zhanliAnimation 4s steps(1) infinite;
        animation: zhanliAnimation 4s steps(1) infinite;
    }
    .info {
    	position: absolute;
    	top: 13.6%;
    	left: 0;
    	width:100%;
    	-webkit-transform-origin: left top;
    	transform-origin: left top;
    	-webkit-transform: scale( 0.8 );
    	transform: scale( 0.8 );
    }
	.avatar {
		position: absolute;
		top: 0;
		left: 15px;
		width: 55px;
		height: 55px;
		border-radius: 9999px;
		overflow: hidden;
		img {
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 9999px;
		}
	}    
	.title {
    	position: absolute;
    	top: 0;
    	left: 80px;
    	width: 207px;
    	height: 83px;
    	background-image: url(../../static/images/p14/title_ta.png);
    	background-size: cover;
	}
	.content {
	    position: absolute;
	    top: 27%;
	    width: 100%;
	    box-sizing: border-box;
	    opacity: 0;
	    .itm {
	        height: 18px;
	        margin-top: 7px;
	    }
	    .lt {
	        float: left;
	        width: 74.133333%;
	        height: 100%;
	        font-size: 13px;
	        color: #222;
	        .num {
	            float: left;
	            display: block;
	            width: 25px;
	            padding-left: 10px;
	            text-align: center;
	            overflow: hidden;
	        }
	        .tt {
	            position: relative;
	            display: inline-block;
	            max-width: 100%;
	            padding: 0 45px 0 15px;
	            box-sizing: border-box;
	            .in {
	                display: inline-block;
	                max-width: 100%;
	                white-space: nowrap;
	                text-overflow: ellipsis;
	                overflow: hidden;
	            }
	            &:before {
    				content: '\300A';
    				left: 0;
				}
				&:after {
				  	content: '\300B';
				  	right: 30px;
				}				
	            &:before, &:after {
            	    position: absolute;	  
               	    top: 0;
            	    display: inline-block;
	            }

	        }
	    }
	    .rt {
	        width: 25.866667%;
	        padding-right: 15px;
	        box-sizing: border-box;
	        text-align: right;
	        overflow: hidden;
	        white-space: nowrap;
	        text-overflow: ellipsis;
	        font-size: 12px;
	        color: rgba(34, 34, 34, 0.7);
	    }
	}
}
.m-p14.z-enter {
    visibility: visible;
    .light2 {
        opacity: 1;
        -webkit-transform: rotateZ(0);
        transform: rotateZ(0);
    }
    .light2-1 {
        -webkit-transition: opacity 1.5s .3s, -webkit-transform 1.5s;
        transition: opacity 1.5s .3s, -webkit-transform 1.5s;
        transition: transform 1.5s, opacity 1.5s .3s;
        transition: transform 1.5s, opacity 1.5s .3s, -webkit-transform 1.5s;
        &:before {
    		-webkit-animation: 2.3s 1.4s linear infinite alternate spotlight-rotate-reverse;
   		 	animation: 2.3s 1.4s linear infinite alternate spotlight-rotate-reverse;
		}
    }
    .light2-2 {
        -webkit-transition: opacity 2.5s .8s, -webkit-transform 1.5s .3s;
        transition: opacity 2.5s .8s, -webkit-transform 1.5s .3s;
        transition: transform 1.5s .3s, opacity 2.5s .8s;
        transition: transform 1.5s .3s, opacity 2.5s .8s, -webkit-transform 1.5s .3s;
        &:before {
    		-webkit-animation: 2s 1.4s linear infinite alternate spotlight-rotate;
    		animation: 2s 1.4s linear infinite alternate spotlight-rotate;
		}
    }
    .man {
        -webkit-transition: .8s .5s;
        transition: .8s .5s;
    }
    .avatar, .title {
    	-webkit-transition-delay: .5s;
    	    transition-delay: .5s;
    }
    .content {
        opacity: 1;
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
        -webkit-transition-delay: 1s;
        transition-delay: 1s;
        -webkit-transition-duration: 1.2s;
        transition-duration: 1.2s;
    }

}
.m-p14.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media (min-width: 360px) {
	.m-p14 {
		.content {
			top: 29%;
			.itm {
				height: 22px;
			}
			.rt {
			    font-size: 13px;
			}
			.lt {
			    font-size: 14px;
			}
		}
	}
}
@media (min-height: 603px) {
	.m-p14 {
		.content {
			top: 26%;
			.itm {
				height: 26px;
			}
		}
	}
}
@media (min-height: 672px) {
	.m-p14 {
		.content {
			.itm {
				height: 28px;
			}
		}
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