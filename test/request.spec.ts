import fetchFrame from '../src/index'
import { getAjaxRequest } from './helper'
const http = require('http')
let server = http.createServer()

describe('requests', () => {
    beforeEach(() => {
        jasmine.Ajax.install()
        server.on('request', (req, res) => {
            // console.log('请求路径是：' + req.url)
            // console.log('请求我的客户端地址是：' + req.socket.remoteAddress, req.socket.remotePort)

            let url = req.url

            if (url === '/') {
                setTimeout(() => {
                    res.end('index page in timeout')
                }, 5000)

            }
        })

        server.listen(4000, function () {
            // console.log('服务器启动成功，地址localhost:4000')
        })
    })

    afterEach(() => {
        jasmine.Ajax.uninstall()
        server.close()
    })

    test('should treat single string arg as url', () => {
        let c = new fetchFrame()
        c.request({
            url: "/foo"
        })

        return getAjaxRequest().then(request => {
            expect(request.url).toBe('/foo')
            expect(request.method).toBe('GET')
        })
    })

    test('test request post request', (done) => {
        let c = new fetchFrame()
        let response
        c.request({
            url: "/foo",
            method: "post",
            timeout: 0,
            responseType: "text"
        }).then(res => {
            response = res
            done()
        })

        getAjaxRequest().then(request => {
            expect(request.url).toBe('/foo')
            expect(request.method).toBe('POST')
            request.respondWith({
                status: 200,
                statusText: 'OK',
                responseText: '{"a":1}'
            })

            setTimeout(() => {
                expect(response.data).toEqual({ a: 1 })
                done()
            }, 100)
        })
    })

    // test('test request set timeout', () => {

    // })

})