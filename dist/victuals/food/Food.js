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
exports.Food = exports.FoodCategory = void 0;
var Victuals_1 = require("../Victuals");
var FoodCategory;
(function (FoodCategory) {
    FoodCategory[FoodCategory["EveryDayFood"] = 0] = "EveryDayFood";
    FoodCategory[FoodCategory["PackageFood"] = 1] = "PackageFood";
})(FoodCategory = exports.FoodCategory || (exports.FoodCategory = {}));
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(foodCategory, vitaulsCategory, name, price) {
        var _this = _super.call(this, vitaulsCategory, name, price) || this;
        _this.foodCategory = foodCategory;
        return _this;
    }
    return Food;
}(Victuals_1.Vituals));
exports.Food = Food;
