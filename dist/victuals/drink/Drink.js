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
exports.Drink = exports.DrinkCategory = void 0;
var Victuals_1 = require("../Victuals");
var DrinkCategory;
(function (DrinkCategory) {
    DrinkCategory[DrinkCategory["EveryDayDrink"] = 0] = "EveryDayDrink";
    DrinkCategory[DrinkCategory["PackageDrink"] = 1] = "PackageDrink";
})(DrinkCategory = exports.DrinkCategory || (exports.DrinkCategory = {}));
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    function Drink(drinkCategory, victualsCategory, name, price) {
        var _this = _super.call(this, victualsCategory, name, price) || this;
        _this.drinkCategory = drinkCategory;
        return _this;
    }
    return Drink;
}(Victuals_1.Vituals));
exports.Drink = Drink;
