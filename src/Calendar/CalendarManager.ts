
import { Event } from "./Event";

export class CalendarManager {
    private events:Event[]=[];

    getEvents():Event[] {
        return this.events;
    }
}