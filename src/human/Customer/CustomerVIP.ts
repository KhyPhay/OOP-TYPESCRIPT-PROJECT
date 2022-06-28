import { Customer } from "./Customer";
import { Gender } from "../Person";
import { CustomerCategory } from "./Customer";

export class CustomerVIP extends Customer{
    constructor(category:CustomerCategory.CUSTOMER_VIP,  id : number,name: string,  age: number,  gender: Gender){
        super(category,id, name, age, gender);
    }
    
}