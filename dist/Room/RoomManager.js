"use strict";
exports.__esModule = true;
exports.RoomManager = void 0;
var RoomManager = /** @class */ (function () {
    function RoomManager() {
        this.diningRooms = [];
    }
    // public kichenRoom : Kitchen;
    RoomManager.prototype.addDinningRoom = function (room) {
        return this.diningRooms.push(room);
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;
