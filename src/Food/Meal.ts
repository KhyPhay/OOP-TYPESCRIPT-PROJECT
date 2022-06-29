
export enum MealCategory {
    MEAL,
    DRINK,
}

export abstract class Meal{
    constructor(protected vitaulsCategory :MealCategory,  protected name : string, protected price: number){}

    getPrice(): number{
        return this.price;
    }
}
