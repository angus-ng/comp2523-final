import { Person } from "./person"

export interface Household {
    blockNum: number,
    inhabitants: Person[]
}