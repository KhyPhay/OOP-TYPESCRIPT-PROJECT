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
var VictualsManager_1 = require("./victuals/VictualsManager");
var EverydayDrink_1 = require("./victuals/drink/EverydayDrink");
var Drink_1 = require("./victuals/drink/Drink");
var Victuals_1 = require("./victuals/Victuals");
var PackageDrink_1 = require("./victuals/drink/PackageDrink");
var EverydayFood_1 = require("./victuals/food/EverydayFood");
var Food_1 = require("./victuals/food/Food");
var PackageFood_1 = require("./victuals/food/PackageFood");
// address of restaurant
var addess = new Address_1.Address('phnom penh', 2004);
var restaurant = new Restaurant_1.Restaurant('Luckily', addess);
// create customerVIP in restaurant
var vip = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.FEMALE);
var vip1 = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.FEMALE);
// console.log(vip.isEqual(vip1));
// create staffs in restaurant
var manager = new Manager_1.Manager(Staff_1.StaffCategory.MANAGER, 1, 'Lina', 30, Person_1.Gender.FEMALE);
manager.setSalary(10000);
var chef = new Chef_1.Chef(Staff_1.StaffCategory.CHEF, 2, 'Dara', 40, Person_1.Gender.MALE);
manager.setSalary(5000);
var human = new HumanManager_1.HumanManager();
restaurant.hr = human;
restaurant.hr.addCustomer(vip1);
restaurant.hr.addCustomer(vip);
restaurant.hr.getCustomerVIP();
// console.log(restaurant.hr.getCustomerNormal())
restaurant.hr.addStaff(manager);
restaurant.hr.addStaff(chef);
// console.log(human)
// create drink in restaurant
var Coffee = new EverydayDrink_1.EveryDayDrink(Drink_1.DrinkCategory.EveryDayDrink, Victuals_1.VitaulsCategory.DRINK, 'Coffee', 150);
var Smoothie = new EverydayDrink_1.EveryDayDrink(Drink_1.DrinkCategory.EveryDayDrink, Victuals_1.VitaulsCategory.DRINK, 'Smoothie', 200);
var milk_madeDate = new Date("December 17, 2019 16:30:00");
var milk_expirationDate = new Date("December 17, 2022 16:30:00");
var milk = new PackageDrink_1.PackageDrink(Drink_1.DrinkCategory.PackageDrink, Victuals_1.VitaulsCategory.DRINK, 'Milk', 140, milk_madeDate, milk_expirationDate);
// create food in restaurant
var soups = new EverydayFood_1.EveryDayFood(Food_1.FoodCategory.EveryDayFood, Victuals_1.VitaulsCategory.FOOD, 'soups', 350);
var noodles_madeDate = new Date("December 17, 2018 16:30:00");
var noodles_expirationDate = new Date("December 17, 2023 16:30:00");
var noodles = new PackageFood_1.PackageFood(Food_1.FoodCategory.PackageFood, Victuals_1.VitaulsCategory.FOOD, 'noodles', 350, noodles_madeDate, noodles_expirationDate);
// add drink into VictualsManager
var victuals = new VictualsManager_1.VictualsManager();
restaurant.victuals = victuals;
restaurant.victuals.addDrink(milk);
restaurant.victuals.addDrink(Coffee);
restaurant.victuals.addDrink(Smoothie);
// add food into VictualsManager
restaurant.victuals.addFood(soups);
restaurant.victuals.addFood(noodles);
console.log(victuals);
