import { TypeDrink,DrinkCategory } from "./TypeDrink";
import { VitaulsType } from "../Vituals";
export class EveryDayDrink extends TypeDrink{
    constructor(drinkCategory:DrinkCategory.EveryDayDrink,VitaulsType: VitaulsType.TYPE_DRINK,name: string, price: number){
        super(drinkCategory,VitaulsType,name, price);
    }
}