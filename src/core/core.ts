import { FetchConfig } from '../types/index'

export default function core(config: FetchConfig) {
    const controller = new AbortController()
    const signal = controller.signal

    let params: any = { signal }
    let promiseArray = []

    params.method = config.method
    params.body = config.data
    params.headers = config.headers


    if (config.timeout !== 0) {
        promiseArray.push(timeoutPromise(config.timeout,controller))
    }

    promiseArray.push(fetch(config.url, params))
    return Promise.race(promiseArray)
        .then((Response) => {
            console.log(Response)
            if (Response.ok) {
                return resposeByType(Response, config.responseType)
            } else {
                throw Response.statusText
            }
        })
}

function resposeByType(response, type) {
    return response[type]()
}

const timeoutPromise = (timeout,controller) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Response("", { status: 504, statusText: "timeout" }))
            controller.abort();
        }, timeout)
    })
}