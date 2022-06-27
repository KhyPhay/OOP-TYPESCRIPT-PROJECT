import { CustomerNormal } from "./customer/CustomerNormal";
import { CustomerVIP } from "./customer/CustomerVIP";
import { CustomerCategory } from "./customer/CustomerCategory";
import { Staff } from "./staff/Staff";
export class HumanManager {
    private customerVIP: CustomerVIP[]=[];
    private customerNormal: CustomerNormal[]=[];
    private staffs : Staff[]=[];

    addCustomerVIP(customerVIP: CustomerVIP) {
        this.customerVIP.push(customerVIP);
      }
    addCustomerNormal(customerNormal: CustomerNormal) {
        this.customerNormal.push(customerNormal);
      }
      getCustomerVIP() {
        return this.customerVIP;
      }
      getCustomerNormal() {
        return this.customerNormal;
      }
    
      addStaff(staff: Staff) {
        this.staffs.push(staff);
      }
    
      getStaffs() {
        return this.staffs;
      }
};