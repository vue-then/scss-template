<template>
	<div>
		<div id="settlement-account-virtual-keyboard">
			<div class="key-container" v-show="isShow">
				<div class="error-down" @click="hideBoard">
					<span></span>
				</div>
				<div class="row">
					<p class="num-item" @click="getValue('1')">1</p>
					<p class="num-item" @click="getValue('2')">2</p>
					<p class="num-item" @click="getValue('3')">3</p>
				</div>
				<div class="row">
					<p class="num-item" @click="getValue('4')">4</p>
					<p class="num-item" @click="getValue('5')">5</p>
					<p class="num-item" @click="getValue('6')">6</p>
				</div>
				<div class="row">
					<p class="num-item" @click="getValue('7')">7</p>
					<p class="num-item" @click="getValue('8')">8</p>
					<p class="num-item" @click="getValue('9')">9</p>
				</div>
				<div class="row">
					<p class="num-item gray" @click="getValue('.')">.</p>
					<p class="num-item" @click="getValue('0')">0</p>
					<div class="delete gray" id="cross" @click="deleteElement()">&#215;</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		// refObject: {
		//   type: Object,
		//   default() {
		//     return {};
		//   },
		// },
		// isShowBoard: {
		//   type: Boolean,
		//   default: false,
		// }
	},
	data() {
		return {
			isShow: false,
			refObject: {},
		};
	},
	methods: {
		deleteElement() {
			this.refObject.deleteElement();
		},
		hideBoard() {
			this.isShow = false;
		},
		showKeyBoard() {
			this.isShow = true;
		},
		getValue(val) {
			this.refObject.getValue(val);
		},
	},
	mounted() {
		// var pElements = this.$el.getElementsByClassName('num-item');
		// var elements = Array.prototype.slice.call(pElements);
		// var value = '';
		// elements.forEach((val, index) => {
		//   val.addEventListener('click', function(event) {
		//     this.value = event.currentTarget.innerText;
		//     this.$emit('getInputItem', this.value);
		//   });
		// });
		this.$on("getInputVm", function (obj) {
			this.refObject = obj;
			this.isShow = true;
		});
	},
};
</script>
<style lang="scss" scoped>
#settlement-account-virtual-keyboard {
	user-select: none;
}

#settlement-account-virtual-keyboard .key-container {
	background-color: #ffffff;
	position: fixed;
	z-index: 999;
	bottom: 0;
	right: -2px;
	width: 100%;
	font-size: 27px;
	color: #333333;
	height: 5.89333333rem;
	border-top: 1px solid #d1d5db;
}

[data-dpr="2"] #settlement-account-virtual-keyboard .key-container {
	font-size: 54px;
}

[data-dpr="2.5"] #settlement-account-virtual-keyboard .key-container {
	font-size: 68px;
}

[data-dpr="2.75"] #settlement-account-virtual-keyboard .key-container {
	font-size: 74px;
}

[data-dpr="3"] #settlement-account-virtual-keyboard .key-container {
	font-size: 81px;
}

[data-dpr="4"] #settlement-account-virtual-keyboard .key-container {
	font-size: 108px;
}

#settlement-account-virtual-keyboard .key-container .error-down {
	margin-left: -0.02rem;
	margin-right: -0.02rem;
	height: 0.8rem;
	text-align: center;
}

#settlement-account-virtual-keyboard .key-container .error-down span {
	display: inline-block;
	border-style: none solid solid none;
	border-width: 1px;
	border-color: #d1d5db;
	height: 0.4rem;
	width: 0.4rem;
	position: relative;
	bottom: 0.26666667rem;
	transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
}

#settlement-account-virtual-keyboard .key-container .gray {
	background-color: #d1d5db;
}

#settlement-account-virtual-keyboard .key-container .row {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-align-content: flex-start;
	align-content: flex-start;
	margin-left: -0.02rem;
	margin-right: -0.02rem;
}

#settlement-account-virtual-keyboard .key-container .row .num-item,
#settlement-account-virtual-keyboard .key-container .row .delete {
	box-sizing: border-box;
	float: left;
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
	border-top: 0.5px solid #d1d5db;
	border-right: 0.5px solid #d1d5db;
	margin: 0;
	text-align: center;
	height: 1.26666667rem;
	width: 3.33333333rem;
	line-height: 1.26666667rem;
}
</style>