import { Rockets } from '../interfaces/rocket.interface'
import { getMaxNumFromArray, getMaxPercentage } from './get.util'

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
    const minimumCapacity = 0
    if (first === minimumCapacity && second === minimumCapacity && third === minimumCapacity) {
        return totalLightSpeed
    }

    if (first < totalLightSpeed && second < totalLightSpeed && third < totalLightSpeed) {
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
        const damage: number = rockets[key]

        if (damage === maxDamage) return (fulllyDamagedRockets += 1)

        availableRockets.push(damage)

        return null
    })

    let maximumSpeedWidthDamage: number = Number(parseFloat(`${totalLightSpeed / 3}`).toFixed(2))
    const totalRockets = 3
    const totalOfFullyDamagedRockets: number = totalRockets - fulllyDamagedRockets

    const maxSpeed: number = maximumSpeedWidthDamage * totalOfFullyDamagedRockets
    const maxDamagedRocket = getMaxNumFromArray(availableRockets)
    const maxPercentage: number = getMaxPercentage(maxSpeed, maxDamagedRocket)
    return maxPercentage
}
