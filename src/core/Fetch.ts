import { FetchConfig } from '../types/index'
const controller = new AbortController()
const signal = controller.signal
const timeoutPromise = (timeout) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Response("timeout", { status: 504, statusText: "timeout " }))
            controller.abort();
        }, timeout)
    })
}

export default function Fetch(config: FetchConfig) {
    let params:any = { signal }
    let promiseArray = []

    if (config.method) {
        params.method = config.method.toUpperCase()
    }
    if (config.timeout !== 0) {
        promiseArray.push(timeoutPromise(config.timeout))
    }

    params.headers = config.headers

    promiseArray.push(fetch(config.url, params))
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