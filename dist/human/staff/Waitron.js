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
exports.Waitron = void 0;
var Staff_1 = require("./Staff");
var Waitron = /** @class */ (function (_super) {
    __extends(Waitron, _super);
    function Waitron(staffCategory, id, name, age, gender) {
        return _super.call(this, staffCategory, id, name, age, gender) || this;
    }
    return Waitron;
}(Staff_1.Staff));
exports.Waitron = Waitron;