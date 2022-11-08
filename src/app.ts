import { calculateMatter } from './utils/calculateMatter.util'
import { calculateOperatingTime } from './utils/calculateOperatingTime.util'
import { getDataFromResponse } from './utils/transform.util'

export const results = (firstRocket: number, secondRocket: number, thirdRocket: number, cSpeed: number) => {
    const fuelNecesary = calculateMatter(firstRocket, secondRocket, thirdRocket, cSpeed)

    const fuel = getDataFromResponse(fuelNecesary)
    const damage = {
        first: firstRocket,
        second: secondRocket,
        third: thirdRocket,
    }
    const operatingTime = calculateOperatingTime(damage, fuel, cSpeed)

    console.table({
        'Fuel needed': fuelNecesary,
        'Operating time': operatingTime === Infinity ? operatingTime : `${operatingTime} minutes`,
    })
}
