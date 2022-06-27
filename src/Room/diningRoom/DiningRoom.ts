
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
}