import { Staff, StaffCategory } from "./staff";
import { Gender } from "../Person";
export class Manager extends Staff{
    constructor(category: StaffCategory,id:number,name: string, age: number, gender: Gender) {
        super(category,id,name, age, gender);
    }
}