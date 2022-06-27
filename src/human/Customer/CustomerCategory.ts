import { Person } from "../Person";
import { Gender } from "../Person";

export enum CustomerCategory {
    VIP,
    NORMAL,
};
export class Customer extends Person{
    constructor(
        protected category: CustomerCategory,id: number,name: string,age: number,gender: Gender) {
        super(id,name, age, gender);
    }
}