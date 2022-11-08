import { Rockets } from '../interfaces/rocket.interface'
import { noCompile } from '../misc/responses.response'
import { calcNecesaryPower } from './calcNecesaryPower'
import { transformResponse } from './transform.util'

/**==============================================
 **              calculateMatter
 *?  This function calculates the necesarry matter to
 *?  Startup the spaceship
 *@param damageFirstRocket number
 *@param damageSecondRocket number
 *@param damageThirdRocket number
 *@param cPercentage number
 *@return string
 *=============================================**/

export const calculateMatter = (
    damageFirstRocket: number,
    damageSecondRocket: number,
    damageThirdRocket: number,
    cPercentage: number
): string => {
    if (
        damageFirstRocket === null ||
        damageFirstRocket === null ||
        damageThirdRocket === null ||
        cPercentage === null
    )
        return noCompile

    if (damageFirstRocket == 0 && damageSecondRocket == 0 && damageThirdRocket == 0)
        return transformResponse(cPercentage, cPercentage, cPercentage)

    let actualCapacity: Rockets = {
        first: 100 - damageFirstRocket,
        second: 100 - damageSecondRocket,
        third: 100 - damageThirdRocket,
    }

    const totalFuelRequired = cPercentage * 3
    const totalPower = actualCapacity.first + actualCapacity.second + actualCapacity.third
    const missingPower = totalFuelRequired - totalPower

    const response = calcNecesaryPower(actualCapacity, missingPower)
    return response
}
