import { IReport } from "./IReport";
import { Map } from "./map";

export class SimpleReport implements IReport {
    private _map: Map

    constructor (map: Map) {
        this._map = map;
    }

    async printDetails(): Promise<void> {
        for (const [key, value] of Object.entries(this._map.mapData.city)) {
            value.clinics.forEach((clinic) => {
                if (clinic.queue){
                    
                }
                console.log(`${clinic.name} - ${clinic.queue?.size() || 0}`)
            })
        }
        return;
    }

}