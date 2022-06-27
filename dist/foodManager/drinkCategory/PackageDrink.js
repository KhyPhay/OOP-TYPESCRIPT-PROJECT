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
var TypeDrink_1 = require("./TypeDrink");
var PackageDrink = /** @class */ (function (_super) {
    __extends(PackageDrink, _super);
    function PackageDrink(categoryDrink, vitaulsType, name, price) {
        return _super.call(this, categoryDrink, vitaulsType, name, price) || this;
    }
    return PackageDrink;
}(TypeDrink_1.TypeDrink));
exports.PackageDrink = PackageDrink;
