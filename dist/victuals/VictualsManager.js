"use strict";
exports.__esModule = true;
exports.VictualsManager = void 0;
var VictualsManager = /** @class */ (function () {
    function VictualsManager() {
        this.foods = [];
        this.drinks = [];
    }
    VictualsManager.prototype.addDrink = function (drink) {
        this.drinks.push(drink);
    };
    VictualsManager.prototype.addFood = function (food) {
        this.foods.push(food);
    };
    return VictualsManager;
}());
exports.VictualsManager = VictualsManager;
