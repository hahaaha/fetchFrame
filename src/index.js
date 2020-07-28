let fetchFrame = function () {
    this.controller = new AbortController()
    this.signal = this.controller.signal
    this.timeoutPromise = (timeout) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(new Response("timeout", { status: 504, statusText: "timeout " }))
                this.controller.abort();
            }, timeout)
        })
    }
}



fetchFrame.prototype.req = function (data) {
    let params = { signal: this.signal }
    let url = ""
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    if (data.url) {
        url = data.url
    }

    if (data.data) {
        params.body = JSON.stringify(data.data)
    }

    if (data.method) {
        params.method = data.method.toUpperCase()
    }

    params.headers = headers
    console.log(params)
    return Promise.race([this.timeoutPromise(data.timeout), fetch(url, params)])
        .then((Response) => {
            console.log(Response)
            if(Response.status === 504) {
                throw "timeout"
            } else {
                return Response.json()
            }
        })
}
export default fetchFrame