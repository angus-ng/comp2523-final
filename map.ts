import { readFile } from "fs/promises";
import { EOL } from "os";
import { basename, extname } from "path";
import { MapType } from "./map.interface";

let currentIntake = 20;

export class Map {
	private _mapData: MapType
    private _fileName
  // constructors, methods, etc
    private constructor (data: MapType, fileName: string){
        this._mapData = data;
        this._fileName = fileName;
    }
    static async build(filename: string) {
        const data = await readFile(filename, "utf-8")
        const mapData: MapType = JSON.parse(data);
        return new Map(mapData, basename(filename, extname(filename))) 
    }

    get mapData () {
        return this._mapData;
    }

    printMap() {
        // console.log(this._mapData.city)
        let cities = [];
        
        for (const [key, value] of Object.entries(this._mapData.city)) {
            const cityArr: String[] = [];
            value.households.forEach((household) => {
                const notVaccinated = household.inhabitants.find(obj => obj.isVaccinated === false)
                if (notVaccinated) {
                    cityArr[household.blockNum] = "H"
                } else {
                    cityArr[household.blockNum] = "F"
                }
            })
            value.clinics.forEach((clinic) => cityArr[clinic.blockNum] = "C" )
            cities.push(cityArr)
        }

        let longest = 0;
        cities.forEach((city) => {if(city.length > longest) {
            longest = city.length
        }})
        cities = cities.map((city) => {
            if (city.length !== longest) {
                const filler = new Array(longest-city.length).fill("x")
                city = city.concat(filler)
            }
            return city
        })
        
        cities.forEach((city) => {
            console.log(city.join(","))
        })
    }

    registerForShots() {
        for (const [key, value] of Object.entries(this._mapData.city)) {
            value.households.forEach((household) => {
                household.inhabitants.forEach((person) => {
                    //find nearest clinic based on index
                    //enqueue them by calling the method from the Queue
                })
            })
            // console.log(value.clinics)
        }
    }
}   