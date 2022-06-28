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
exports.CustomerVIP = void 0;
var Customer_1 = require("./Customer");
var CustomerVIP = /** @class */ (function (_super) {
    __extends(CustomerVIP, _super);
    function CustomerVIP(category, id, name, age, gender) {
        return _super.call(this, category, id, name, age, gender) || this;
    }
    return CustomerVIP;
}(Customer_1.Customer));
exports.CustomerVIP = CustomerVIP;