import { Address } from "./Address";
import { RoomManager } from "./Room/RoomManager";
import { HumanManager } from "./human/HumanManager";
import { CalendarManager } from "./calendar/CalendarManager";
import { Vituals } from "./victuals/Victuals";
import { VictualsManager } from "./victuals/VictualsManager";
import { OrderManager } from "./order/orderManager";

export class Restaurant {
    private address: Address;
    private name: string;
    constructor(name: string,address: Address){
        this.address = address;
        this.name = name;
    }


    public calendar: CalendarManager = new CalendarManager();
    public rooms : RoomManager = new RoomManager();
    public hr: HumanManager = new HumanManager();
    public victuals: VictualsManager = new VictualsManager();
    public order : OrderManager = new OrderManager();
}
