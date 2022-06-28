import { FoodCategory, TypeFood } from "./TypeFood";
import { VitaulsType } from "../Vituals";

export class PackageFood extends TypeFood{
    constructor(foodCategory:FoodCategory.PackageFood,
        vitaulsType: VitaulsType.TYPE_FOOD,
        name: string,
        price: number,
        protected madeDate: Date, 
        protected expirationDate: Date){
        super(foodCategory,vitaulsType,name, price);
    }
    getExpirationDate():Date{
        return this.expirationDate;
    }
    
}

