import { isPlainObject, isDate } from '../../src/util/index'

describe("index", () => {
    test("should validate plainObject", () => {
        expect(isPlainObject({})).toBeTruthy()
        expect(isPlainObject(function () { })).toBeFalsy()
    })

    test("should validate Date", () => {
        expect(isDate({})).toBeFalsy()
        expect(isDate(new Date())).toBeTruthy()
    })
})