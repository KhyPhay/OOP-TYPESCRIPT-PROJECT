
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
    
    addTable(tables: Table){
        return this.table.push(tables);
    }
    getTable(){
        return this.table
    }
    isAllTablesFree():boolean{
        let result = true;
        let tables = this.table;
        for(let table of tables){
            if(!table.getTableNoCustomer()){
                result = false;
            }
        }
        return result;
    }

    getRoomCatetory(){
        return this.roomCategory;
    }

}