import { noCompile } from '../misc/responses.response'
import { transformResponse } from './transform.util'

export const calculateMatter = (
    firstRocket: number,
    secondRocket: number,
    thirdRocket: number,
    cPercentage: number
): string => {
    if (firstRocket == 0 && secondRocket == 0 && thirdRocket == 0)
        return transformResponse(cPercentage, cPercentage, cPercentage)
    return noCompile
}
