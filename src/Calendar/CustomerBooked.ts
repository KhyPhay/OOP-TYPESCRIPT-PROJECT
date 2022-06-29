import { Event } from "./Event";
import {CustomerVIP} from "../human/customer/CustomerVIP";
import {Waiter} from "../human/staff/Waitron"
import { VIPRoom } from "../Room/diningRoom/VIPRoom";
import { DateTime } from "./DateTime";

export class CustomerBooked extends Event {
    private waitrons:Waiter[]=[];
    constructor(private customerVIP: CustomerVIP, room: VIPRoom,start: DateTime, end: DateTime){
        super(start, end,room);
    }
    addWaiter(waitron: Waiter){
        return this.waitrons.push(waitron);
    }
}

