
import { Room } from "../Room/Room";
import { Event } from "./Event";

export class CalendarManager {
    private events:Event[]=[];

    getEvents():Event[] {
        return this.events;
    }
    addEvent(event: Event) {
        this.events.push(event);
      }

    getEventRooms(): Room[]{
        let rooms:Room[] = [];
        let events = this.events;
        events.forEach(event => {
            rooms.push(event.getRoom())
        });
        return rooms;
    }
}