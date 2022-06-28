
export enum VitaulsCategory {
    FOOD,
    DRINK,
}

export abstract class Vituals{
    constructor(protected vitaulsCategory :VitaulsCategory,  protected name : string, protected price: number){}
}
