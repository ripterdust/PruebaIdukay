import { noCompile } from '../misc/responses.response'
import { CalculateOperatingTime } from '../types/calculateOperatingTime.type'
export const calculateOperatingTime: CalculateOperatingTime = (damage, fuel, cSpeed) => {
    if (fuel == noCompile) return 0

    return 0
}
