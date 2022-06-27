
import { DateTime } from "./DateTime";
import { Event } from "./Event";
import {CustomerVIP} from "../human/customer/CustomerVIP";
import {Waitron} from "../human/staff/Waitron"
export class CustomerBooked {
    private customerVIP: CustomerVIP;
    private waitron:Waitron[]=[];
    private events:Event[]=[];


}

