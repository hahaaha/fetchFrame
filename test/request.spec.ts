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
})