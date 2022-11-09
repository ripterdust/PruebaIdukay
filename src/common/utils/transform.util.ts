import { fuelRepsonse, noCompile } from '../misc/responses.response'
import { Rockets } from '../interfaces/rocket.interface'
export const transformResponse = (firstRocket: number, secondRocket: number, thirdRocket: number) =>
    fuelRepsonse
        .replace('__aRocket__', `${firstRocket}`)
        .replace('__bRocket__', `${secondRocket}`)
        .replace('__cRocket__', `${thirdRocket}`)

export const getDataFromResponse = (response: string): Rockets | string => {
    if (response == noCompile) return response
    const indexes = {
        1: 'first',
        2: 'second',
        3: 'third',
    }

    const rockets: Rockets = {
        first: 0,
        second: 0,
        third: 0,
    }
    response
        // @ts-ignore
        .replaceAll('mg/s', '')
        .replaceAll(' ', '')
        .replace('A:', '')
        .replace('B:', '')
        .replace('C:', '')
        .split(',')
        .map((number: string, index: number) => {
            // @ts-ignore
            const key = indexes[index + 1]
            // @ts-ignore
            rockets[key] = parseInt(number)
        })
    return rockets
}
