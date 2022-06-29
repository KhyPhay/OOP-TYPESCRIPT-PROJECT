import { CustomerVIP } from "./human/customer/CustomerVIP";
import { Customer, CustomerCategory} from "./human/customer/Customer";
import {Gender} from "./human/Person";
import{Restaurant} from "./Restaurant";
import{Address} from "./Address";
import{HumanManager} from "./human/HumanManager";
import { Manager } from "./human/staff/Manager";
import { StaffCategory } from "./human/staff/Staff";
import { Chef } from "./human/staff/Chef";
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
import { Waiter } from "./human/staff/Waiter";
import { Meal, MealCategory } from "./meal/Meal";
import { Food } from "./meal/Food";
import { MealManager } from "./meal/MealManager";
import { Dessert } from "./meal/Dessert";
import { Drink } from "./meal/Drink";
import { CalendarManager } from "./calendar/CalendarManager";
import {Event} from "./calendar/Event"







// address of restaurant
let addess = new Address('phnom penh',2004);
let restaurant = new Restaurant('Luckily', addess);

// create customerVIP in restaurant
let vip = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Gender.MALE,"884382832");
let vip1 = new CustomerVIP(CustomerCategory.CUSTOMER_VIP, 1, "Thib", 19, Gender.FEMALE, "0884392832");
// console.log(vip.isEqual(vip1));

// create staffs in restaurant
let manager = new Manager(StaffCategory.MANAGER,1,'Lina',30, Gender.FEMALE, "0884392832");
manager.setSalary(10000);
let chef = new Chef(StaffCategory.CHEF,2,'Dara',40, Gender.MALE, "884382832");
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
let Coffee = new Drink(MealCategory.DRINK,'Coffee',200);
let Smoothie  = new Drink (MealCategory.DRINK,'Smoothie', 300);
let Cupcakes = new Dessert(MealCategory.Dessert,'Cupcakes',600)

// create food and drink in restaurant
let soups = new Food(MealCategory.MEAL,'soups',500);

// add drink and food in FoodManager
let victual = new MealManager()
restaurant.victuals = victual;
restaurant.victuals.addMeal(Smoothie);
restaurant.victuals.addMeal(Coffee);
restaurant.victuals.addMeal(soups);
restaurant.victuals.addMeal(Cupcakes);
// console.log(victual)



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
table.addCustomerVIP(vip1)
// console.log(table)

let table1 = new Table(2,5)
let table3 = new Table(3,5)
let table4 = new Table(4,5)
let normalRoom = new NormalRoom(1,RoomCategory.NORMALROOM);
let vipRoom = new VIPRoom(1,RoomCategory.VIPROOM);
vipRoom.addTable(table);
vipRoom.addTable(table1);
normalRoom.addTable(table3)
normalRoom.addTable(table4)

restaurant.rooms.addDiningRoom(normalRoom);
restaurant.rooms.addDiningRoom(vipRoom);
// console.log(normalRoom.getTable())

// calendar
// let start = new Date(2022,12,4,2);
// let end = new Date(2022,12,4,8);

let start = new Date("December 17, 2022 16:00:00");
let end = new Date("December 18, 2022 16:00:00");
let waiter = new Waiter(StaffCategory.WAITRON,1,'chanthy',20,Gender.FEMALE, "0884392832");
let customerBooked = new CustomerBooked(vip1, vipRoom,start,end);
customerBooked.addWaiter(waiter);
let Calendar = new CalendarManager();
restaurant.calendar = Calendar;
restaurant.calendar.addEvent(customerBooked)
let even2 = new Event(start, end);
console.log(restaurant.rooms.getVIPRoomFree());


