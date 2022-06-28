"use strict";
exports.__esModule = true;
exports.Chair = void 0;
var Chair = /** @class */ (function () {
    function Chair(id) {
        this.id = id;
        this.customerVIP = undefined;
        this.customerNormal = undefined;
    }
    Chair.prototype.getCustomerVIP = function () {
        return this.customerVIP;
    };
    Chair.prototype.getCustomerNormal = function () {
        return this.customerNormal;
    };
    return Chair;
}());
exports.Chair = Chair;
