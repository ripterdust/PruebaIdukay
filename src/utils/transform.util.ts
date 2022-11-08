import { Rockets } from '../interfaces/rocket.interface'
import { fuelRepsonse } from '../misc/responses.response'

export const transformResponse = (firstRocket: number, secondRocket: number, thirdRocket: number) =>
    fuelRepsonse
        .replace('__aRocket__', `${firstRocket}`)
        .replace('__bRocket__', `${secondRocket}`)
        .replace('__cRocket__', `${thirdRocket}`)

export const getDataFromResponse = (respponse: string): Rockets => {
    return {
        first: 0,
        second: 0,
        third: 0,
    }
}
