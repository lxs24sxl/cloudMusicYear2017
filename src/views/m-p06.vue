<template>
	<div :class="{'m-p06 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<div class="mountain f-animB100 mountain-7"></div>
		<div class="mountain f-animB100 mountain-6"></div>
		<div class="mountain f-animB100 mountain-5"></div>
		<div class="mountain f-animB100 mountain-4"></div>
		<div class="mountain f-animB100 mountain-3"></div>
		<div class="mountain f-animB100 mountain-2">
			<div class="man"></div>
		</div>
		<div class="mountain f-animB100 mountain-1"></div>
		<div class="lightbox">
			<div class="light light-1"></div>
			<div class="light light-2"></div>
		</div>
		<div class="sun f-animOpac"></div>
		<div class="content">
			<p class="u-para">在TA的音乐品味中</p>
			<p class="u-para u-para-6">也藏着高冷的一面</p>
			<p class="u-para u-para-6">
				这首有些小众的
				<span class="s-xsRed">《{{ minoritySongName }}》</span>
			</p>
			<p class="u-para u-para-6">
				在今年TA一共听了
				<span class="f-xs18 s-xsRed">{{ minoritySongPlayCount }}</span>
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
	mounted() {
		var that = this;
    	// 修改当前路由
    	this.$store.commit( "_update_curRouter", 6 );
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
        minoritySongName () {
            return this.userData.minoritySongName;
        },
        minoritySongPlayCount () {
            return this.userData.minoritySongPlayCount;
        }
    }
}
</script>

<style lang="scss" scoped >
.m-p06 {
    visibility: hidden;
    .mountain {
        position: absolute;
        bottom: 0;
        background-size: cover;
    }
    .mountain-7 {
        bottom: 125px;
        left: 50px;
        width: 66px;
        height: 28px;
        background-image: url(../../static/images/p06/mountain_7.png);
    }
    .mountain-6 {
        bottom: 70px;
        left: 90px;
        width: 144px;
        height: 67px;
        background-image: url(../../static/images/p06/mountain_6.png);
    }
    .mountain-5 {
        bottom: 30px;
        right: 0;
        width: 80px;
        height: 50px;
        background-image: url(../../static/images/p06/mountain_5.png);
    }
    .mountain-4 {
        left: 0;
        width: 375px;
        height: 92px;
        background-image: url(../../static/images/p06/mountain_4.png);
    }
    .mountain-3 {
        left: 0;
        width: 375px;
        height: 67px;
        background-image: url(../../static/images/p06/mountain_3.png);
    }
    .mountain-2 {
        left: 0;
        width: 100%;
        height: 0;
        padding-bottom: 23.6%;
        &:before {
    		content: '';
    		display: block;
    		position: absolute;
    		top: 0;
    		left: 0;
    		right: 0;
    		bottom: 0;
    		background-image: url(../../static/images/p06/mountain_2.png);
    		background-size: cover;
		}
    }
    .mountain-1 {
        right: 0;
        width: 218px;
        height: 38px;
        background-image: url(../../static/images/p06/mountain_1.png);
    }
    .lightbox {
        position: absolute;
        top: 4px;
        right: 6px;
    }
    .light {
        position: absolute;
        background-size: cover;
        opacity: 0;
        -webkit-transform: rotateZ(3deg);
        transform: rotateZ(3deg);
        -webkit-transform-origin: right top;
        transform-origin: right top;
    }
    .light-2 {
        top: 30px;
        right: 16px;
        width: 410px;
        height: 500px;
        background-image: url(../../static/images/p06/light_2.png);
    }
    .light-1 {
        top: 19px;
        right: 16px;
        width: 383px;
        height: 597px;
        background-image: url(../../static/images/p06/light_1.png);
    }
    .sun {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 62px;
        height: 62px;
        background-image: url(../../static/images/p06/sun.png);
        background-size: cover;
    }
    .content {
        position: absolute;
        top: 28.5%;
        width: 100%;
        opacity: 0;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .man {
        position: absolute;
        top: -35px;
        left: 20px;
        width: 12px;
        height: 40px;
        background-image: url(../../static/images/p06/man.png);
        background-size: cover;
    }
}
.m-p06.z-enter {
    visibility: visible;
    .light {
        opacity: 1;
        -webkit-transition: opacity .8s .8s;
        transition: opacity .8s .8s;
        -webkit-animation: 2s 0.8s linear infinite alternate sunlight-rotate;
        animation: 2s 0.8s linear infinite alternate sunlight-rotate;
    }
    .light-2 {
        -webkit-transition: opacity .8s 1s;
        transition: opacity .8s 1s;
        -webkit-animation-delay: 1.2s;
        animation-delay: 1.2s;
    }
    .sun {
        -webkit-transition-delay: .2s;
        transition-delay: .2s;
        -webkit-transition-duration: 1.5;
        transition-duration: 1.5;
    }
    .content {
        opacity: 1;
        -webkit-transition: opacity .3s .2s;
        transition: opacity .3s .2s;
    }
}
.m-p06.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@-webkit-keyframes sunlight-rotate {
  0% {
    -webkit-transform: rotateZ(2deg);
            transform: rotateZ(2deg);
  }
  100% {
    -webkit-transform: rotateZ(-2deg);
            transform: rotateZ(-2deg);
  }
}
@keyframes sunlight-rotate {
  0% {
    -webkit-transform: rotateZ(2deg);
            transform: rotateZ(2deg);
  }
  100% {
    -webkit-transform: rotateZ(-2deg);
            transform: rotateZ(-2deg);
  }
}
</style>