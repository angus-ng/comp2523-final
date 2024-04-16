import { Person } from "./person";

export class Queue { 
    private _queue: Person[] = []
    private _currentIntake: number;

    constructor(currentIntake: number, people?: Person[]) {
        this._currentIntake = currentIntake;
        if (people) {
            people.forEach((person) => {
                this.enqueue(person)
            })
        }
    }

    get currentIntake() {
        return this._currentIntake;
    }
    
    set currentIntake(age:number) {
        this._currentIntake = age;
    }

    enqueue(person:Person) {
        if (person.age > this._currentIntake){
            this._queue.push(person)
        }
    }
    
    dequeue() {
        this._queue.shift()
    }

    size() {
        return this._queue.length;
    }

    getCurrentWaitTime() {
        return `${this._queue.length * 15} min.`
    }
    
}