import {isPlainObject} from '../../src/util/index'

describe("index",() => {
    test("should validate plainObject",() => {
        expect(isPlainObject({})).toBeTruthy()
        expect(isPlainObject(function() {})).toBeFalsy()
    })
})