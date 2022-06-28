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
exports.Customer = exports.CustomerCategory = void 0;
var Person_1 = require("../Person");
var CustomerCategory;
(function (CustomerCategory) {
    CustomerCategory[CustomerCategory["CUSTOMER_VIP"] = 0] = "CUSTOMER_VIP";
    CustomerCategory[CustomerCategory["COSTOMER_NORMAL"] = 1] = "COSTOMER_NORMAL";
})(CustomerCategory = exports.CustomerCategory || (exports.CustomerCategory = {}));
;
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(category, id, name, age, gender) {
        var _this = _super.call(this, id, name, age, gender) || this;
        _this.category = category;
        return _this;
    }
    Customer.prototype.isEqual = function (other) {
        var result = false;
        if (this.category === other.category && this.name === other.name && this.age === other.age && this.gender === other.gender && this.id === other.id) {
            result = true;
        }
        return result;
    };
    Customer.prototype.getCustomerCategory = function () {
        return this.category;
    };
    return Customer;
}(Person_1.Person));
exports.Customer = Customer;
