import { Vituals,VitaulsCategory } from "../Vituals";

export enum DrinkCategory{
    EveryDayDrink,
    PackageDrink,
}
export class Drink extends Vituals{
    constructor(protected drinkCategory:DrinkCategory,  victualsCategory: VitaulsCategory.DRINK,name: string, price: number){
        super(victualsCategory,name, price);
    }
}