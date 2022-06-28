"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DiningRoom = exports.RoomCategory = void 0;
var Room_1 = require("../Room");
var RoomCategory;
(function (RoomCategory) {
    RoomCategory[RoomCategory["VIPROOM"] = 0] = "VIPROOM";
    RoomCategory[RoomCategory["NORMALROOM"] = 1] = "NORMALROOM";
})(RoomCategory = exports.RoomCategory || (exports.RoomCategory = {}));
var DiningRoom = /** @class */ (function (_super) {
    __extends(DiningRoom, _super);
    function DiningRoom(id, roomCategory) {
        var _this = _super.call(this, id) || this;
        _this.roomCategory = roomCategory;
        _this.table = [];
        return _this;
    }
    return DiningRoom;
}(Room_1.Room));
exports.DiningRoom = DiningRoom;
