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
var BaseAthlete = /** @class */ (function () {
    function BaseAthlete(Sport, native) {
        this._native = native;
        this._Sport = Sport;
    }
    BaseAthlete.prototype.Language = function () {
        this._native.Language();
    };
    BaseAthlete.prototype.Sport = function () {
        this._Sport.SportAs();
    };
    BaseAthlete.prototype.Run = function () {
        console.log("I can run.");
    };
    BaseAthlete.prototype.Walk = function () {
        console.log("I can Walk.");
    };
    BaseAthlete.prototype.Swim = function () {
        console.log("I can swim.");
    };
    BaseAthlete.prototype.Healty = function () {
        console.log("I am Healthy.");
    };
    return BaseAthlete;
}());
var Rower = /** @class */ (function () {
    function Rower() {
    }
    Rower.prototype.SportAs = function () {
        console.log("I Sport as a Rower");
    };
    return Rower;
}());
var Swimmer = /** @class */ (function () {
    function Swimmer() {
    }
    Swimmer.prototype.SportAs = function () {
        console.log("I Sport as a Swimmer");
    };
    return Swimmer;
}());
var EnglishNative = /** @class */ (function () {
    function EnglishNative() {
    }
    EnglishNative.prototype.Language = function () {
        console.log("I can talk in English.");
    };
    return EnglishNative;
}());
var TurkishNative = /** @class */ (function () {
    function TurkishNative() {
    }
    TurkishNative.prototype.Language = function () {
        console.log("I can talk in Turkish.");
    };
    return TurkishNative;
}());
var RunningAthlete = /** @class */ (function () {
    function RunningAthlete() {
    }
    RunningAthlete.prototype.SportAs = function () {
        console.log("I sport as a Runner.");
    };
    return RunningAthlete;
}());
var Athlete1 = /** @class */ (function (_super) {
    __extends(Athlete1, _super);
    function Athlete1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Athlete1;
}(BaseAthlete));
var MoFarah = new Athlete1(new RunningAthlete(), new EnglishNative());
MoFarah.Run();
MoFarah.Language();
