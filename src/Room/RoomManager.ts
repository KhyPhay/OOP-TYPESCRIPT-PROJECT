import { DiningRoom } from "./diningRoom/DiningRoom";
import { Kitchen } from "./kitchen/Kitchen";
import { RoomCategory } from "./diningRoom/DiningRoom";
import { VIPRoom } from "./diningRoom/VIPRoom";
import { Event } from "../calendar/Event";
export class RoomManager {
   public diningRooms : DiningRoom[]=[];
   public kitchenRoom : Kitchen[]=[];

   addDiningRoom(room: DiningRoom) {
      return this.diningRooms.push(room);
   }
   addKitchenRoom(kichenroom: Kitchen) {
      return this.kitchenRoom.push(kichenroom);
   }
   

   getVIPRoomFree(event: Event):DiningRoom | undefined {
      let diningRooms = this.diningRooms
      for(let room of diningRooms) {
         if(room.isAllTablesFree() && room.getRoomCatetory()===RoomCategory.VIPROOM){
            let vipRoom = room as VIPRoom;
            if(vipRoom.getEvent() === undefined || !vipRoom.getEvent()?.hasEvent(event)){
               return room;
            }
         }
      }
      return undefined;
   }
}