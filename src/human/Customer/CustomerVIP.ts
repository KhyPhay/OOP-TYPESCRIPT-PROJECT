import { Person } from "../Person";
import { Gender } from "../Person";
export class CustomerVIP extends Person{
    constructor(protected id : number,protected name: string, protected age: number, protected gender: Gender){
        super(id, name, age, gender);
    }
}