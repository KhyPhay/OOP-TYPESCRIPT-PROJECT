import {DateTime} from "./DateTime"
export abstract class Event {
  constructor(
    protected start: DateTime,
    protected end: DateTime,
    
  ) {}
  
  hasEvent( other: Event): boolean {
    let result = false;
    if(this.start.getTime() < other.start.getTime()  && this.end.getTime() > other.end.getTime()){
      result = true;
    }
    return result;
  }

}
