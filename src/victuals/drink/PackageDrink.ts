import { Drink,DrinkCategory } from "./Drink";
import { VitaulsCategory } from "../Victuals";

export class PackageDrink extends Drink{
    constructor(categoryDrink: DrinkCategory.PackageDrink,vitauls: VitaulsCategory.DRINK ,name: string, price: number,private madeDate: Date,private expirationDate: Date){
        super(categoryDrink,vitauls,name, price);
    }
    getExpirationDate():Date{
        return this.expirationDate;
    }
}
