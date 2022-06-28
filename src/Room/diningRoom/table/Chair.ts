import { Customer } from "../../../human/customer/Customer";
import { CustomerNormal } from "../../../human/customer/CustomerNormal";
import { CustomerVIP } from "../../../human/customer/CustomerVIP";
export class Chair{
    private customer?: Customer = undefined; 
    constructor(private id: number){}
    getCustomer(){
        return this.customer;
    }
    
}