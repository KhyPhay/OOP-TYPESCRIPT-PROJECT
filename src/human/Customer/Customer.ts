import { Person } from "../Person";
import { Gender } from "../Person";

export enum CustomerCategory {
    CUSTOMER_VIP,
    COSTOMER_NORMAL,
};
export class Customer{
    constructor( protected category: CustomerCategory, protected id: number) {}
    
    getCustomerCategory(){
        return this.category;
    }
}
