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
exports.PackageDrink = void 0;
var Drink_1 = require("./Drink");
var PackageDrink = /** @class */ (function (_super) {
    __extends(PackageDrink, _super);
    function PackageDrink(categoryDrink, vitauls, name, price, madeDate, expirationDate) {
        var _this = _super.call(this, categoryDrink, vitauls, name, price) || this;
        _this.madeDate = madeDate;
        _this.expirationDate = expirationDate;
        return _this;
    }
    PackageDrink.prototype.getExpirationDate = function () {
        return this.expirationDate;
    };
    return PackageDrink;
}(Drink_1.Drink));
exports.PackageDrink = PackageDrink;
