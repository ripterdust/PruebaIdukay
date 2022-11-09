import { calcMaxTime } from '../common/utils/calcMaxTime.util'

describe('This test the maxVelocity function', () => {
    test('This should return the max velocity when the rocket havent damage', () => {
        expect(calcMaxTime(0, 0, 0)).toBe(Infinity)
    })

    test('Slow case', () => {
        expect(calcMaxTime(20, 50, 40)).toBe(50)
    })

    test('Fast case', () => {
        expect(calcMaxTime(20, 10, 0)).toBe(80)
    })

    test('This test should returns 70', () => {
        expect(calcMaxTime(0, 0, 30)).toBe(70)
    })

    test('This test should return 60', () => {
        expect(calcMaxTime(0, 0, 100)).toBe(66.66)
    })
})
