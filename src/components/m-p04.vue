<template>
	<div :class="{'m-p04 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
		<div class="mountain f-animB100 mountain-1"></div>
		<div class="mountain f-animB100 mountain-2"></div>
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
	}
}
</script>

<style lang="scss" scoped >
.m-p04 {
    visibility: hidden;
}
.m-p04.z-enter {
	background: red;
    visibility: visible;
}
.m-p04.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
</style>