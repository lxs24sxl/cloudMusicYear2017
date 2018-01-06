<template>
	<div :class="{'m-p13 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
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
    	this.$store.commit( "_update_curRouter", 12 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	}
}
</script>

<style lang="scss" scoped >
.m-p13 {
    visibility: hidden;
}
.m-p13.z-enter {
	background: #eee;
    visibility: visible;
}
.m-p13.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
</style>