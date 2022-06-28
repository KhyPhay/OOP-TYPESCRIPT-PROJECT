import { DiningRoom } from "./diningRoom/DiningRoom";
import { Kitchen } from "./kitchen/Kitchen";

export class RoomManager {
   public diningRooms : DiningRoom[]=[];
   public kitchenRoom : Kitchen[]=[];

   addDiningRoom(room: DiningRoom) {
      return this.diningRooms.push(room);
   }
}