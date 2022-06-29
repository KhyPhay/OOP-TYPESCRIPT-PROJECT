import { DateTime } from "../calendar/DateTime";
import { Waitron } from "../human/staff/Waitron";
import { Table } from "../Room/diningRoom/table/Table";
import { Meal } from "../Food/Meal";

export class Order {
    private meal : Meal[]=[];
    constructor(private date : DateTime, private table : Table, private waitron: Waitron){}

    getPriceFromOrder(){
        let price = 0;
        for(let victual of this.meal){
            price += victual.getPrice();
        }
        return price;
    }
}