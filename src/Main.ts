import { CustomerVIP } from "./human/customer/CustomerVIP";
import { Customer, CustomerCategory} from "./human/customer/Customer";
import {Gender} from "./human/Person";
import{Restaurant} from "./Restaurant";
import{Address} from "./Address";
import{HumanManager} from "./human/HumanManager";
import { Manager } from "./human/staff/Manager";
import { StaffCategory } from "./human/staff/Staff";
import { Chef } from "./human/staff/Chef";
import { VictualsManager } from "./victuals/VictualsManager";
import { EveryDayDrink } from "./victuals/drink/EverydayDrink";
import { DrinkCategory } from "./victuals/drink/Drink";
import { VitaulsCategory } from "./victuals/Victuals";
import { PackageDrink } from "./victuals/drink/PackageDrink";
import { EveryDayFood } from "./victuals/food/EverydayFood";
import { FoodCategory } from "./victuals/food/Food";
import { PackageFood } from "./victuals/food/PackageFood";
import { Ingredient } from "./room/kitchen/Ingredient";
import { ItemCategory } from "./room/kitchen/Item";
import { Material } from "./room/kitchen/Material";
import { RoomManager } from "./Room/RoomManager";
import{Kitchen} from "./room/kitchen/Kitchen"
import { NormalRoom } from "./room/diningRoom/NormalRoom";
import { RoomCategory } from "./Room/diningRoom/DiningRoom";
import { VIPRoom } from "./Room/diningRoom/VIPRoom";
import { Table } from "./Room/diningRoom/table/Table";
import { CustomerBooked } from "./calendar/CustomerBooked";
import { Waitron } from "./human/staff/Waitron";

// address of restaurant
let addess = new Address('phnom penh',2004);
let restaurant = new Restaurant('Luckily', addess);

// create customerVIP in restaurant
let vip = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19,884382832);
let vip1 = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19,884392832);
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
// console.log(restaurant.hr.getCustomerNormal())

restaurant.hr.addStaff(manager);
restaurant.hr.addStaff(chef);
// console.log(human)

// create drink in restaurant
let Coffee = new EveryDayDrink(DrinkCategory.EveryDayDrink, VitaulsCategory.DRINK,'Coffee',150);
let Smoothie = new EveryDayDrink(DrinkCategory.EveryDayDrink, VitaulsCategory.DRINK,'Smoothie',200);

let milk_madeDate = new Date("December 17, 2019 16:30:00")
let milk_expirationDate = new Date("December 17, 2022 16:30:00")
let milk = new PackageDrink(DrinkCategory.PackageDrink, VitaulsCategory.DRINK,'Milk',140,milk_madeDate,milk_expirationDate);
// create food in restaurant
let soups = new EveryDayFood(FoodCategory.EveryDayFood, VitaulsCategory.FOOD,'soups',350);

let noodles_madeDate = new Date("December 17, 2018 ")
let noodles_expirationDate = new Date("December 17, 2023 ")
let noodles = new PackageFood(FoodCategory.PackageFood, VitaulsCategory.FOOD,'noodles',350,noodles_madeDate,noodles_expirationDate);

// add drink into VictualsManager
let victuals = new VictualsManager();
restaurant.victuals = victuals;
restaurant.victuals.addDrink(milk);
restaurant.victuals.addDrink(Coffee);
restaurant.victuals.addDrink(Smoothie);

// add food into VictualsManager
restaurant.victuals.addFood(soups);
restaurant.victuals.addFood(noodles);

// create Ingredient
let meat = new Ingredient('meat',900,ItemCategory.INGREDIENT);
let vegetables = new Ingredient('vegetables',900,ItemCategory.INGREDIENT);
let fish = new Ingredient('fish',900,ItemCategory.INGREDIENT);
// create material

let plate = new Material('plate',300,ItemCategory.MATERIAL);
let Knife = new Material('Knife',20,ItemCategory.MATERIAL);
// add material and ingredient to Kitchen
let kitchen = new Kitchen(1);
kitchen.addMaterial(plate);
kitchen.addMaterial(Knife);
kitchen.addIngredient(meat);
kitchen.addIngredient(fish);
kitchen.addIngredient(vegetables);
let rooms = new RoomManager();
restaurant.rooms = rooms;
restaurant.rooms.addKitchenRoom(kitchen);
// console.log(kitchen)

// add table to diningRoom
let table = new Table(1,5);
table.addCustomer(vip1);


let table1 = new Table(2,5)
let table3 = new Table(3,5)
let table4 = new Table(4,5)
let normalRoom = new NormalRoom(1,RoomCategory.NORMALROOM);
let vipRoom = new VIPRoom(1,RoomCategory.VIPROOM);
vipRoom.addTable(table);
vipRoom.addTable(table1);
normalRoom.addTable(table3)
normalRoom.addTable(table4)
// console.log(vipRoom.addTable(table))

restaurant.rooms.addDiningRoom(normalRoom);
restaurant.rooms.addDiningRoom(vipRoom);
// console.log(normalRoom.getTable())

// calendar
// let start = new Date(2022,12,4,2);
// let end = new Date(2022,12,4,8);

let start = new Date("December 17, 2022 16:00:00");
let end = new Date("December 18, 2022 16:00:00");
let waitron = new Waitron(StaffCategory.WAITRON,1,'chanthy',20,Gender.FEMALE);
let customerBooked = new CustomerBooked(vip1, vipRoom,start,end);
customerBooked.addWaitron(waitron);
console.log(customerBooked)


