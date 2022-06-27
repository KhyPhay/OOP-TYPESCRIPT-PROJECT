import { FoodCategory, TypeFood } from "./TypeFood";
import { VitaulsType } from "../Vituals";

export class PackageFood extends TypeFood{
    constructor(foodCategory:FoodCategory.EveryDayFood,vitaulsType: VitaulsType.TYPE_FOOD,name: string, price: number){
        super(foodCategory,vitaulsType,name, price);
    }
}