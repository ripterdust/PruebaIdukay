import { Rockets } from '../interfaces/rocket.interface'

/**==============================================
 **              calcMaxTime
 *?  This function calculates what speed the rocket
 *?  needs to traven indefinitely
 *
 *@param frist number
 *@param second number
 *@param third number
 *@return number
 *=============================================**/

export const calcMaxTime = (first: number, second: number, third: number): number => {
    if (first === 0 && second === 0 && third === 0) {
        return Infinity
    }

    const totalLightSpeed: number = 100

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
    Object.keys(rockets).map((key: string) => {
        // @ts-ignore
        const rocket: number = rockets[key]

        if (rocket === 100) return (fulllyDamagedRockets += 1)

        availableRockets.push(rocket)
        return null
    })

    // @ts-ignore
    const maxSpeed: number = parseFloat(totalLightSpeed / 3).toFixed(2) * (3 - fulllyDamagedRockets)
    const maxDamagedRocket = availableRockets.reduce((acc, val) => (acc > val ? acc : val))
    const maxPercentage = (maxSpeed / 100) * (100 - maxDamagedRocket)
    return maxPercentage
}
