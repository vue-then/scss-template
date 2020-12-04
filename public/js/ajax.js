function Ajax() {}

Ajax.prototype = {
	ajax: function (type, url, data, timeout) {
		return new Promise(function (resolve, reject) {
			$.ajax({
				type: type,
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
					Accept: "application/json",
					platform: "pc"
					// "Access-Control-Allow-Origin": "*"
				},
				url: url,
				data: data||null,
				timeout: timeout || 100000,
				success: function (resp) {
					resolve(resp);
				},
				error: function (resp) {
					reject(resp);
				},
			});
		});
	},
	get: function (url) {
		var _this = this;
		// data = data ? JSON.stringify(data) : "";
		return new Promise(function (resolve, reject) {
			_this
				.ajax("GET", url)
				.then(function (res) {
                    resolve(res);
					// if (
					// 	url == "/new/platform/type" ||
					// 	url == "/new/platform/name"
					// ) {
					// 	resolve(res);
					// } else {
					// 	$(".pk-loading").fadeOut(200, function () {
					// 		resolve(res);
					// 	});
                    // }
				})
				.catch(function (error) {
                    console.log("err: ", error);
					reject(error);
				});
		});
	},
};
var ajax = new Ajax();
