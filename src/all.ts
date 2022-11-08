import { results } from './app'
import { AllCases } from './interfaces/allInfo'
import { Rockets } from './interfaces/rocket.interface'
const useCases: AllCases[] = [
    { first: 0, second: 0, third: 0, cSpeed: 100 },
    { first: 0, second: 0, third: 0, cSpeed: 90 },
    { first: 0, second: 0, third: 0, cSpeed: 30 },
    { first: 20, second: 10, third: 0, cSpeed: 100 },
    { first: 0, second: 0, third: 100, cSpeed: 80 },
    { first: 0, second: 0, third: 0, cSpeed: 150 },
    { first: 0, second: 0, third: 30, cSpeed: 140 },
    { first: 20, second: 50, third: 40, cSpeed: 170 },
]

const selectedCase = useCases[3]
results(selectedCase.first, selectedCase.second, selectedCase.third, selectedCase.cSpeed)
