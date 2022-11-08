import { calculateOperatingTime } from '../common/utils/calculateOperatingTime.util'

describe('Operating time - invalidation tests', () => {
    test('Returns infinity if ther is not able to complile ', () => {
        expect(
            calculateOperatingTime(
                {
                    first: 20,
                    second: 50,
                    third: 40,
                },
                'Unable to comply',
                170
            )
        ).toBe(0)
    })
})

describe('Operating time - infinity cases', () => {
    test('First case', () => {
        expect(
            calculateOperatingTime(
                {
                    first: 0,
                    second: 0,
                    third: 0,
                },
                {
                    first: 100,
                    second: 100,
                    third: 100,
                },
                100
            )
        ).toBe(Infinity)
    })
    test('Second case', () => {
        expect(
            calculateOperatingTime(
                {
                    first: 0,
                    second: 0,
                    third: 0,
                },
                {
                    first: 90,
                    second: 90,
                    third: 90,
                },
                90
            )
        ).toBe(Infinity)
    })

    test('Third case', () => {
        expect(
            calculateOperatingTime(
                {
                    first: 0,
                    second: 0,
                    third: 0,
                },
                {
                    first: 30,
                    second: 30,
                    third: 30,
                },
                30
            )
        ).toBe(Infinity)
    })
})

describe('Operating time - returns operating time in minutes', () => {
    test('Should return 90 minutes', () => {
        expect(
            calculateOperatingTime(
                {
                    first: 20,
                    second: 10,
                    third: 0,
                },
                {
                    first: 90,
                    second: 100,
                    third: 110,
                },
                100
            )
        ).toBe(90)
    })

    test('Should return 80 minutes', () => {
        expect(
            calculateOperatingTime(
                {
                    first: 0,
                    second: 0,
                    third: 100,
                },
                {
                    first: 120,
                    second: 120,
                    third: 0,
                },
                80
            )
        ).toBe(80)
    })

    test('Should return 50 minutes', () => {
        expect(
            calculateOperatingTime(
                {
                    first: 0,
                    second: 0,
                    third: 0,
                },
                {
                    first: 150,
                    second: 150,
                    third: 150,
                },
                150
            )
        ).toBe(50)
    })

    test('Should return 50 minutes', () => {
        expect(
            calculateOperatingTime(
                {
                    first: 0,
                    second: 0,
                    third: 30,
                },
                {
                    first: 150,
                    second: 150,
                    third: 120,
                },
                140
            )
        ).toBe(50)
    })
})
