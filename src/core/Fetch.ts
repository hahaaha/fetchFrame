import { FetchConfig } from '../types/index'
const controller = new AbortController()
const signal = controller.signal
const timeoutPromise = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Response("timeout", { status: 504, statusText: "timeout " }))
            controller.abort();
        }, timeout)
    })
}

export default function Fetch(config: FetchConfig) {
    // let config = mergeConfig(defaultConfig, data)
    let params:any = { signal }
    let url: any = ""
    let promiseArray = []

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
        promiseArray.push(timeoutPromise(config.timeout))
    }

    params.headers = config.headers
    console.log(params)
    promiseArray.push(fetch(url, params))
    return Promise.race(promiseArray)
        .then((Response) => {
            console.log(Response)
            if (Response.status === 504) {
                throw "timeout"
            } else {
                return resposeByType(Response,config.responseType)
            }
        })
}

function resposeByType(response,type) {
    return response[type]()
}