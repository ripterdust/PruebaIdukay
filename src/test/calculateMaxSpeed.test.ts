import { calculateMaxSpeed } from '../common/utils/calcMaxSpeed.util'

describe('This test the maxVelocity function', () => {
    test('This should return the max velocity when the rocket havent damage', () => {
        expect(calculateMaxSpeed(0, 0, 0)).toBe(100)
    })

    test('Slow case', () => {
        expect(calculateMaxSpeed(20, 50, 40)).toBe(50)
    })

    test('Fast case', () => {
        expect(calculateMaxSpeed(20, 10, 0)).toBe(80)
    })

    test('This test should returns 70', () => {
        expect(calculateMaxSpeed(0, 0, 30)).toBe(70)
    })

    test('This test should return 60', () => {
        expect(calculateMaxSpeed(0, 0, 100)).toBe(66.66)
    })
})
