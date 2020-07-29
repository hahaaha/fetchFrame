import mergeConfig from './util/mergeConfig'
import defaultConfig from './config'

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



fetchFrame.prototype.req = function (data) {
    let config = mergeConfig(defaultConfig, data)
    let params = { signal: this.signal }
    let url = ""
    let promiseArray = []
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    if (config.url) {
        url = config.url
    }

    if (config.data) {
        params.body = JSON.stringify(config.data)
    }

    if (config.method) {
        params.method = config.method.toUpperCase()
    }
    if (config.timeout !== 0) {
        promiseArray.push(this.timeoutPromise(config.timeout))
    }

    params.headers = headers
    console.log(params)
    promiseArray.push(fetch(url, params))
    return Promise.race(promiseArray)
        .then((Response) => {
            console.log(Response)
            if (Response.status === 504) {
                throw "timeout"
            } else {
                return Response.json()
            }
        })
}
export default fetchFrame