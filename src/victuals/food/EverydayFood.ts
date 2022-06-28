import { FoodCategory, Food } from "./Food";
import { VitaulsCategory } from "../Victuals";

export class EveryDayFood extends Food{
    constructor(foodCategory:FoodCategory.EveryDayFood,vitaulsCategory: VitaulsCategory.FOOD ,name: string, price: number){
        super(foodCategory,vitaulsCategory,name, price);
    }
}