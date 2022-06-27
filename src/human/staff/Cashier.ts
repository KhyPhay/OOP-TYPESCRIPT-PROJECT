import { Staff,StaffCategory } from "./Staff";
import { Gender } from "../Person";
// import { StaffCategory } from "./staff";

export class Cashier extends Staff{
    constructor(category: StaffCategory,id:number,name: string, age: number, gender: Gender) {
        super(category,id,name, age, gender);
    }
}