import { CalculateOperatingTime } from '../types/calculateOperatingTime.type'

/**==============================================
 **              calculateOperatingTime
 *? This function calculate the maximum operating
 *? time.
 *
 *@param rocket Rockets
 *@param missingPower number
 *@return string | number
 *=============================================**/

export const calculateOperatingTime: CalculateOperatingTime = (damage, fuel, cSpeed) => {
    if (typeof fuel === 'string') {
        return 0
    }

    const LigthSpeed = 100

    if (damage.first === 0 && damage.second === 0 && damage.third === 0) {
        if (cSpeed <= LigthSpeed) return Infinity
        const extraSpeed = cSpeed - LigthSpeed
        return extraSpeed
    }

    const TOTALPOWER = 100
    let average = 0
    let overpowerRockets = 0

    Object.keys(damage).map((key) => {
        const capacity = TOTALPOWER - damage[key]

        const extaPower = fuel[key] - capacity

        const noPower = 0

        if (extaPower > noPower) {
            average += extaPower
            overpowerRockets += 1
        }
    })

    const avgOverPower = average / overpowerRockets

    return TOTALPOWER - avgOverPower
}
