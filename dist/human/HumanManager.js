"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.customerVIP = [];
        this.customerNormal = [];
        this.staffs = [];
    }
    HumanManager.prototype.addCustomerVIP = function (customerVIP) {
        this.customerVIP.push(customerVIP);
    };
    HumanManager.prototype.addCustomerNormal = function (customerNormal) {
        this.customerNormal.push(customerNormal);
    };
    HumanManager.prototype.getCustomerVIP = function () {
        return this.customerVIP;
    };
    HumanManager.prototype.getCustomerNormal = function () {
        return this.customerNormal;
    };
    HumanManager.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    HumanManager.prototype.getStaffs = function () {
        return this.staffs;
    };
    return HumanManager;
}());
exports.HumanManager = HumanManager;
;
