import { Drink,DrinkCategory } from "./Drink";
import { VitaulsCategory } from "../Vituals";

export class PackageDrink extends Drink{
    constructor(categoryDrink: DrinkCategory.PackageDrink,vitauls: VitaulsCategory.DRINK ,name: string, price: number){
        super(categoryDrink,vitauls,name, price);
    }
}