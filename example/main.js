import fetchFrame from '../src/index'

let b = new fetchFrame()
// b.req({
//     url: "http://localhost:5000/role/5ee3107a451977654df67399",
//     method: "patch",
//     data: {
//         name: "tupian",
//     }
// }).then((res) => {
//     console.log(res)
// })

// b.req({
//     url: "http://localhost:5000/role/5ee3107a451977654df67399",
//     method: "delete"
// }).then((res) => {
//     console.log(res)
// })

b.request({
    url: "http://localhost:5000/users/login",
    method: "post",
    timeout: 0,
    data: {
        userName: "admin1",
        password: "admin"
    }
}).then((res) => {
    console.log(res)
})

b.request({
    url: "http://localhost:5000/users",
    method: "get",
    params: {
        a: new Date()
    }
})

b.request({
    url: "http://localhost:5000/users#ccc",
    method: "get",
    params: {
        d: ["bb","cc"],
        c: "aa",
        e: undefined,
        a: { a: 1, b: "+@" },
        b: "@ b",
    }
})