
import { CustomerVIP } from "./human/customer/CustomerVIP";
import { Customer, CustomerCategory} from "./human/customer/Customer";
import {Gender} from "./human/Person";


let vip = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Gender.FEMALE)
let vip1 = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Gender.MALE)

console.log(vip.isEqual(vip1));
