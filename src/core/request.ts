import mergeConfig from '../util/mergeConfig'
import defaultConfig from '../config'
import core from './core'
import { FetchConfig } from '../types'
import { processHeaders } from '../helper/headers'
import { buildURL } from '../helper/url'
import { transformrequest } from '../helper/data'
import { processMethod } from '../helper/method'

export function request(config: FetchConfig) {
    config = mergeConfig(defaultConfig, config)
    processConfig(config)
    return core(config)
}

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