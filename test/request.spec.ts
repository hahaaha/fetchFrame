import fetchFrame from '../src/index'
import { getAjaxRequest } from './helper'

describe('requests', () => {
    beforeEach(() => {
        jasmine.Ajax.install()
    })

    afterEach(() => {
        jasmine.Ajax.uninstall()
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
        c.request({
            url: "/foo",
            method: "post",
            timeout: 0,
            responseType: "text"
        }).then(res => {
            // console.log(res)
            // expect(res.config.method).toBe('post')
            done()
        })

        getAjaxRequest().then(request => {
            expect(request.url).toBe('/foo')
            expect(request.method).toBe('POST')
            request.respondWith({
                status: 200
            })
        })
    })

    test('test request set timeout', (done) => {
        let c = new fetchFrame()
        let err = ""
        c.request({
            url: "/foo",
            method: "post",
            timeout: 1000,
            responseType: "text"
        }).then(res => {
            // console.log(res)
            // expect(res.config.method).toBe('post')
            setTimeout(() => {
                done()
            }, 2000)
        }).catch((e) => {
            err = e
        })

        getAjaxRequest().then(request => {
            console.log(err)
        })
    })

})