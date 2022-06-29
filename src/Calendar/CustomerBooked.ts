
import { DateTime } from "./DateTime";
import { Event } from "./Event";
import {CustomerVIP} from "../human/customer/CustomerVIP";
import {Waitron} from "../human/staff/Waitron"
import { VIPRoom } from "../Room/diningRoom/VIPRoom";

export class CustomerBooked extends Event {
    private waitrons:Waitron[]=[];
    constructor(private customerVIP: CustomerVIP, room: VIPRoom,start: DateTime, end: DateTime){
        super(start, end,room);
    }
    addWaitron(waitron: Waitron){
        return this.waitrons.push(waitron);
    }
}

