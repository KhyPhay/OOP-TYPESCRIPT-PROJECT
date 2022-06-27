import {DateTime} from "./DateTime"
export abstract class Event {
  constructor(
    protected start: DateTime,
    protected end: DateTime,
    
  ) {}

}
