<template>
	<div :class="{'m-p06 f-page': true, 'z-enter': boxClass.enter, 'z-leave': boxClass.leave }">
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
    	this.$store.commit( "_update_curRouter", 6 );
    	// 进入动画
		setTimeout(function() {
			that.boxClass.enter = true;
		}, 300);
	}
}
</script>

<style lang="scss" scoped >
.m-p06 {
    visibility: hidden;
}
.m-p06.z-enter {
	background: yellow;
    visibility: visible;
}
.m-p06.z-leave {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
</style>