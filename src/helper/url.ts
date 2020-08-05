import config from "../config"

export function buildURL(url: string, params?: any) {
    if(!params) return url

    let end = ""

    for (let key in params) {
        end = `${end}${end?"&":""}${key}=${params[key]}`
    }

    return `${url}?${end}`
}