import { Vituals } from "../Vituals";
import { VitaulsCategory} from "../Vituals";

export enum FoodCategory{
    EveryDayFood,
    PackageFood,
}

export class Food extends Vituals{
    constructor(protected foodCategory:FoodCategory,vitaulsCategory: VitaulsCategory.FOOD,name: string, price: number){
        super(vitaulsCategory,name, price);
    }
}