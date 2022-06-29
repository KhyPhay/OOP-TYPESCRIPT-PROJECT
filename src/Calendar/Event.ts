import { VIPRoom } from "../Room/diningRoom/VIPRoom";
import { Room } from "../Room/Room";
import {DateTime} from "./DateTime"
export  class Event {
  constructor(
    protected start: DateTime,
    protected end: DateTime,
  ){};

  
  hasEvent( other: Event): boolean {
    let result = false;
    if(this.start.getTime() < other.start.getTime()  && this.end.getTime() > other.end.getTime()){
      result = true;
    }
    return result;
  }

}
