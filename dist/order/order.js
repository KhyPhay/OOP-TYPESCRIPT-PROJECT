"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(date, table, waiter) {
        this.date = date;
        this.table = table;
        this.waiter = waiter;
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
    Order.prototype.addMeal = function () {
        var meal = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            meal[_i] = arguments[_i];
        }
        this.meal = this.meal.concat(meal);
    };
    Order.prototype.getMeal = function () {
        return this.meal;
    };
    return Order;
}());
exports.Order = Order;
