"use strict";
exports.__esModule = true;
var CustomerVIP_1 = require("./human/customer/CustomerVIP");
var Customer_1 = require("./human/customer/Customer");
var Person_1 = require("./human/Person");
var vip = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.FEMALE);
var vip1 = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.MALE);
console.log(vip.isEqual(vip1));
