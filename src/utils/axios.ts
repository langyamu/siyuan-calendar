// import { auth_token } from '@/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { isDev } from '.';

const service = axios.create(); // Request interceptors

service.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        // 开发环境下 验证 token
        if (isDev() && config['headers'] && !config.headers['Authorization']) {
            config.headers['Authorization'] = import.meta.env.VITE_AUTH_TOKEN;
        }
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
); // Response interceptors

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        const res = response.data;
        const url = response.config.url;
        const code = res.code || (url === '/api/file/getFile' && !res ? -1 : 0);

        // console.log('response::', response);

        if (code !== 0) {
            return Promise.reject(new Error(res.msg));
        }
        // do something
        return res;
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    },
);

export default service;
