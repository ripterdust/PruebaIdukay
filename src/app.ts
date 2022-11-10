import { Rockets } from './common/interfaces/rocket.interface'
import { calculateMaxSpeed } from './common/utils/calculateMaxSpeed.util'
import { calculateMatter } from './common/utils/calculateMatter.util'
import { calculateOperatingTime } from './common/utils/calculateOperatingTime.util'
import { getDataFromResponse } from './common/utils/transform.util'

/**==============================================
 **              results
 *?  This function displays the result
 *
 *@param firstRocket number
 *@param secondRocket number
 *@param thirdRocket number
 *@param cSpeed number
 *@return null
 *=============================================**/

export const results = (firstRocket: number, secondRocket: number, thirdRocket: number, cSpeed: number) => {
    const fuelNecesary = calculateMatter(firstRocket, secondRocket, thirdRocket, cSpeed)

    const fuelByRocket: Rockets | string = getDataFromResponse(fuelNecesary)

    const damage: Rockets = {
        first: firstRocket,
        second: secondRocket,
        third: thirdRocket,
    }

    const operatingTime = calculateOperatingTime(damage, fuelByRocket, cSpeed)
    const maxSpeed = calculateMaxSpeed(firstRocket, secondRocket, thirdRocket)

    console.table({
        'Fuel needed': fuelNecesary,
        'Operating time': operatingTime === Infinity ? operatingTime : `${operatingTime} minutes`,
        'Max speed': `${maxSpeed}% of light speed`,
    })

    return null
}
