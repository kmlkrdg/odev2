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
var BasePhone = /** @class */ (function () {
    function BasePhone(Do, brand) {
        this._brand = brand;
        this._Do = Do;
    }
    BasePhone.prototype.Brand = function () {
        this._brand.Brand();
    };
    BasePhone.prototype.Do = function () {
        this._Do.DoAs();
    };
    BasePhone.prototype.Call = function () {
        console.log("The phone can Call.");
    };
    BasePhone.prototype.TakePhoto = function () {
        console.log("The Phone can take a phote.");
    };
    BasePhone.prototype.Bluetooth = function () {
        console.log("The Phone has Bluetooth.");
    };
    return BasePhone;
}());
var Selfie = /** @class */ (function () {
    function Selfie() {
    }
    Selfie.prototype.DoAs = function () {
        console.log("The Phone can do Selfie.");
    };
    return Selfie;
}());
var Services = /** @class */ (function () {
    function Services() {
    }
    Services.prototype.DoAs = function () {
        console.log("The phone has 5G specifications.");
    };
    return Services;
}());
var Nokia = /** @class */ (function () {
    function Nokia() {
    }
    Nokia.prototype.Brand = function () {
        console.log("The Phone brand is Nokia.");
    };
    return Nokia;
}());
var Apple = /** @class */ (function () {
    function Apple() {
    }
    Apple.prototype.Brand = function () {
        console.log("The Phone brand is Apple.");
    };
    return Apple;
}());
var Phone1 = /** @class */ (function (_super) {
    __extends(Phone1, _super);
    function Phone1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Phone1;
}(BasePhone));
var phone1 = new Phone1(new Services(), new Apple());
phone1.Do();
phone1.Brand();
