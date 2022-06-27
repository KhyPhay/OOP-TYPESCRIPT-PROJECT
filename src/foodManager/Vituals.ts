
export enum VitaulsType {
    TYPE_FOOD,
    TYPE_DRINK,
}

export abstract class Vituals{
    constructor(protected vitaulsType:VitaulsType,  protected name : string, protected price: number){}
}