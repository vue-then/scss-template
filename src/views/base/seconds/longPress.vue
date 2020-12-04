<template>
	<div>
		<el-button
			type="primary"
			@touchstart.native="start"
			@touchmove.native="move"
			@touchend.native="end"
		>测试按钮</el-button>
	</div>
</template>

<script>
export default {
	name: "Bubble",
	data() {
		return {
			longClick: 0, // 长按标志
			timeOutEvent: 0, // 计时器
		};
	},
	methods: {
		start: function () {
			console.log("----start----");
			var that = this;
			this.longClick = 0; // 初始化
			this.timeOutEvent = setTimeout(function () {
				that.longClick = 1; //  长按标志位
				// 此处为长按事件
				console.log("长按事件");
				that.$message.success("长按事件");
			}, 500);
		},
		move: function (e) {
			console.log("move");
			clearTimeout(this.timeOutEvent); // 清除计时器
			this.timeOutEvent = 0; // 清除标志位
			e.preventDefault(); // 阻止其他点击事件
		},
		end: function () {
			console.log("----end----");
			clearTimeout(this.timeOutEvent); // 清除计时器
			if (this.timeOutEvent != 0 && this.longClick == 0) {
				// 判断是否非长按事件
				//此处为点击事件
				console.log("点击事件");
			}
			return false;
		},
	},
};
</script>
<style >
</style>
