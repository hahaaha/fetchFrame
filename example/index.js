
const Koa = require('koa')
const cors = require('koa2-cors')
const koaBody = require('koa-body')
const get = require('./get/index')
const post = require('./post/index')
const timeout = require('./timeout/index')
const params = require('./params/index')

const app = new Koa()


app.use(
    cors({
        origin: function (ctx) { //设置允许来自指定域名请求
            const whiteList = ['http://expense.hahahah.me', 'http://localhost:8081', 'http://localhost:8080', 'http://course.hahahah.me', "http://127.0.0.1:5501", 'null']; //可跨域白名单
            if (ctx.header.origin) {
                let url = ctx.header.origin
                if (whiteList.includes(url)) {
                    return url //注意，这里域名末尾不能带/，否则不成功，所以在之前我把/通过substr干掉了
                }
            }
            return 'http://localhost:3000' //默认允许本地请求3000端口可跨域
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
)

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 2000 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
    }
}))


app.use(get.routes(), get.allowedMethods())
app.use(post.routes(), post.allowedMethods())
app.use(timeout.routes(), timeout.allowedMethods())
app.use(params.routes(), params.allowedMethods())

app.listen(3000);