import { noCompile } from '../common/misc/responses.response'
import { getMaxNumFromArray } from '../common/utils/get.util'
import { getDataFromResponse } from '../common/utils/transform.util'

describe('THis tests show the returning of data', () => {
    test('Returns the mgs', () => {
        expect(getDataFromResponse('A: 90 mg/s, B: 100 mg/s, C: 110 mg/s')).toStrictEqual({
            first: 90,
            second: 100,
            third: 110,
        })
    })

    test('No compile', () => {
        expect(getDataFromResponse(noCompile)).toBe(noCompile)
    })
})

describe('Get the max number', () => {
    test('Returns the max number', () => {
        expect(getMaxNumFromArray([0, 1, 2])).toBe(2)
    })

    test('Returs 0 if there is no numbers', () => {
        expect(getMaxNumFromArray([])).toBe(0)
    })

    test('Returns 0 cuz ther is the only one number', () => {
        expect(getMaxNumFromArray([0])).toBe(0)
    })
})
