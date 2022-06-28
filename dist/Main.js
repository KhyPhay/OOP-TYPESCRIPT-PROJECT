"use strict";
exports.__esModule = true;
var CustomerVIP_1 = require("./human/customer/CustomerVIP");
var Customer_1 = require("./human/customer/Customer");
var Person_1 = require("./human/Person");
var Restaurant_1 = require("./Restaurant");
var Address_1 = require("./Address");
var HumanManager_1 = require("./human/HumanManager");
var Manager_1 = require("./human/staff/Manager");
var Staff_1 = require("./human/staff/Staff");
var Chef_1 = require("./human/staff/Chef");
var addess = new Address_1.Address('phnom penh', 2004);
var restaurant = new Restaurant_1.Restaurant('Luckily', addess);
// console.log(restaurant)
// create customer
var vip = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.FEMALE);
var vip1 = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.FEMALE);
// console.log(vip.isEqual(vip1));
// create manager
var manager = new Manager_1.Manager(Staff_1.StaffCategory.MANAGER, 1, 'Lina', 30, Person_1.Gender.FEMALE);
manager.setSalary(10000);
var chef = new Chef_1.Chef(Staff_1.StaffCategory.CHEF, 2, 'Dara', 40, Person_1.Gender.MALE);
var human = new HumanManager_1.HumanManager();
human.addCustomerVIP(vip);
restaurant.hr = human;
restaurant.hr.addStaff(manager);
restaurant.hr.addStaff(chef);
console.log(human);
