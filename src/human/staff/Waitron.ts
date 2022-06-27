
import { Staff, StaffCategory } from "./Staff";
import { Gender} from "../Person";

export class Waitron extends Staff{
    constructor(staffCategory: StaffCategory.WAITRON, id:number,name: string, age:number, gender: Gender){
        super(staffCategory, id, name, age, gender)
    }
}