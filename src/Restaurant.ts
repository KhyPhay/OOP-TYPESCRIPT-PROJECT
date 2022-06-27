import { Address } from "./Address";
import { RoomManager } from "./Room/RoomManager";
import { HumanManager } from "./human/HumanManager";
import { CalendarManager } from "./calendar/CalendarManager";

export class Restaurant {
    constructor(private name: string, private address: Address){};
    public calendar: CalendarManager = new CalendarManager();
    public rooms : RoomManager = new RoomManager();
    public hr: HumanManager = new HumanManager();
}
