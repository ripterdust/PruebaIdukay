export const getMaxNumFromArray = (array: number[]) => array.reduce((acc, val) => (acc > val ? acc : val), 0)

export const getMaxPercentage = (maxSpeed: number, maxDamaged: number): number => {
    return (maxSpeed / 100) * (100 - maxDamaged)
}
