export const getMaxNumFromArray = (array: number[]) => array.reduce((acc, val) => (acc > val ? acc : val), 0)
