import { Rockets } from '../interfaces/rocket.interface'
import { getMaxNumFromArray } from './get.util'

/**==============================================
 **              calculateMaxSpeed
 *?  This function calculates what speed the rocket
 *?  needs to traven indefinitely
 *
 *@param frist number
 *@param second number
 *@param third number
 *@return number
 *=============================================**/

export const calculateMaxSpeed = (first: number, second: number, third: number): number => {
    const totalLightSpeed: number = 100

    if (first === 0 && second === 0 && third === 0) {
        return totalLightSpeed
    }

    if (first < 100 && second < 100 && third < 100) {
        const mostDamagedRocket: number = Math.max(first, second, third)
        return totalLightSpeed - mostDamagedRocket
    }

    const rockets: Rockets = {
        first,
        second,
        third,
    }
    let fulllyDamagedRockets: number = 0
    let availableRockets: number[] = []
    const maxDamage = 100
    Object.keys(rockets).map((key: string) => {
        // @ts-ignore
        const damage: number = rockets[key]

        if (damage === maxDamage) return (fulllyDamagedRockets += 1)

        availableRockets.push(damage)
        return null
    })

    // @ts-ignore
    const maxSpeed: number = parseFloat(totalLightSpeed / 3).toFixed(2) * (3 - fulllyDamagedRockets)
    const maxDamagedRocket = getMaxNumFromArray(availableRockets)
    const maxPercentage = (maxSpeed / 100) * (100 - maxDamagedRocket)
    return maxPercentage
}
