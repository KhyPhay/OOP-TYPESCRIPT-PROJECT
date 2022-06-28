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
exports.TypeFood = exports.FoodCategory = void 0;
var Vituals_1 = require("../Vituals");
var FoodCategory;
(function (FoodCategory) {
    FoodCategory[FoodCategory["EveryDayFood"] = 0] = "EveryDayFood";
    FoodCategory[FoodCategory["PackageFood"] = 1] = "PackageFood";
})(FoodCategory = exports.FoodCategory || (exports.FoodCategory = {}));
var TypeFood = /** @class */ (function (_super) {
    __extends(TypeFood, _super);
    function TypeFood(foodCategory, vitaulsType, name, price) {
        var _this = _super.call(this, vitaulsType, name, price) || this;
        _this.foodCategory = foodCategory;
        return _this;
    }
    return TypeFood;
}(Vituals_1.Vituals));
exports.TypeFood = TypeFood;
