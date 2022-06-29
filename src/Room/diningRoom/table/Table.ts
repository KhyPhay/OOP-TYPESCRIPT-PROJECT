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
}