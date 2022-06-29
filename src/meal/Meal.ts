
export enum MealCategory {
    MEAL,
    DRINK,
    Dessert,
}

export abstract class Meal{
    constructor(protected vitaulsCategory :MealCategory,  protected name : string, protected price: number){}

    getPrice(): number{
        return this.price;
    }
}
