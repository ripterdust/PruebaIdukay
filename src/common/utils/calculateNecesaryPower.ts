import { Rockets } from '../interfaces/rocket.interface'
import { noCompile } from '../misc/responses.response'
import { transformResponse } from './transform.util'

/**==============================================
 **              calcNecesaryPower
 *?  This function calculates what is the necessary power
 *?  for the rocket to travel at the required speed
 *@param rocket Rockets
 *@param missingPower number
 *@return string | number
 *=============================================**/

export const calcNecesaryPower = (rockets: Rockets, missingPower: number) => {
    let power: Rockets = {
        first: 0,
        second: 0,
        third: 0,
    }

    let rocketsAvailable = 0

    const functionalRockets: string[] = []

    Object.keys(rockets).map((key) => {
        const rocket = rockets[key]
        if (rocket > 0) {
            functionalRockets.push(key)
            rocketsAvailable += 1
        }

        return null
    })

    const powerRequiredByRockett = missingPower / rocketsAvailable

    if (rocketsAvailable === 0 || powerRequiredByRockett > 99) return noCompile

    functionalRockets.map((rocket) => {
        const powerAvailable = rockets[rocket]
        power[rocket] = powerAvailable + powerRequiredByRockett
    })

    return transformResponse(power.first, power.second, power.third)
}
