var ps = require('process');
var fs = require('fs')
var httpsURL = '$HOME/Documents/code-view/webrtc-base-code/node_https/makeCA/cert'

module.exports = {
	publicPath: "./",
	devServer: {
		port: 8081,
		// https: true,
		// key: fs.readFileSync(`${httpsURL}/key.key`),
		// cert: fs.readFileSync(`${httpsURL}/key.crt`),
		// ca: fs.readFileSync(`${httpsURL}/cert.pem`),
		proxy: {
			"/api": {
				target: "http://127.0.0.1:8888", //接口地址
				ws: false,
				changeOrigin: true, //是否跨域
			}
		},
		disableHostCheck: true,
	},
	outputDir: undefined,
	assetsDir: undefined,
	runtimeCompiler: undefined,
	productionSourceMap: false,
	parallel: undefined,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/common.scss"; `, //公共scss
			},
		},
	},
};