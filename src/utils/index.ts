import to from 'await-to-js';
import { AxiosRequestConfig } from 'axios';
import service from './axios';
export * from './axios';
export { isDev, request, toLine, toReject, toResolve };
export type { IResponseType };

interface IResponseType<P = object | Array<object> | null> {
    code?: number;
    // status: number;
    msg: string;
    data: P;
}

const isDev = () => import.meta.env.MODE === 'development';

function request<T, U = Error>(
    config: AxiosRequestConfig,
): Promise<[U, undefined] | [null, IResponseType<T>]> {
    return to<IResponseType<T>, U>(service(config));
}

const toLine = (name: string) => name.replace(/([A-Z])/g, '-$1').toLowerCase();

function toReject<U>(error: U): Promise<[U, undefined]> {
    return Promise.reject([error, undefined]);
}
function toResolve<T>(res: T): Promise<[null, T]> {
    return Promise.resolve([null, res]);
}
