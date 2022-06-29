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
var Ingredient_1 = require("./room/kitchen/Ingredient");
var Item_1 = require("./room/kitchen/Item");
var Material_1 = require("./room/kitchen/Material");
var RoomManager_1 = require("./Room/RoomManager");
var Kitchen_1 = require("./room/kitchen/Kitchen");
var NormalRoom_1 = require("./room/diningRoom/NormalRoom");
var DiningRoom_1 = require("./Room/diningRoom/DiningRoom");
var VIPRoom_1 = require("./Room/diningRoom/VIPRoom");
var Table_1 = require("./Room/diningRoom/table/Table");
var CustomerBooked_1 = require("./calendar/CustomerBooked");
var Waiter_1 = require("./human/staff/Waiter");
var Meal_1 = require("./meal/Meal");
var Food_1 = require("./meal/Food");
var MealManager_1 = require("./meal/MealManager");
var Dessert_1 = require("./meal/Dessert");
var Drink_1 = require("./meal/Drink");
var CalendarManager_1 = require("./calendar/CalendarManager");
// address of restaurant
var addess = new Address_1.Address('phnom penh', 2004);
var restaurant = new Restaurant_1.Restaurant('Luckily', addess);
// create customerVIP in restaurant
var vip = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.MALE, "884382832");
var vip1 = new CustomerVIP_1.CustomerVIP(Customer_1.CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Person_1.Gender.FEMALE, "0884392832");
// console.log(vip.isEqual(vip1));
// create staffs in restaurant
var manager = new Manager_1.Manager(Staff_1.StaffCategory.MANAGER, 1, 'Lina', 30, Person_1.Gender.FEMALE, "0884392832");
manager.setSalary(10000);
var chef = new Chef_1.Chef(Staff_1.StaffCategory.CHEF, 2, 'Dara', 40, Person_1.Gender.MALE, "884382832");
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
var Coffee = new Drink_1.Drink(Meal_1.MealCategory.DRINK, 'Coffee', 200);
var Smoothie = new Drink_1.Drink(Meal_1.MealCategory.DRINK, 'Smoothie', 300);
var Cupcakes = new Dessert_1.Dessert(Meal_1.MealCategory.Dessert, 'Cupcakes', 600);
// create food and drink in restaurant
var soups = new Food_1.Food(Meal_1.MealCategory.MEAL, 'soups', 500);
// add drink and food in FoodManager
var victual = new MealManager_1.MealManager();
restaurant.victuals = victual;
restaurant.victuals.addMeal(Smoothie);
restaurant.victuals.addMeal(Coffee);
restaurant.victuals.addMeal(soups);
restaurant.victuals.addMeal(Cupcakes);
// console.log(victual)
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
table.addCustomerVIP(vip1);
// console.log(table)
var table1 = new Table_1.Table(2, 5);
var table3 = new Table_1.Table(3, 5);
var table4 = new Table_1.Table(4, 5);
var normalRoom = new NormalRoom_1.NormalRoom(1, DiningRoom_1.RoomCategory.NORMALROOM);
var vipRoom = new VIPRoom_1.VIPRoom(1, DiningRoom_1.RoomCategory.VIPROOM);
vipRoom.addTable(table);
vipRoom.addTable(table1);
normalRoom.addTable(table3);
normalRoom.addTable(table4);
restaurant.rooms.addDiningRoom(normalRoom);
restaurant.rooms.addDiningRoom(vipRoom);
// console.log(normalRoom.getTable())
// calendar
// let start = new Date(2022,12,4,2);
// let end = new Date(2022,12,4,8);
var start = new Date("December 17, 2022 16:00:00");
var end = new Date("December 18, 2022 16:00:00");
var waiter = new Waiter_1.Waiter(Staff_1.StaffCategory.WAITRON, 1, 'chanthy', 20, Person_1.Gender.FEMALE, "0884392832");
var customerBooked = new CustomerBooked_1.CustomerBooked(vip1, vipRoom, start, end);
customerBooked.addWaiter(waiter);
var Calendar = new CalendarManager_1.CalendarManager();
restaurant.calendar = Calendar;
restaurant.calendar.addEvent(customerBooked);
console.log(restaurant);
