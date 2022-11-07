import { noCompile } from '../misc/responses.response'
import { calculateMatter } from '../utils/calculateMatter.util'

describe('Necesary matter - Invalidation cases', () => {
    test('Invalid paramas', () => {
        expect(calculateMatter(null, null, null, null)).toBe(noCompile)
    })

    test('To much damage', () => {
        expect(calculateMatter(20, 50, 40, 170)).toBe(noCompile)
    })
})
