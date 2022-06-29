import { Customer } from "./Customer";
import { Gender } from "../Person";
import { CustomerCategory } from "./Customer";

export class CustomerVIP extends Customer{
    constructor(category:CustomerCategory.CUSTOMER_VIP,  id : number,protected name: string,protected  age: number,protected phone: number){
        super(category,id);
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    
}