import { TypeDrink,DrinkCategory } from "./TypeDrink";
import { VitaulsType } from "../Vituals";

export class PackageDrink extends TypeDrink{
    constructor(categoryDrink: DrinkCategory.PackageDrink,
        vitaulsType: VitaulsType.TYPE_DRINK,
        name: string, 
        price: number,
        protected madeDate: Date,
        protected expirationDate: Date){
        super(categoryDrink,vitaulsType,name, price);
    }
    getExpirationDAte():Date{
        return this.expirationDate;
    }
}
