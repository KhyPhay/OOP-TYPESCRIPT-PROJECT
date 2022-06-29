"use strict";
exports.__esModule = true;
exports.RoomManager = void 0;
var DiningRoom_1 = require("./diningRoom/DiningRoom");
var RoomManager = /** @class */ (function () {
    function RoomManager() {
        this.diningRooms = [];
        this.kitchenRoom = [];
    }
    RoomManager.prototype.addDiningRoom = function (room) {
        this.diningRooms.push(room);
    };
    RoomManager.prototype.addKitchenRoom = function (kichenRoom) {
        return this.kitchenRoom.push(kichenRoom);
    };
    RoomManager.prototype.getVIPRoomFree = function (event) {
        var _a;
        var diningRooms = this.diningRooms;
        for (var _i = 0, diningRooms_1 = diningRooms; _i < diningRooms_1.length; _i++) {
            var room = diningRooms_1[_i];
            if (room.isAllTablesFree() && room.getRoomCatetory() === DiningRoom_1.RoomCategory.VIPROOM) {
                var vipRoom = room;
                if (vipRoom.getEvent() === undefined || !((_a = vipRoom.getEvent()) === null || _a === void 0 ? void 0 : _a.hasEvent(event))) {
                    return vipRoom;
                }
            }
        }
        return undefined;
    };
    RoomManager.prototype.addCustomerVIP = function (customer, event) {
        var room = this.getVIPRoomFree(event);
        if (room !== undefined) {
            room.addCustomer(customer);
        }
    };
    return RoomManager;
}());
exports.RoomManager = RoomManager;
