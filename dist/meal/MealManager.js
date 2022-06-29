"use strict";
exports.__esModule = true;
exports.MealManager = void 0;
var MealManager = /** @class */ (function () {
    function MealManager() {
        this.meal = [];
    }
    MealManager.prototype.addMeal = function (meal) {
        this.meal.push(meal);
    };
    return MealManager;
}());
exports.MealManager = MealManager;
