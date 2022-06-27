import { Customer } from "./CustomerCategory";
import { Gender } from "../Person";
import { CustomerCategory } from "./CustomerCategory";
export class CustomerVIP extends Customer{
    constructor(category:CustomerCategory,  id : number,name: string,  age: number,  gender: Gender){
        super(category,id, name, age, gender);
    }
}