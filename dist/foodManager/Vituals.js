"use strict";
exports.__esModule = true;
exports.Vituals = exports.VitaulsType = void 0;
var VitaulsType;
(function (VitaulsType) {
    VitaulsType[VitaulsType["TYPE_FOOD"] = 0] = "TYPE_FOOD";
    VitaulsType[VitaulsType["TYPE_DRINK"] = 1] = "TYPE_DRINK";
})(VitaulsType = exports.VitaulsType || (exports.VitaulsType = {}));
var Vituals = /** @class */ (function () {
    function Vituals(vitaulsType, name, price) {
        this.vitaulsType = vitaulsType;
        this.name = name;
        this.price = price;
    }
    return Vituals;
}());
exports.Vituals = Vituals;
