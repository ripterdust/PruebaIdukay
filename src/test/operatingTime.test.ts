import { calculateOperatingTime } from '../common/utils/calculateOperatingTime.util'

describe('Operating time - invalidation tests', () => {
    test('Returns infinity if ther is not able to complile ', () => {
        const damageInRockets = {
            first: 20,
            second: 50,
            third: 40,
        }
        expect(calculateOperatingTime(damageInRockets, 'Unable to comply', 170)).toBe(0)
    })
})

describe('Operating time - infinity cases', () => {
    test('First case', () => {
        const damageInRockets = {
            first: 0,
            second: 0,
            third: 0,
        }

        const fuelInRockets = {
            first: 100,
            second: 100,
            third: 100,
        }

        expect(calculateOperatingTime(damageInRockets, fuelInRockets, 100)).toBe(Infinity)
    })
    test('Second case', () => {
        const damageInRockets = {
            first: 0,
            second: 0,
            third: 0,
        }

        const fuelInRockets = {
            first: 90,
            second: 90,
            third: 90,
        }
        expect(calculateOperatingTime(damageInRockets, fuelInRockets, 90)).toBe(Infinity)
    })

    test('Third case', () => {
        const damageInRockets = {
            first: 0,
            second: 0,
            third: 0,
        }
        const fuelInRockets = {
            first: 30,
            second: 30,
            third: 30,
        }
        expect(calculateOperatingTime(damageInRockets, fuelInRockets, 30)).toBe(Infinity)
    })
})

describe('Operating time - returns operating time in minutes', () => {
    test('Should return 90 minutes', () => {
        const damageInRockets = {
            first: 20,
            second: 10,
            third: 0,
        }

        const fuelInRockets = {
            first: 90,
            second: 100,
            third: 110,
        }
        expect(calculateOperatingTime(damageInRockets, fuelInRockets, 100)).toBe(90)
    })

    test('Should return 80 minutes', () => {
        const damageInRockets = {
            first: 0,
            second: 0,
            third: 100,
        }

        const fuelInRockets = {
            first: 120,
            second: 120,
            third: 0,
        }

        expect(calculateOperatingTime(damageInRockets, fuelInRockets, 80)).toBe(80)
    })

    test('Should return 50 minutes', () => {
        const damageInRockets = {
            first: 0,
            second: 0,
            third: 0,
        }

        const fuelInRockets = {
            first: 150,
            second: 150,
            third: 150,
        }
        expect(calculateOperatingTime(damageInRockets, fuelInRockets, 150)).toBe(50)
    })

    test('Should return 50 minutes', () => {
        const damageInRockets = {
            first: 0,
            second: 0,
            third: 30,
        }

        const fuelInRockets = { first: 150, second: 150, third: 120 }
        expect(calculateOperatingTime(damageInRockets, fuelInRockets, 140)).toBe(50)
    })
})
