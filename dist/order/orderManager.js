"use strict";
exports.__esModule = true;
exports.OrderManager = void 0;
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.orders = [];
    }
    OrderManager.prototype.getAllOrder = function () {
        return this.orders;
    };
    return OrderManager;
}());
exports.OrderManager = OrderManager;
