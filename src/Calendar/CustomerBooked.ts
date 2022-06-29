import { Event } from "./Event";
import {CustomerVIP} from "../human/customer/CustomerVIP";
import {Waiter} from "../human/staff/Waiter"
import { VIPRoom } from "../Room/diningRoom/VIPRoom";
import { DateTime } from "./DateTime";

export class CustomerBooked extends Event {
    private waiters:Waiter[]=[];
    constructor(private customerVIP: CustomerVIP, private room: VIPRoom,start: DateTime, end: DateTime){
        super(start, end);
    }
    
    addWaiter(waitron: Waiter){
        return this.waiters.push(waitron);
    }

    getRoom(){
        return this.room;
    }
}

