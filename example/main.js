import fetchFrame from '../src/index'


fetchFrame({
    url: "http://localhost:5000/users/login",
    method: "post",
    timeout: 100,
    data: {
        userName: "admin1",
        password: "admin"
    }
}).then((res) => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

fetchFrame.post("http://localhost:5000/users/login", {
    timeout: 0,
    data: {
        userName: "admin1",
        password: "admin"
    }
}).then((res) => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

fetchFrame.request({
    url: "http://localhost:5000/users",
    method: "get",
    params: {
        a: new Date(),
    }
}).then(res => {
    console.log(res)
})

fetchFrame.get("http://localhost:5000/users", {
    method: "get",
    params: {
        a: new Date(),
    }
}).then(res => {
    console.log(res)
})
