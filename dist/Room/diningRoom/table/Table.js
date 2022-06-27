"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(id) {
        this.id = id;
        this.chairs = [];
    }
    Table.prototype.getChair = function () {
        return this.chairs;
    };
    Table.prototype.addChair = function (chair) {
        return this.chairs.push(chair);
    };
    return Table;
}());
exports.Table = Table;
