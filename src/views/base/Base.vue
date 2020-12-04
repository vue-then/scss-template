<template>
	<div>
		<div class="baseJS">baseJS</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			fronzenObj: {
				a: 1,
				b: 2
			}
		};
	},
	mounted() {
		this.testFrozen();
		this.versionCompase();
		this.objValReturn()
	},
	methods: {
		deepFreeze(obj) {
			Object.keys(obj).forEach(prop => {
				if (
					typeof obj[prop] === "object" &&
					!Object.isFrozen(obj[prop])
				) {
					this.deepFreeze(obj[prop]);
				}
			});
			return Object.freeze(obj);
		},
		testFrozen() {
			// const foo = this.deepFreeze([1, [2, 3]]);
			// foo[0] = 3; //  Cannot assign to read only property '0' of object '[object Array]'
			// foo[1][0] = 4;
			// vue 中无效
			// Object.freeze(this.fronzenObj)
			// this.fronzenObj["a"]=2333
			// console.log(this.fronzenObj,'fronzenObj')
			// const fronzenObj = {
			//     a:1,
			//     b:2
			// }
			// Object.freeze(fronzenObj)
			// fronzenObj["a"]=2333
			// // Throws an error in strict mode
			// console.log(fronzenObj,'fronzenObjs')
			// const obj = {
			//     z: 42
			// };
			// Object.freeze(obj);
			// obj.z= 33;
			// // Throws an error in strict mode
			// console.log(obj.z);
			// // expected output: 42
		},
		versionCompase() {
			function comparison(version1, version2) {
				console.time("运行时长：");
				// 参数的类型
				const types = ["string", "number"];

				// 第一个参数的类型
				const type1 = typeof version1;

				// 第二个参数的类型
				const type2 = typeof version2;

				// 参数不是字符串或数字的情况下返回0
				if (!types.includes(type1) || !types.includes(type2)) return 0;

				// 如果version1是number就将其转成字符串
				const ver1 =
					type1 === "number" ? version1.toString() : version1;

				// 如果version2是number就将其转成字符串
				const ver2 = type2 == "number" ? version2.toString() : version2;

				// 将version1变成数组
				const versionArr1 = ver1.split(".");

				// 将version2变成数组
				const versionArr2 = ver2.split(".");

				// 获取长度最长的数组的length
				const len = Math.max(versionArr1.length, versionArr2.length);

				// 循环对比版本号，如果前一位比较不出大小就继续向后对比
				for (let i = 0; i < len; i++) {
					// 如果长度不一致将自动补0 同时将字符串转为数字
					const version1 = Number(versionArr1[i]) || 0;
					const version2 = Number(versionArr2[i]) || 0;

					if (version1 > version2) {
						console.timeEnd("运行时长：");
						// 如果version1大就返回1
						return 1;
					} else if (version1 < version2) {
						console.timeEnd("运行时长：");
						// 如果version2大就返回-1
						return -1;
					} else {
						// 如果比较到最后就返回0，否则继续比较
						if (i + 1 === len) {
							console.timeEnd("运行时长：");
							return 0;
						} else {
							continue;
						}
					}
				}
			}
			function compareVersion(version1, version2) {
				console.time("运行时长：");
				// 将传进的版本号切割为数组
				const ver1 = version1.split(".");
				const ver2 = version2.split(".");

				// 将数组相加中间补0最后变成一个数字(字符串)
				let len1 = ver1.reduce((sum, item) => sum + "0" + item, "");
				let len2 = ver2.reduce((sum, item) => sum + "0" + item, "");

				// 得出两个数字(字符串)长度的差值
				const len = len1.length - len2.length;

				// 如果差值大于0
				if (len > 0) {
					// 第二个数字就乘以十的差值次方
					len2 = Number(len2) * Math.pow(10, Math.abs(len));
				} else {
					// 否则第一个数字就乘以十的差值次方
					len1 = Number(len1) * Math.pow(10, Math.abs(len));
				}

				if (len1 > len2) {
					console.timeEnd("运行时长：");
					// 如果第一个数比第二个数大，返回1
					return 1;
				} else if (len1 < len2) {
					console.timeEnd("运行时长：");
					// 如果第一个数比第二个数小，返回-1
					return -1;
				} else {
					console.timeEnd("运行时长：");
					// 否则返回0
					return 0;
				}
			}
			comparison("1.2.3.4.5.6.7.8.9.0.0.5", "0.0.0.0.0.0.0.0.1.2.3.3.3");
			compareVersion("1.2.3.4.5.6.7.8.9.0.0.5", "0.0.0.0.0.0.1.2.3.3.3");
			// compare("1.2.3.4.5.6.7.8.9.0.0.5", "0.0.0.0.0.0.1.2.3.3.3");
			let isEqual = comparison("2.0", "11.0");
			let isEquals = compareVersion("2.0", "11.0");
            // compare("2.0", "11.0");
            let pro = comparison('1.11.0', '1.9.9');
			let pros = compareVersion('1.11.0', '1.9.9');

			let com = comparison('1.11.0', '1.11.0');
			let coms = compareVersion('1.11.0', '1.11.0');
			console.log(isEqual,isEquals,pro,pros,com,coms) // -1 1 1 -1 0 0 
		},
		objValReturn(){
			const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
			forOwn({ foo: 'bar', a: 1 }, v => console.log(v));  // bar 1
		}
	}
};
</script>