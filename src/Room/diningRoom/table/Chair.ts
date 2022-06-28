import { Customer } from "../../../human/customer/Customer";
import { CustomerNormal } from "../../../human/customer/CustomerNormal";
import { CustomerVIP } from "../../../human/customer/CustomerVIP";
export class Chair{
    private customerVIP?: CustomerVIP = undefined; 
    private customerNormal?: CustomerNormal = undefined; 
    constructor(private id: number){}
    getCustomerVIP(){
        return this.customerVIP;
    }
    getCustomerNormal(){
        return this.customerNormal;
    }
    
}