
import {Room} from "../Room"
import { Ingredient } from "./Ingredient";
import { Material } from "./Material";
export class Kitchen extends Room {
    private material: Material[]=[];
    private ingredient: Ingredient[]=[];
    constructor(id: number){
        super(id)
    }
    addMaterial(material: Material){
        this.material.push(material);
    }
    addIngredient(ingredient: Ingredient){
        this.ingredient.push(ingredient);
    }
}