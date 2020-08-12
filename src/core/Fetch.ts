import { request } from './request'
import { FetchConfig, Method } from '../types'
import mergeConfig from '../util/mergeConfig'

export default function Fetch() { }

Fetch.prototype.request = request

Fetch.prototype.get = function (url: string, config: FetchConfig) {
    return _requestMethodWithoutData("get", url, config)
}

Fetch.prototype.delete = function (url: string, config: FetchConfig) {
    return _requestMethodWithoutData("delete", url, config)
}

Fetch.prototype.post = function (url: string, config: FetchConfig, data: any) {
    return _requestMethodWithData("post", url, config, data)
}

Fetch.prototype.patch = function (url: string, config: FetchConfig, data: any) {
    return _requestMethodWithData("patch", url, config, data)
}

Fetch.prototype.put = function (url: string, config: FetchConfig, data: any) {
    return _requestMethodWithData("patch", url, config, data)
}


function _requestMethodWithoutData(method: Method, url: string, config?: FetchConfig) {
    return request(mergeConfig(config || {}, { url, method }))
}

function _requestMethodWithData(method: Method, url: string, config?: FetchConfig, data?: any) {
    return request(mergeConfig(config || {}, { url, method, data }))
}