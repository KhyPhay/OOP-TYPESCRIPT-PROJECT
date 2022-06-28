import { Drink,DrinkCategory } from "./Drink";
import { VitaulsCategory } from "../Vituals";
export class EveryDayDrink extends Drink{
    constructor(drinkCategory:DrinkCategory.EveryDayDrink, VitaulsCategory: VitaulsCategory.DRINK, name: string, price: number){
        super(drinkCategory,VitaulsCategory,name, price);
    }
}