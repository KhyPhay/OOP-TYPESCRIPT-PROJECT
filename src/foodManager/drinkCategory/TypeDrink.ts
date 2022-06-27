import { Vituals,VitaulsType } from "../Vituals";

export enum DrinkCategory{
    EveryDayDrink,
    PackageDrink,
}
export class TypeDrink extends Vituals{
    constructor(protected drinkCategory:DrinkCategory,  VitaulsType: VitaulsType,name: string, price: number){
        super(VitaulsType,name, price);
    }
}