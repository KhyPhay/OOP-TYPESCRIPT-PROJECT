import { DiningRoom } from "./DiningRoom";
import { RoomCategory } from "./DiningRoom";
export class VIPRoom extends DiningRoom{
    constructor(id:number, roomCategory:RoomCategory.VIPROOM){
        super(id,roomCategory);
    }
}