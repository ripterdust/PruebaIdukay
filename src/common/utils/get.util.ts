export const getMaxNumFromArray = (array: number[]) => {
    return array.reduce((acc, val) => (acc > val ? acc : val), 0)
}

export const getMaxPercentage = (maxSpeed: number, maxDamaged: number): number => {
    const lightSpeed = 100
    const maximumRocketCapacity = 100
    return (maxSpeed / lightSpeed) * (maximumRocketCapacity - maxDamaged)
}
