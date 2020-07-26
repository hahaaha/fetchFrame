let fetchFrame = function () {

}

fetchFrame.prototype.req = function (data) {
    let params = {}
    let url = ""
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    if(data.url) {
        url = data.url
    }

    if(data.data) {
        params.body = JSON.stringify(data.data)
    }

    if(data.method) {
        params.method = data.method
    }

    // for (let key in data) {
    //     if (key === "url") {
    //         url = data[key]
    //     } else if (key === "data") {
    //         params.body = JSON.stringify(data[key])
    //     } else {
    //         params[key] = data[key]
    //     }
    // }
    params.headers = headers
    console.log(params)
    return fetch(url, params).then((response) => {
        return response.json()
    })
}
export default fetchFrame