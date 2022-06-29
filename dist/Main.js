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
var Ingredient_1 = require("./room/kitchen/Ingredient");
var Item_1 = require("./room/kitchen/Item");
var Material_1 = require("./room/kitchen/Material");
var RoomManager_1 = require("./Room/RoomManager");
var Kitchen_1 = require("./room/kitchen/Kitchen");
var NormalRoom_1 = require("./room/diningRoom/NormalRoom");
var DiningRoom_1 = require("./Room/diningRoom/DiningRoom");
var VIPRoom_1 = require("./Room/diningRoom/VIPRoom");
var Table_1 = require("./Room/diningRoom/table/Table");
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
var noodles_madeDate = new Date("December 17, 2018 ");
var noodles_expirationDate = new Date("December 17, 2023 ");
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
// create Ingredient
var meat = new Ingredient_1.Ingredient('meat', 900, Item_1.ItemCategory.INGREDIENT);
var vegetables = new Ingredient_1.Ingredient('vegetables', 900, Item_1.ItemCategory.INGREDIENT);
var fish = new Ingredient_1.Ingredient('fish', 900, Item_1.ItemCategory.INGREDIENT);
// create material
var plate = new Material_1.Material('plate', 300, Item_1.ItemCategory.MATERIAL);
var Knife = new Material_1.Material('Knife', 20, Item_1.ItemCategory.MATERIAL);
// add material and ingredient to Kitchen
var kitchen = new Kitchen_1.Kitchen(1);
kitchen.addMaterial(plate);
kitchen.addMaterial(Knife);
kitchen.addIngredient(meat);
kitchen.addIngredient(fish);
kitchen.addIngredient(vegetables);
var rooms = new RoomManager_1.RoomManager();
restaurant.rooms = rooms;
restaurant.rooms.addKitchenRoom(kitchen);
// console.log(kitchen)
// add table to diningRoom
var table = new Table_1.Table(1, 5);
table.addCustomer(vip1);
console.log(table.getTableNoCustomer());
var table1 = new Table_1.Table(2, 5);
var table3 = new Table_1.Table(3, 5);
var table4 = new Table_1.Table(4, 5);
var normalRoom = new NormalRoom_1.NormalRoom(1, DiningRoom_1.RoomCategory.NORMALROOM);
var vipRoom = new VIPRoom_1.VIPRoom(1, DiningRoom_1.RoomCategory.VIPROOM);
vipRoom.addTable(table);
vipRoom.addTable(table1);
normalRoom.addTable(table3);
normalRoom.addTable(table4);
// console.log(vipRoom.addTable(table))
restaurant.rooms.addDiningRoom(normalRoom);
restaurant.rooms.addDiningRoom(vipRoom);
// console.log(normalRoom.getTable())
