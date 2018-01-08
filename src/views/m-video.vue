<template>
	<div :class="{'m-video f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<div class="f-page f-animB100">

			<div class="arrow f-animOpac"></div>

			<div class="slogan">
				<span class="text">↓ 点击开启 ↓</span>
			</div>
			
			<div class="videobox">
				<div class="wrap">
					<div class="in">
						<div class="tech"></div>
						<div class="pic">
							<img class="f-blk" src="../../static/images/video/video_bg.jpg" alt="">
						</div>
						<div class="play"></div>
					</div>
				</div>
			</div>

			<div class="buttons buttons-2">
				<a href="javascript:;" class="button button-2" @click.stop="reloadPage()">重温TA的2017</a>
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
    	this.$store.commit( "_update_curRouter", 15 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	},
	methods: {
		reloadPage: function () {
			var that = this;
			this.boxClass.leave = true;
			setTimeout( function(){
				that.$router.replace({ path: '/'});
			}, 300 );
		}
	}
}
</script>

<style lang="scss" scoped >
.m-video {
    visibility: hidden;
    .arrow {
        position: absolute;
        top: 15px;
        left: 50%;
        width: 14px;
        height: 11px;
        margin-left: -7px;
        background: url(../../static/images/video/arrow.png) no-repeat;
        background-size: 100%;
    }
    .slogan {
        position: absolute;
        top: 14.1%;
        width: 100%;
        padding: 0 20px 75px;
        text-align: center;
        font-size: 15px;
        color: #222;
        box-sizing: border-box;
        background: url(../../static/images/video/slogan.png) center top no-repeat;
        background-size: 202px auto;
        .text {
            display: block;
            margin-top: 30px;
        }
    }
    .videobox {
        position: absolute;
        top: 30.5%;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        .wrap {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.14%;
        }
        .in {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        .pic {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            &:after {
    			content: '';
    			position: absolute;
    			top: 0;
    			left: 0;
    			display: block;
    			width: 100%;
    			height: 100%;
    			background-color: rgba(0, 0, 0, 0.2);
			}
        }
        .play {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 63px;
            height: 63px;
            background: url(../../static/images/video/play.png) no-repeat;
            background-size: 100%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
    }
    .buttons {
        position: absolute;
        width: 100%;
    }
    .buttons-2 {
        display: block;
        top: 75%;
    }
    .button {
        display: block;
        width: 216px;
        height: 38px;
        line-height: 38px;
        margin: 0 auto;
        text-align: center;
        font-size: 15px;
        box-sizing: border-box;
    }
    .button-2 {
        margin-top: 10px;
        border: 1px solid #df4d3d;
        border-radius: 9999px;
        color: #d33a31;
    }
}
.m-video.z-enter {
    visibility: visible;
    .arrow {
        -webkit-transition-delay: .8s;
        transition-delay: .8s;
    }
}
.m-video.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media (min-width: 360px) {
	.m-video {
		.slogan {
    		background-size: 202px auto;
		}
	}
}
</style>