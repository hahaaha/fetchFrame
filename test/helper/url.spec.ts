import { buildURL } from '../../src/helper/url'
describe("url", () => {
    describe("test buildUrl", () => {
        test("should support params", () => {
            let url = buildURL("/foo", { a: 1, b: 1 })
            expect(url).toBe("/foo?a=1&b=1")
        })

        test("should support Date params", () => {
            const date = new Date()

            expect(
                buildURL('/foo', {
                    date
                })
            ).toBe(`/foo?date=${date.toISOString()}`)
        })

        test("shold support array params", () => {
            expect(
                buildURL('/foo', {
                    a: ["cc", "dd"]
                })
            ).toBe(`/foo?a[]=cc&a[]=dd`)
        })

        test("should discard url hash mark", () => {
            expect(
                buildURL("/foo#test", {
                    a: 1
                })
            ).toBe("/foo?a=1")
        })
    })

})