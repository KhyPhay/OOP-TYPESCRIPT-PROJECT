import { Vituals } from "../Vituals";
import { VitaulsType } from "../Vituals";

export enum FoodCategory{
    EveryDayFood,
    PackageFood,
}
export class TypeFood extends Vituals{
    constructor(protected foodCategory:FoodCategory,
        vitaulsType: VitaulsType,
        name: string, price: number){
        super(vitaulsType,name, price);
    }
}