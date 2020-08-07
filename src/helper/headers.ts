import { isPlainObject } from '../util/index'

function normalizeHeaderName(headers,normalizedName) {
    if (!headers) {
        return
      }
      Object.keys(headers).forEach(name => {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = headers[name]
          delete headers[name]
        }
      })
}

export function processHeaders(headers: any, data: any) {
    normalizeHeaderName(headers,"Content-Type")
    if (isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8'
        }
    }
    return headers
}