import { noCompile } from '../misc/responses.response'
import { CalculateOperatingTime } from '../types/calculateOperatingTime.type'
import { Rockets } from '../interfaces/rocket.interface'
export const calculateOperatingTime: CalculateOperatingTime = (damage, fuel, cSpeed) => {
    if (fuel == noCompile) return 0
    if (damage.first === 0 && damage.second === 0 && damage.third === 0) {
        if (cSpeed <= 100) return Infinity
        const extraSpeed = cSpeed - 100
        return extraSpeed
    }

    const timeOfRocketActivity: Rockets = {
        first: 0,
        second: 0,
        third: 0,
    }
    // @ts-ignore
    const { first, second, third } = fuel

    return 0
}
