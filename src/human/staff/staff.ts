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

    constructor(
        protected category: StaffCategory,id: number,name: string,age: number,gender: Gender) {
        super(id,name, age, gender);
    }
    setSalary(salary: number) {
        this.salary = salary;
      }
    
      getSalary() {
        return this.salary;
      }
      
      getCatetory(){
        return this.category;
      }
    
}
