import { FoodCategory, Food } from "./Food";
import { VitaulsCategory } from "../Vituals";

export class PackageFood extends Food{
    constructor(foodCategory:FoodCategory.PackageFood,vitaulsType: VitaulsCategory.FOOD,name: string, price: number){
        super(foodCategory,vitaulsType,name, price);
    }
}