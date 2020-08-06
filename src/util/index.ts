export function isPlainObject(val: any) {
    return toString.call(val) === "[object Object]"
}

export function isDate(val: any) {
    return toString.call(val) === "[object Date]"
}