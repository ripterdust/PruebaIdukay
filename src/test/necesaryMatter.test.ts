import { noCompile } from '../common/misc/responses.response'
import { calculateMatter } from '../common/utils/calculateMatter.util'

describe('Necesary matter - Invalidation cases', () => {
    test('To much damage', () => {
        expect(calculateMatter(20, 50, 40, 170)).toBe(noCompile)
    })
})

describe('Weight cases', () => {
    test('First case', () => {
        expect(calculateMatter(0, 0, 0, 100)).toBe('A: 100 mg/s, B: 100 mg/s, C: 100 mg/s')
    })

    test('Second case', () => {
        expect(calculateMatter(0, 0, 0, 90)).toBe('A: 90 mg/s, B: 90 mg/s, C: 90 mg/s')
    })

    test('Third case', () => {
        expect(calculateMatter(0, 0, 0, 30)).toBe('A: 30 mg/s, B: 30 mg/s, C: 30 mg/s')
    })

    test('Fourth case', () => {
        expect(calculateMatter(20, 10, 0, 100)).toBe('A: 90 mg/s, B: 100 mg/s, C: 110 mg/s')
    })

    test('Fifth case', () => {
        expect(calculateMatter(0, 0, 100, 80)).toBe('A: 120 mg/s, B: 120 mg/s, C: 0 mg/s')
    })

    test('Sixth case', () => {
        expect(calculateMatter(0, 0, 0, 150)).toBe('A: 150 mg/s, B: 150 mg/s, C: 150 mg/s')
    })

    test('Seventh case', () => {
        expect(calculateMatter(0, 0, 30, 140)).toBe('A: 150 mg/s, B: 150 mg/s, C: 120 mg/s')
    })
})
