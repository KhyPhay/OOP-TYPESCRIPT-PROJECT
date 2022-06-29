"use strict";
exports.__esModule = true;
exports.HumanManager = void 0;
var Customer_1 = require("./customer/Customer");
var HumanManager = /** @class */ (function () {
    function HumanManager() {
        this.customer = [];
        this.staffs = [];
    }
    HumanManager.prototype.addCustomer = function (customer) {
        this.customer.push(customer);
    };
    HumanManager.prototype.getCustomer = function () {
        return this.customer;
    };
    HumanManager.prototype.getCustomerVIP = function () {
        var vipCustomer = [];
        var customers = this.customer;
        customers.forEach(function (customer) {
            if (customer.getCustomerCategory() === Customer_1.CustomerCategory.CUSTOMER_VIP) {
                vipCustomer.push(customer);
            }
        });
        return vipCustomer;
    };
    HumanManager.prototype.getCustomerNormal = function () {
        var normalCustomer = [];
        var customers = this.customer;
        customers.forEach(function (customer) {
            if (customer.getCustomerCategory() == Customer_1.CustomerCategory.COSTOMER_NORMAL) {
                normalCustomer.push(customer);
            }
        });
        return normalCustomer;
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
