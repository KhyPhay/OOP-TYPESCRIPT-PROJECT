"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var RoomManager_1 = require("./Room/RoomManager");
var HumanManager_1 = require("./human/HumanManager");
var CalendarManager_1 = require("./calendar/CalendarManager");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        this.name = name;
        this.address = address;
        this.calendar = new CalendarManager_1.CalendarManager();
        this.rooms = new RoomManager_1.RoomManager();
        this.hr = new HumanManager_1.HumanManager();
    }
    ;
    return Restaurant;
}());
exports.Restaurant = Restaurant;
