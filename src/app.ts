import { calcMaxTime } from './common/utils/calcMaxTime.util'
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

    const fuel = getDataFromResponse(fuelNecesary)
    const damage = {
        first: firstRocket,
        second: secondRocket,
        third: thirdRocket,
    }

    const operatingTime = calculateOperatingTime(damage, fuel, cSpeed)
    const maxSpeed = calcMaxTime(firstRocket, secondRocket, thirdRocket)

    console.table({
        'Fuel needed': fuelNecesary,
        'Operating time': operatingTime === Infinity ? operatingTime : `${operatingTime} minutes`,
        'Max speed': `${maxSpeed}% of light speed`,
    })

    return null
}
