import mergeConfig from '../../src/util/mergeConfig.js'

describe('util', () => {
    describe('mergeConfig', () => {
        test('a and b no repeate properties', () => {
            let a = { a: "1" }
            let b = { b: "2" }
            let c = mergeConfig(a, b)
            expect(c).toStrictEqual({ a: "1", b: "2" })
        })

        test("a and b have repeate properties", () => {
            let a = { a: "1", b: "2" }
            let b = { b: "1" }
            let c = mergeConfig(a, b)
            expect(c).toStrictEqual({ a: "1", b: "1" })
        })
    })
})