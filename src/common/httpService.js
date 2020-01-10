import axios from 'axios';

import baseUrl from '../configs/apiUrl';

const instance = axios.create({
    baseURL: `${baseUrl}`,
    timeout: 3000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'foobar',
        'charset': "utf-8"
    }
});

//请求拦截处理
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export const HttpService = async (api, params) => {
    return new Promise((resolve, reject) => {
        instance.post(api, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}