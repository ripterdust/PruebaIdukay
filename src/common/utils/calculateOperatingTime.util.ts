import { noCompile } from '../misc/responses.response'
import { CalculateOperatingTime } from '../types/calculateOperatingTime.type'

export const calculateOperatingTime: CalculateOperatingTime = (damage, fuel, cSpeed) => {
    if (fuel == noCompile) return 0
    if (damage.first === 0 && damage.second === 0 && damage.third === 0) {
        if (cSpeed <= 100) return Infinity
        const extraSpeed = cSpeed - 100
        return extraSpeed
    }

    const TOTALPOWER = 100
    let average = 0
    let overpowerRockets = 0

    Object.keys(damage).map((key) => {
        // @ts-ignore
        const capacity = 100 - damage[key]
        // @ts-ignore
        const extaPower = fuel[key] - capacity

        if (extaPower > 0) {
            average += extaPower
            overpowerRockets += 1
        }
    })

    const avgOverPower = average / overpowerRockets

    return TOTALPOWER - avgOverPower
}
