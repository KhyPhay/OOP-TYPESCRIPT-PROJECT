import { FoodCategory, Food } from "./Food";
import { VitaulsCategory } from "../Victuals";

export class PackageFood extends Food{
    constructor(foodCategory: FoodCategory.PackageFood,vitauls: VitaulsCategory.FOOD ,name: string, price: number,private madeDate: Date,private expirationDate: Date){
        super(foodCategory,vitauls,name, price);
    }
    getExpirationDate():Date{
        return this.expirationDate;
    }
    
}

