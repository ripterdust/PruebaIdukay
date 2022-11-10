import { results } from './app'
import { AllCases } from './common/interfaces/allInfo'

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

useCases.map(({ first, second, third, cSpeed }: AllCases) => {
    results(first, second, third, cSpeed)
})
