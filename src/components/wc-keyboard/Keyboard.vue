<style scoped lang="scss">
	.keyboard {
		height: 250px;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: white;
		z-index: 999;
		.done {
			height: 50px;
			background: #f9f9f9;
			border: .5px solid #d6d6d6;
			border-right: none;
			border-left: none;
			padding-right: 10px;
			border-bottom: none;
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.text {
				color: #007eff;
			}
		}
		.list {
			height: 200px;
			.key:active {
				background: #e2e2e2;
			}
			.key {
				height: 25%;
				width: 25%;
				float: left;
				border-right: .5px solid #d6d6d6;
				border-top: .5px solid #d6d6d6;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30px;
			}
			.key:nth-child(4n) {
				border-right: none;
			}
		}
	}
	.del {
		font-size: 28px;
	}
	.animated {
		animation-duration: .2s;
		animation-fill-mode: both;
	}
	@keyframes slideInDown {
		from {
			transform: translate3d(0, 0, 0);
			visibility: visible;
		}
		to {
			transform: translate3d(0, 100%, 0);
			display: none;
		}
	}
	@keyframes slideInUp {
		from {
			transform: translate3d(0, 100%, 0);
			visibility: visible;
		}
		to {
			transform: translate3d(0, 0, 0);
		}
	}
	.slide-enter-active {
		animation-name: slideInUp;
	}
	.slide-leave-active {
		animation-name: slideInDown;
	}
</style>
<template>
	<transition name="slide">
		<div class="keyboard animated" v-show="show" @touchstart.stop.prevent="fn">
			<!-- 完成 按钮-->
			<div class="done">
				<p class="text" @touchstart="complete">完成</p>
			</div>
			<!-- 键盘区域 -->
			<!-- <div class="key dot" 
					@touchstart="typing('.')">
					<i class="iconfont icon-dot"></i>
				</div> -->
			<div class="list">
				<!-- <div class="key" @touchstart="typing('1')">大</div>
				<div class="key" @touchstart="typing('1')">1</div>
				<div class="key" @touchstart="typing('2')">2</div>
				<div class="key" @touchstart="typing('3')">3</div>

				<div class="key" @touchstart="typing('1')">小</div>
				<div class="key" @touchstart="typing('4')">4</div>
				<div class="key" @touchstart="typing('5')">5</div>
				<div class="key" @touchstart="typing('6')">6</div>

				<div class="key" @touchstart="typing('1')">单</div>
				<div class="key" @touchstart="typing('7')">7</div>
				<div class="key" @touchstart="typing('8')">8</div>
				<div class="key" @touchstart="typing('9')">9</div>

				<div class="key" @touchstart="typing('1')">双</div>
				<div class="key" @touchstart="typing('/')">/</div>
				<div class="key" @touchstart="typing('0')">0</div> -->
				<div class="key" v-for="(item,idx) in boardArr" @touchstart="typing(boardKey[idx])" :key="item">{{item}}</div>
				
				<div class="key"
					@touchstart="start"
					@touchmove="move"
					@touchend="end"
					>
					<i class="iconfont icon-keyboard-delete del"></i>
				</div>
			</div>

		</div>
	</transition>
</template>
<script>	
	export default {
		props: ['show'],
		data() {
			return {
				longClick: 0, // 长按标志
				timeOutEvent: 0, // 计时器
				boardOne: '大,1,2,3,小,4,5,6,单,7,8,9,双,/,0',
				boardOneKey: '大,1,2,3,小,4,5,6,单,7,8,9,双,/,0',
				// boardArr: [],
			}
		},
		computed: {
			boardArr(){
				return this.boardOne.split(",")
			},
			boardKey(){
				return this.boardOneKey.split(",")
			}
		},
		mounted() {
			// this.boardOneKey = this.boardOneKey.split(",");
		},
		methods: {
			/*防止点击完成按钮左边的空白区域收起键盘*/
			fn () {},
			/*输入*/
			typing (val) {
				this.$emit('typing', val);
			},
			/*点击完成*/
			complete () {
				this.$emit('complete');
			},
			start: function () {
				console.log("----start----");
				var that = this;
				this.longClick = 0; // 初始化
				this.timeOutEvent = setTimeout(function () {
					that.longClick = 1; //  长按标志位
					// 此处为长按事件
					console.log("长按事件");
					that.typing(-1) //长按清空
					// that.$message.success("长按事件");
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
					this.typing('')
				}
				return false;
			},	
		}
	}
</script>