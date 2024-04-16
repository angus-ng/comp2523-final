import { Clinic } from "./clinic"
import { Household } from "./household"

export interface MapType {
    city: {
        Burnaby: {
            households: Household[],
            clinics: Clinic[]
        },
        Vancouver: {
            households: Household[],
            clinics: Clinic[]
        },
        Richmond: {
            households: Household[]
            clinics: Clinic[]
        }
    }
}