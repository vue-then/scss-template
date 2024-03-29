// onmessage = (e) => {
// 	console.log("worker 接受到的message e--", e);
// 	for (let index = 0; index < 1000; index++) {
//         console.log(234543);
// 		if (index === 1000 - 1) {
// 			postMessage({
// 				text: "计算结束了-发送消息",
// 				a: "123456",
// 				b: "bbbb",
// 				c: index,
// 			});
// 		}
// 	}
// };

addEventListener("message", function(res) {
	// 子线程向主线程中发生消息
	// 计算斐波那契数列,这个数列从第3项开始，每一项都等于前两项之和。
    let {data} = res
	if (data === "setIt") {
		// 开始运算
		console.dir("收到主线程消息setIt，开始运算");
		function recurFib(n) {
			if (n < 2) {
				// 主动关闭子线程
				// this.close()
				return n;
			} else {
				return recurFib(n - 1) + recurFib(n - 2);
			}
		}
		console.time("运算时间：");
		// 计算n为40的结果
		var count = recurFib(40);
		console.timeEnd("运算时间：");
		// 向主线程发送消息
		console.info("运算完毕,发送消息给主线程！");
		this.postMessage({
			title: "setIt",
			text: count + "dddddd-fee"
		});
	}else if (data === "getIt") {
        console.dir("收到主线程消息getIt，开始运算");
        this.postMessage({
            title: "getIt",
            text: "计算结束了-发送消息",
            a: "123456",
            b: "bbbb",
            c: 'cindex',
        });
    }
});