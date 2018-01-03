<template>
	<div :class="{'m-p02 z-night':true, 'z-enter':nightClass.enter,'z-leave': nightClass.leave }">
		<div class="night night-2 f-animT100"></div>
		<div class="night night-1 f-animT100"></div>
		<div class="star star-1"></div>
		<div class="star star-2"></div>
		<div class="star star-3"></div>
		<div class="star star-4"></div>
		<div class="meteor meteor-1"></div>
		<div class="meteor meteor-2"></div>
	</div>
</template>

<script>
export default {
	name: "Night", 
	data () {
		return {
			nightClass: {
				enter: false,
				leave: false
			}
		}
	},
	created() {
		var that = this;
		setTimeout(function() {
		  that.nightClass.enter = true;
		}, 50);
	}	
}
</script>

<style lang="scss">
.m-p02 {
    visibility: hidden;

}
.f-animT100 {
    opacity: 0;
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
}
.z-enter {
	.f-animT100 {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: opacity .3s, -webkit-transform .8s;
    transition: opacity .3s, -webkit-transform .8s;
    transition: transform .8s, opacity .3s;
    transition: transform .8s, opacity .3s, -webkit-transform .8s;
	}	
}
.m-p02.z-night {
	.star-1 {
	    top: 8px;
	    left: 140px;
	}
	.star-2 {
	    top: 40px;
	    right: 165px;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    -webkit-animation-delay: .5s;
	    animation-delay: .5s;
	}
	.star-3 {
	    top: 65px;
	    right: 125px;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    -webkit-animation-delay: 1s;
	    animation-delay: 1s;
	}
	.star-4 {
	    top: 160px;
	    right: 60px;
	    -webkit-transform: scale(0.5);
	    transform: scale(0.5);
	    -webkit-animation-delay: 1.5s;
	    animation-delay: 1.5s;
	}
	.star {
    	position: absolute;
    	width: 7px;
    	height: 7px;
    	background-image: url(//s3.music.126.net/nact/s/client/images/year2017/common/star.png?95051d9…);
    	background-size: cover;
    	opacity: .2;
    	-webkit-animation: 2s ease-in infinite alternate glow;
    	animation: 2s ease-in infinite alternate glow;
	}
	.meteor {
	    position: absolute;
	    top: -19px;
	    width: 40px;
	    height: 19px;
	    background-image: url(//s3.music.126.net/nact/s/client/images/year2017/common/meteor.png?33473f4…);
	    background-size: cover;
	    -webkit-animation: 2s ease-in infinite meteor;
	    animation: 2s ease-in infinite meteor;
	}
	.meteor-1 {
	    top: -50px;
	    left: -40px;
	}
	.meteor-2 {
	    left: 30%;
	    -webkit-animation-delay: 1s;
	    animation-delay: 1s;
	}
}
.m-p02.z-enter {
    visibility: visible;
    .night-2 {
        padding-bottom: 85.2%;
        &:before {
            background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p02_night/night_2.png?750258f…);
        }
    }
    .night {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        &:before {
    		content: '';
    		display: block;
    		position: absolute;
    		top: 0;
    		left: 0;
    		right: 0;
    		bottom: 0;
    		background-size: cover;
		}
    }
    .night-1 {
        padding-bottom: 70.666667%;
        &:before {
            background-image: url(//s3.music.126.net/nact/s/client/images/year2017/p02_night/night_1.png?fc03c11…);
        }
    }
}
.m-p02.z-night.z-enter {
	.night {
    	-webkit-transition: opacity 3s, -webkit-transform 1.5s;
    	transition: opacity 3s, -webkit-transform 1.5s;
    	transition: transform 1.5s, opacity 3s;
    	transition: transform 1.5s, opacity 3s, -webkit-transform 1.5s;
	}
	.night-1 {
	    -webkit-transition-delay: .2s;
	    transition-delay: .2s;
	}
}
/* 流星坠落 */
@-webkit-keyframes meteor {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  40% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(400px, 190px);
            transform: translate(400px, 190px);
  }
}
@keyframes meteor {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  40% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(400px, 190px);
            transform: translate(400px, 190px);
  }
}
	
</style>