"use strict";
exports.__esModule = true;
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(start, end, room) {
        this.start = start;
        this.end = end;
        this.room = room;
    }
    ;
    Event.prototype.hasEvent = function (other) {
        var result = false;
        if (this.start.getTime() < other.start.getTime() && this.end.getTime() > other.end.getTime()) {
            result = true;
        }
        return result;
    };
    Event.prototype.getRoom = function () {
        return this.room;
    };
    return Event;
}());
exports.Event = Event;
