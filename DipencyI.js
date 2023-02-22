//Dependency Inversion Principle
var Reach = /** @class */ (function () {
    function Reach(reach) {
        this._reach = reach;
    }
    Reach.prototype.get = function (transportation) {
        this._reach.get(transportation);
    };
    return Reach;
}());
var Subway = /** @class */ (function () {
    function Subway() {
    }
    Subway.prototype.get = function (transportation) {
        console.log("Metro ile ula\u015F\u0131m sa\u011Flad\u0131n\u0131z  ".concat(transportation));
    };
    return Subway;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.get = function (transportation) {
        console.log("Otob\u00FCs ile ula\u015F\u0131m sa\u011Flad\u0131n\u0131z. ".concat(transportation, " "));
    };
    return Bus;
}());
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.get = function (transportation) {
        console.log("Taksi ile ula\u015F\u0131m sa\u011Flad\u0131n\u0131z. ".concat(transportation, " "));
    };
    return Taxi;
}());
var reach1 = new Reach(new Subway());
reach1.get("Ücret $5 olacaktır. En hızlı ulaşımı sağladınız. ");
var reach2 = new Reach(new Bus());
reach2.get("Ücret $3 arası olacaktır. En ucuz ulaşımı sağladınız. ");
var reach3 = new Reach(new Taxi());
reach3.get("Ücret $10 - $20 arası olacaktır. En konforlu ulaşımı sağladınız. ");
