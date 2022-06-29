"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(date, table, waitron) {
        this.date = date;
        this.table = table;
        this.waitron = waitron;
        this.meal = [];
    }
    Order.prototype.getPriceFromOrder = function () {
        var price = 0;
        for (var _i = 0, _a = this.meal; _i < _a.length; _i++) {
            var victual = _a[_i];
            price += victual.getPrice();
        }
        return price;
    };
    return Order;
}());
exports.Order = Order;
