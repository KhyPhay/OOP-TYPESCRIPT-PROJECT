
import { Drink } from "./drink/Drink";
import { Food } from "./food/Food";

export class VictualsManager {
    private foods:Food[]=[];
    private drinks:Drink[]=[];

    addDrink(drink: Drink) {
        this.drinks.push(drink);
    }
    addFood(food:Food){
        this.foods.push(food);
    }

}