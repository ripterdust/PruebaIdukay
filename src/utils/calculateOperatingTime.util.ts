import { CalculateOperatingTime } from '../types/calculateOperatingTime.type'

export const calculateOperatingTime: CalculateOperatingTime = (
    firstRocket = null,
    secondRocket = null,
    thirdRocket = null,
    cPercentage = null
) => {
    if (!firstRocket || !secondRocket || !thirdRocket || !cPercentage) return null

    return 0
}
