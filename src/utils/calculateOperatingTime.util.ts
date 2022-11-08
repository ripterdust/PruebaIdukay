import { CalculateOperatingTime } from '../types/calculateOperatingTime.type'

export const calculateOperatingTime: CalculateOperatingTime = (
    firstRocket,
    secondRocket,
    thirdRocket,
    cPercentage
) => {
    if (firstRocket === 0 && secondRocket === 0 && thirdRocket === 0 && cPercentage <= 100) {
        return Infinity
    }
    return 50000
}
