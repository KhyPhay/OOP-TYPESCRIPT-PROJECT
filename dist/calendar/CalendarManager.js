"use strict";
exports.__esModule = true;
exports.CalendarManager = void 0;
var CalendarManager = /** @class */ (function () {
    function CalendarManager() {
        this.events = [];
    }
    CalendarManager.prototype.getEvents = function () {
        return this.events;
    };
    CalendarManager.prototype.addEvent = function (event) {
        this.events.push(event);
    };
    CalendarManager.prototype.getEventRooms = function () {
        var rooms = [];
        var events = this.events;
        events.forEach(function (event) {
            rooms.push(event.getRoom());
        });
        return rooms;
    };
    return CalendarManager;
}());
exports.CalendarManager = CalendarManager;
