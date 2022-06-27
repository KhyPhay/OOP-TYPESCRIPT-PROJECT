import { DiningRoom } from "./diningRoom/DiningRoom";


export class RoomManager {
   public diningRooms : DiningRoom[]=[];
   // public kichenRoom : Kitchen;

   addDiningRoom(room: DiningRoom) {
      return this.diningRooms.push(room);
   }
}