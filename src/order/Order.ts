import { DateTime } from "../calendar/DateTime";
import { Waiter } from "../human/staff/Waiter";
import { Table } from "../Room/diningRoom/table/Table";
import { Meal } from "../meal/Meal";

export class Order {
    private meal : Meal[]=[];
    constructor(private date : DateTime, private table : Table, private waitron: Waiter){}

    getPriceFromOrder(){
        let price = 0;
        for(let victual of this.meal){
            price += victual.getPrice();
        }
        return price;
    }
}