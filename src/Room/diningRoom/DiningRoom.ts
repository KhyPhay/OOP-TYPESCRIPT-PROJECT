
import { Room } from "../Room";
import { Table } from "./table/Table";
export enum RoomCategory{
    VIPROOM,
    NORMALROOM,
}

export class DiningRoom extends Room{
    protected table: Table[]=[];
    constructor(id:number, protected roomCategory:RoomCategory){
        super(id);
    }


    addTable(...table:Table[]){
        this.table = this.table.concat(...table);
    }

    isAllTablesFree():boolean{
        let result = true;
        let tables = this.table;
        for(let table of tables){
            if(!table.tableNoCustomer()){
                result = false;
            }
        }
        return result;
    }

    getRoomCatetory(){
        return this.roomCategory;
    }
    getTable(){
        return this.table;
    }

    getMaxNumberCustomer(){
        let tables = this.table
        let max = 0
        for(let table of tables){
            max += table.getNumberOfCustomers();
        }
        
        return max;
    }



}