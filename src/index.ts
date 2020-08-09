import mergeConfig from './util/mergeConfig'
import defaultConfig from './config'
import Fetch from './core/Fetch'
import { FetchConfig } from './types'
import { processHeaders } from './helper/headers'
import { buildURL } from './helper/url'
import { transformrequest } from './helper/data'
import { processMethod } from './helper/method'

let fetchFrame = function () { }

function transformHeaders(config: FetchConfig) {
    let { headers = {}, data } = config
    return processHeaders(headers, data)
}

function transformUrl(config: FetchConfig) {
    let { url, params } = config
    return buildURL(url, params)
}

function transformRequestData(config: FetchConfig) {
    return transformrequest(config.data)
}

function transfromMethod(config: FetchConfig) {
    return processMethod(config.method)
}

function processConfig(config: FetchConfig) {
    config.headers = transformHeaders(config)
    config.url = transformUrl(config)
    config.data = transformRequestData(config)
    config.method = transfromMethod(config)
}

fetchFrame.prototype.request =function (data) {
    let config = mergeConfig(defaultConfig, data)
    processConfig(config)
    return Fetch(config)
}
export default fetchFrame