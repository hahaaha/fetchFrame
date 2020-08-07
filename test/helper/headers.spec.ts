import { processHeaders } from '../../src/helper/headers'

describe("test helper function headers", () => {
    describe("test processHeaders", () => {
        test("headers no set but data exist", () => {
            expect(
                processHeaders({}, {})
            ).toStrictEqual({ "Content-Type": "application/json;charset=utf-8" })
        })

        test("headers set Content-Type but name not Content-Type and data exist", () => {
            expect(
                processHeaders({ "content-type": "application/json;charset=utf-8" }, {})
            ).toStrictEqual({ "Content-Type": "application/json;charset=utf-8" })
        })

        test("headers no set but data exist", () => {
            expect(
                processHeaders(null, {})
            ).toBe(null)
        })

        test("headers no set but data exist", () => {
            expect(
                processHeaders(undefined, {})
            ).toBe(undefined)
        })

        test("headers set no content-type and data exist", () => {
            expect(
                processHeaders({ "Accept": "text/plain" }, {})
            ).toStrictEqual({ "Content-Type": "application/json;charset=utf-8", "Accept": "text/plain" })
        })

        test("headers set content-type and data exist", () => {
            expect(
                processHeaders({ "Accept": "text/plain", "Content-Type": "application/json" }, {})
            ).toStrictEqual({ "Content-Type": "application/json", "Accept": "text/plain" })
        })
    })
})