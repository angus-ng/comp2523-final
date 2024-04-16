import { Clinic } from "./clinic"
import { Household } from "./household"

export interface MapType {
    city: {
        [key: string] : {
            households: Household[],
            clinics: Clinic[]
        }
    }
}