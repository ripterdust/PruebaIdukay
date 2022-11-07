import { Rockets } from '../interfaces/rocket.interface'

export type CalculateOperatingTime = (
    firstRocket: number | null,
    secondRocket: number | null,
    thirdRocket: number | null,
    cPercentage: number | null
) => number | null
