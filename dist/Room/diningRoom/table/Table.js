"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table(id, numberOfCustomers) {
        this.id = id;
        this.numberOfCustomers = numberOfCustomers;
        this.customers = [];
    }
    Table.prototype.isTableFree = function () {
        var result = false;
        if (this.customers.length < this.numberOfCustomers) {
            result = true;
        }
        return result;
    };
    Table.prototype.getTableNoCustomer = function () {
        if (this.customers.length == 0) {
            return true;
        }
        return false;
    };
    Table.prototype.addCustomer = function (customer) {
        if (this.isTableFree()) {
            this.customers.push(customer);
        }
    };
    return Table;
}());
exports.Table = Table;
