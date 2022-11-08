import { noCompile } from '../misc/responses.response'
import { transformResponse } from './transform.util'

export const calculateMatter = (
    damageFirstRocket: number,
    damageSecondRocket: number,
    damageThirdRocket: number,
    cPercentage: number
): string => {
    if (damageFirstRocket == 0 && damageSecondRocket == 0 && damageThirdRocket == 0)
        return transformResponse(cPercentage, cPercentage, cPercentage)

    const capacity = {
        first: 100 - damageFirstRocket,
        second: 100 - damageSecondRocket,
        third: 100 - damageThirdRocket,
    }

    console.log(capacity)
    return noCompile
}
