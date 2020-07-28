import fetchFrame from './index.js'

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

b.req({
    url: "http://localhost:5000/users/login",
    method: "post",
    timeout: 1000,
    data: {
        userName: "admin1",
        password: "admin"
    }
}).then((res) => {
    console.log(res)
})