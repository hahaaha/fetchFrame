import { isPlainObject, isDate } from '../util/index'

function encode(val: string) {
    return encodeURIComponent(val).
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
}

function delHash(url: string) {
    let index = url.indexOf("#")
    if (index !== -1) {
        url = url.slice(0, index)
    }

    return url
}

export function buildURL(url: string, params?: any) {
    if (!params) return url

    // del url hash section
    url = delHash(url)

    let urlParams = ""

    for (let key in params) {
        let val = params[key]
        if (val === null || val === undefined) {
            continue
        }

        if (Array.isArray(val)) {
            val.forEach(v => {
                urlParams = `${urlParams}${urlParams ? "&" : ""}${encode(key)}[]=${encode(v)}`
            })
            continue
        }

        if (isDate(val)) {
            val = val.toISOString()
        }
        if (isPlainObject(val)) {
            val = JSON.stringify(val)
        }
        urlParams = `${urlParams}${urlParams ? "&" : ""}${encode(key)}=${encode(val)}`
    }

    return `${url}${urlParams ? "?" : ""}${urlParams}`
}