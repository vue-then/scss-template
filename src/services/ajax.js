'use strict'

import axios from 'axios';
import Vue from 'vue';
import router from '../router';
const vue = new Vue({
    router
});

axios.interceptors.request.use(config => {
    config.baseURL = "/api"; //配合proxy代理使用
    config.timeout = 60 * 1000; // Timeout
    return config
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    //code状态判断
    // sessionStorage.removeItem('token');
    // vue.$router.push({
    //     name: 'login'
    // });
    return response;
}, error => {
    return Promise.resolve(error.response)
});


export default {
    post(url, data) {
        const TOKEN = sessionStorage.getItem("token");
        return axios({
            method: 'post',
            url,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8;',
                'token': TOKEN
            },
            data: JSON.stringify(data),
        }).then(response => {
            return response;
        }).catch(err => {
            console.log(err);
        })
    },
    get(url, data) {
        let TOKEN = sessionStorage.getItem("token");
        return axios({
            method: 'get',
            url,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8;',
                'token': TOKEN
            },
            data: JSON.stringify(data),
        }).then(response => {
            return response;
        }).catch(err => {
            console.log(err);
        })
    }
}