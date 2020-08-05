import mergeConfig from './util/mergeConfig'
import defaultConfig from './config'
import Fetch from './core/Fetch'
import { FetchConfig } from './types'
import processHeaders from './helper/headers'
import { buildURL } from './helper/url'

let fetchFrame = function () { }

function transformHeaders(config: FetchConfig) {
    let { headers = {}, data } = config
    console.log(buildURL(config.url,{a:1,b:1}))
    return processHeaders(headers, data)
}

function processConfig(config: FetchConfig) {
    config.headers = transformHeaders(config)

}

fetchFrame.prototype.request = function (data) {
    let config = mergeConfig(defaultConfig, data)
    processConfig(config)
    return Fetch(config)
}
export default fetchFrame