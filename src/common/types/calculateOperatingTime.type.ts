import { Rockets } from '../interfaces/rocket.interface'
import { noCompile } from '../misc/responses.response'
export type CalculateOperatingTime = (damage: Rockets, fuel: Rockets | string, cSpeed: number) => number
