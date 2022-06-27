import { Customer } from "./Customer";
import { Gender } from "../Person";
import { CustomerCategory } from "./Customer";
export class CustomerNormal extends Customer{
    constructor(category:CustomerCategory, id : number,name: string, age: number,  gender: Gender){
        super(category,id, name, age, gender);
    }
}