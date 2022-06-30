import { Order } from "./order";

export class OrderManager {
    private orders : Order[]=[];

    getAllOrder(){
        return this.orders
    }
}