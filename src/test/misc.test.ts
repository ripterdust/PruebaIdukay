import { noCompile } from '../common/misc/responses.response'
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
