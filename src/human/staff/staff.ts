import { Person, Gender } from "../Person";

export enum StaffCategory{
    CHEF,
    RECEPTIONIST,
    SECURITY,
    MANAGER,
    CLEANER,
    DISHWASHER,
    WAITRON,
}
export class Staff extends Person {
    private salary: number = 0;
    constructor( private staffCategory: StaffCategory, id:number,name: string, age:number, gender: Gender){
        super(id, name, age, gender);
    }
}
