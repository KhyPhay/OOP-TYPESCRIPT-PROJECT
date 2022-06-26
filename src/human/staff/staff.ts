import { Person } from "../Person";

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

}
