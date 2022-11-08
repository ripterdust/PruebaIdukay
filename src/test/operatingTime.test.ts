import { calculateOperatingTime } from '../utils/calculateOperatingTime.util'

describe('Operating time - invalidation tests', () => {
    test('Returns infinity if ther is not able to complile ', () => {
        expect(calculateOperatingTime(20, 50, 40, 170)).toBe(0)
    })
})

describe('Operating time - infinity cases', () => {
    test('First case', () => {
        expect(calculateOperatingTime(0, 0, 0, 100)).toBe(Infinity)
    })
    test('Second case', () => {
        expect(calculateOperatingTime(0, 0, 0, 90)).toBe(Infinity)
    })

    test('Third case', () => {
        expect(calculateOperatingTime(0, 0, 0, 30)).toBe(Infinity)
    })
})

describe('Operating time - returns operating time in minutes', () => {
    test('Should return 90 minutes', () => {
        expect(calculateOperatingTime(20, 10, 0, 100)).toBe(90)
    })

    test('Should return 80 minutes', () => {
        expect(calculateOperatingTime(0, 0, 100, 80)).toBe(80)
    })

    test('Should return 50 minutes', () => {
        expect(calculateOperatingTime(0, 0, 0, 150)).toBe(50)
    })

    test('Should return 50 minutes', () => {
        expect(calculateOperatingTime(0, 0, 30, 140)).toBe(50)
    })
})
