import { calculateMatter } from './utils/calculateMatter.util'
import { calculateOperatingTime } from './utils/calculateOperatingTime.util'

export const results = (firstRocket: number, secondRocket: number, thirdRocket: number, cSpeed: number) => {
    const fuelNecesary = calculateMatter(firstRocket, secondRocket, thirdRocket, cSpeed)
    const operatingTime = calculateOperatingTime(firstRocket, secondRocket, thirdRocket, cSpeed)
    console.table({
        'Necesary fuel': fuelNecesary,
    })
}
