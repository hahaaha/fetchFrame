import fetchFrame from './index.js'

let b = new fetchFrame()
b.req({
    url: "http://localhost:5000/tag",
    method: "post",
    data: {
        name: "标签d"
    }
}).then((res) => {
    console.log(res)
})