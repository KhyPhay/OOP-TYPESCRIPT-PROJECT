import { TypeDrink,DrinkCategory } from "./TypeDrink";
import { VitaulsType } from "../Vituals";

export class PackageDrink extends TypeDrink{
    constructor(categoryDrink: DrinkCategory.PackageDrink,vitaulsType: VitaulsType.TYPE_DRINK,name: string, price: number){
        super(categoryDrink,vitaulsType,name, price);
    }
}