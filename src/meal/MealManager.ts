
import { Meal } from "./Meal";

export class MealManager {
    private meal:Meal[]=[];

    addMeal(...meal:Meal[]){
        this.meal = this.meal.concat(meal);
    }

}