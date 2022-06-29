"use strict";
exports.__esModule = true;
exports.Customer = exports.CustomerCategory = void 0;
var CustomerCategory;
(function (CustomerCategory) {
    CustomerCategory[CustomerCategory["CUSTOMER_VIP"] = 0] = "CUSTOMER_VIP";
    CustomerCategory[CustomerCategory["COSTOMER_NORMAL"] = 1] = "COSTOMER_NORMAL";
})(CustomerCategory = exports.CustomerCategory || (exports.CustomerCategory = {}));
;
var Customer = /** @class */ (function () {
    function Customer(category, id) {
        this.category = category;
    }
    // isEqual(other:Customer):boolean {
    //     let result = false;
    //     if(this.category === other.category && this.name === other.name && this.age === other.age && this.gender === other.gender && this.id === other.id){
    //         result = true;
    //     }
    //     return result;
    // }
    Customer.prototype.getCustomerCategory = function () {
        return this.category;
    };
    return Customer;
}());
exports.Customer = Customer;
