import { Person } from "../Person";
import { Gender } from "../Person";

export enum CustomerCategory {
    CUSTOMER_VIP,
    COSTOMER_NORMAL,
};
export class Customer {
    constructor(
        protected category: CustomerCategory,id: number) {}

    // isEqual(other:Customer):boolean {
    //     let result = false;
    //     if(this.category === other.category && this.name === other.name && this.age === other.age && this.gender === other.gender && this.id === other.id){
    //         result = true;
    //     }
    //     return result;
    // }
    
    getCustomerCategory(){
        return this.category;
    }
}
