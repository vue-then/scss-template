import axios from 'axios';
import Vue from "vue";
import router from "../router";
import { Loading } from "element-ui";
let loading; //定义loading变量

function startLoading() {
	//使用Element loading-start 方法
	loading = Loading.service({
		lock: true,
		text: "加载中……",
		background: "rgba(0, 0, 0, 0.7)",
	});
}
function endLoading() {
	//使用Element loading-close 方法
	loading.close();
}
//那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
	if (needLoadingRequestCount === 0) {
		startLoading();
	}
	needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
	if (needLoadingRequestCount <= 0) return;
	needLoadingRequestCount--;
	if (needLoadingRequestCount === 0) {
		endLoading();
	}
}

const vue = new Vue({
	router,
});
let baseURL = "/gmap";

axios.interceptors.request.use(
    config => {
        config.baseURL = baseURL;
        config.timeout = 60 * 1000; // Timeout
        showFullScreenLoading();
        return config
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

axios.interceptors.response.use(
    response => {
        let code = response.data.code;
        // console.log(response, 'code')
        if (code === 404) {
            // sessionStorage.removeItem('token');
            vue.$router.push({
                name: '404'
            });
        }
        if (code === 1008) {
            vue.$router.push({
                name: 'login'
            });
        }
        tryHideFullScreenLoading()
        if (response.status === 200) {
			return response.data;
		}
    },
    error => {
        console.log(error);
        let status = error.response.status;
		switch (status) {
			case 403:
				vue.$router.push({
					name: "403",
				});
				break;
			case 404:
				vue.$router.push({
					name: "404s",
				});
				break;
			default:
				vue.$message.error("服务器连接异常");
				vue.$router.push({
					name: "login",
				});
				break;
		}
		tryHideFullScreenLoading();
		return Promise.reject();
    }
);

const post = (url, data, isUploadFile = false) => {
    let TOKEN = localStorage.getItem("token")
    let lang = localStorage.getItem("local") || "zh";
    return axios({
        method: 'post',
        url,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8;',
            'sid': TOKEN,
            'lang': lang
        },
        data: isUploadFile ? data : JSON.stringify(data),
    }).then(response => {
        return response;
    })
}
const get = (url) => {
	return axios({
		method: "get",
		url,
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json;charset=utf-8;",
		},
	}).then((response) => {
		return response;
	});
};
//上传文件
const form = (url, data) => {
    return post(url, data, true);
}

export default {
	post,
	form,
	get
};
