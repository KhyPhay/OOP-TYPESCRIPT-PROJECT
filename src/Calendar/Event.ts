import {DateTime} from "./DateTime"
import {VIPRoom} from "../Room/DinningRoom/VIPRoom"
export abstract class Event {
  constructor(
    protected start: DateTime,
    protected end: DateTime,
    protected room: VIPRoom,
  ) {}

}
