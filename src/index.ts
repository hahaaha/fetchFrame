import mergeConfig from './util/mergeConfig'
import defaultConfig from './config'
import Fetch from './core/Fetch'

let fetchFrame = function () {
    this.controller = new AbortController()
    this.signal = this.controller.signal
    this.timeoutPromise = (timeout) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(new Response("timeout", { status: 504, statusText: "timeout " }))
                this.controller.abort();
            }, timeout)
        })
    }
}



fetchFrame.prototype.request = function (data) {
    let config = mergeConfig(defaultConfig, data)
    return Fetch(config)
}
export default fetchFrame