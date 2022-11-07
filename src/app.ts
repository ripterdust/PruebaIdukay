import { calculateMatter } from './utils/calculateMatter.util'

export const results = (firstRocket: number, secondRocket: number, thirdRocket: number, cSpeed: number) => {
    const fuelNecesary = calculateMatter(firstRocket, secondRocket, thirdRocket, cSpeed)
    console.log(fuelNecesary)
}
