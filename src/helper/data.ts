import {isPlainObject} from '../../src/util/index'

export function transformrequest(data:any):any {
    if(isPlainObject(data)) {
        return data = JSON.stringify(data)
    }
    return data
}