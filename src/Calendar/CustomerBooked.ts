import { Event } from "./Event";
import { Room } from "../room/Room";
import {CustomerVIP} from "../human/customer/CustomerVIP";

export class CustomerBooked {
    constructor(private customerVIP: CustomerVIP, private event: Event, private room: Room) {

    }
}

