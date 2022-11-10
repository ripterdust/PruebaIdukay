import { Rockets } from '../interfaces/rocket.interface'

export type CalculateOperatingTime = (damage: Rockets, fuel: Rockets | string, cSpeed: number) => number
