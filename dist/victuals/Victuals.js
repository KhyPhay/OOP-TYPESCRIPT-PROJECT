"use strict";
exports.__esModule = true;
exports.Vituals = exports.VitaulsCategory = void 0;
var VitaulsCategory;
(function (VitaulsCategory) {
    VitaulsCategory[VitaulsCategory["FOOD"] = 0] = "FOOD";
    VitaulsCategory[VitaulsCategory["DRINK"] = 1] = "DRINK";
})(VitaulsCategory = exports.VitaulsCategory || (exports.VitaulsCategory = {}));
var Vituals = /** @class */ (function () {
    function Vituals(vitaulsCategory, name, price) {
        this.vitaulsCategory = vitaulsCategory;
        this.name = name;
        this.price = price;
    }
    return Vituals;
}());
exports.Vituals = Vituals;
