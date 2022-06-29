import { DiningRoom } from "./DiningRoom";
import { RoomCategory } from "./DiningRoom";
import { Event } from "../../calendar/Event";
import { Table } from "./table/Table";
import { CustomerVIP } from "../../human/customer/CustomerVIP";
export class VIPRoom extends DiningRoom{
    private event?: Event = undefined;
    private customerVIP : CustomerVIP[]=[];
    constructor(id:number, roomCategory:RoomCategory.VIPROOM){
        super(id,roomCategory);
    }

    setEvent(event:Event){
        this.event = event;
    }
    
    getEvent(){
        return this.event;
    }
    addCustomer(...customer:CustomerVIP[]){
        this.customerVIP = this.customerVIP.concat(...customer);
    }
}