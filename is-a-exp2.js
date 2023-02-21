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
var WhiteGoods = /** @class */ (function () {
    function WhiteGoods() {
    }
    WhiteGoods.prototype.needElectric = function () { };
    return WhiteGoods;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashingMachine.prototype.Fuse = function () {
        console.log("saga gider");
    };
    WashingMachine.prototype.Driver = function () {
        console.log("sola gider");
    };
    return WashingMachine;
}(WhiteGoods));
var DishwasherMachine = /** @class */ (function (_super) {
    __extends(DishwasherMachine, _super);
    function DishwasherMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DishwasherMachine.prototype.Fuse = function () {
        console.log("saga gider");
    };
    DishwasherMachine.prototype.Driver = function () {
        console.log("sola gider type2");
    };
    return DishwasherMachine;
}(WhiteGoods));
var Cooker = /** @class */ (function (_super) {
    __extends(Cooker, _super);
    function Cooker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cooker.prototype.Fuse = function () {
        console.log("saga gider type3");
    };
    Cooker.prototype.Driver = function () {
        throw new Error("There is no driver in Cooker.");
    };
    return Cooker;
}(WhiteGoods));
var Refrigerated = /** @class */ (function (_super) {
    __extends(Refrigerated, _super);
    function Refrigerated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Refrigerated.prototype.Fuse = function () {
        throw new Error("saga gidemez");
    };
    Refrigerated.prototype.Driver = function () {
        throw new Error("sola gidemez");
    };
    return Refrigerated;
}(WhiteGoods));
var Arçelik = new Cooker();
Arçelik.Driver();
