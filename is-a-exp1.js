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
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.Ram = function () {
        console.log("The computer had a Ram");
    };
    Computer.prototype.Driver = function () {
        console.log("The computer had a Driver");
    };
    Computer.prototype.DisplayCard = function () {
        console.log("The computer had a DisplayCard");
    };
    Computer.prototype.Processor = function () {
        console.log("The computer had a Processor");
    };
    return Computer;
}());
var AppleMacBook = /** @class */ (function (_super) {
    __extends(AppleMacBook, _super);
    function AppleMacBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleMacBook.prototype.UsingIOS = function () {
        console.log("The computer is using IOS operating system");
    };
    AppleMacBook.prototype.FrontCamera = function () {
        console.log("The computer has a Concealable Front camera ");
    };
    return AppleMacBook;
}(Computer));
var Mac = new AppleMacBook();
Mac.UsingIOS();
Mac.FrontCamera();
