import { Meal,MealCategory } from "./Meal";

export enum DrinkCategory{
    EveryDayDrink,
    PackageDrink,
}
export class Drink extends Meal{
    constructor(mealCategory: MealCategory.DRINK, name: string, price: number){
        super(mealCategory, name, price);
    }
}