import { fuelRepsonse, noCompile } from '../misc/responses.response'
import { Rockets } from '../interfaces/rocket.interface'
import { StringObject } from '../interfaces/general.interface'
export const transformResponse = (firstRocket: number, secondRocket: number, thirdRocket: number) => {
    return fuelRepsonse
        .replace('__aRocket__', `${firstRocket}`)
        .replace('__bRocket__', `${secondRocket}`)
        .replace('__cRocket__', `${thirdRocket}`)
}

export const getDataFromResponse = (response: string): Rockets | string => {
    if (response == noCompile) {
        return response
    }

    const indexes: StringObject = {
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
        .replace(/mg\/s/g, '')
        .replace(/ /g, '')
        .replace('A:', '')
        .replace('B:', '')
        .replace('C:', '')
        .split(',')
        .map((number: string, index: number) => {
            const numberOfkey: string = `${index + 1}`

            const key = indexes[numberOfkey]
            rockets[key] = parseInt(number)
        })
    return rockets
}
