
import { CustomerVIP } from "./human/customer/CustomerVIP";
import { Customer, CustomerCategory} from "./human/customer/Customer";
import {Gender} from "./human/Person";
import{Restaurant} from "./Restaurant";
import{Address} from "./Address";
import{HumanManager} from "./human/HumanManager";
import { Manager } from "./human/staff/Manager";
import { StaffCategory } from "./human/staff/Staff";
import { Chef } from "./human/staff/Chef";


// address of restaurant
let addess = new Address('phnom penh',2004);
let restaurant = new Restaurant('Luckily', addess);

// create customerVIP in restaurant
let vip = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Gender.FEMALE)
let vip1 = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Gender.FEMALE)
// console.log(vip.isEqual(vip1));

// create staffs in restaurant
let manager = new Manager(StaffCategory.MANAGER,1,'Lina',30, Gender.FEMALE);
manager.setSalary(10000);
let chef = new Chef(StaffCategory.CHEF,2,'Dara',40, Gender.MALE);
manager.setSalary(5000);

let human = new HumanManager()
restaurant.hr = human;

restaurant.hr.addCustomer(vip1)
restaurant.hr.addCustomer(vip)
restaurant.hr.getCustomerVIP();
console.log(restaurant.hr.getCustomerNormal())

restaurant.hr.addStaff(manager);
restaurant.hr.addStaff(chef);

