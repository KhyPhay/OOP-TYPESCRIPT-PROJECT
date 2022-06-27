
import { DateTime } from "./DateTime";
import { Event } from "./Event";
import {CustomerNormal} from "../human/customer/CustomerNormal";
import {CustomerVIP} from "../human/customer/CustomerVIP";
import {Waitron} from "../human/staff/Waitron"

export class CustomerBooked {
    private customerVIP: CustomerVIP;
    private waitrons:Waitron[]=[];
    private event:Event;
}

