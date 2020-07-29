/**
 * merge a to b 
 * 
 */
function merge(a,b) {
    for(const key in a) {
        if(!b.hasOwnProperty(key)) {
            b[key] = a[key]
        } 
    }
    return b
}

export default merge