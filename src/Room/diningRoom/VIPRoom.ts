import { DiningRoom } from "./DiningRoom";
import { RoomCategory } from "./DiningRoom";
import { Event } from "../../calendar/Event";
import { Table } from "./table/Table";

export class VIPRoom extends DiningRoom{
    private event?: Event = undefined;
    constructor(id:number, roomCategory:RoomCategory.VIPROOM){
        super(id,roomCategory);
    }

    setEvent(event:Event){
        this.event = event;
    }
    
    getEvent(){
        return this.event;
    }
}