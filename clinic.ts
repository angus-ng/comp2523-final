import { Queue } from "./queue"

export interface Clinic {
    name: string,
    blockNum: number,
    staff: number,
    queue?: Queue
}