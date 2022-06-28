<<<<<<< HEAD

export class Table {
    // private chairs: Chair[]=[]
    constructor(private id: number){}

    // getChair(){
    //     return this.chairs;
    // }
    // addChair(chair: Chair) {
    //     return this.chairs.push(chair);
    // }
=======
import { Customer } from "../../../human/customer/Customer";

export class Table {
    private customers: Customer[]=[];
    constructor(private id: number, private numberOfCustomers: number){}

    
    isTableFree():boolean{
        let result = false;
        if(this.customers.length < this.numberOfCustomers){
            result = true;
        }
        return result;
    }

    getTableNoCustomer():boolean{
        if (this.customers.length == 0){
            return true;
        }
        return false;
    }
    
    addCustomer(customer: Customer){
        if (this.isTableFree()){
            this.customers.push(customer);
        }
    }
>>>>>>> 74ac35aa854ca3984891b63e0b84f929d0af8f23
}