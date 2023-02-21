var Character1 = /** @class */ (function () {
    function Character1() {
    }
    Character1.prototype.Run = function () {
        return "Character 1 Run";
    };
    Character1.prototype.Punch = function () {
        return "Character 1 Punch";
    };
    Character1.prototype.Dodge = function () {
        return "Character 1 Dodge";
    };
    return Character1;
}());
var Character2 = /** @class */ (function () {
    function Character2() {
    }
    Character2.prototype.Run = function () {
        return "Chracter 2 Run";
    };
    Character2.prototype.Punch = function () {
        return "Character 2 Punch";
    };
    Character2.prototype.Dodge = function () {
        return "Character 2 Dodge";
    };
    return Character2;
}());
var GameMech = /** @class */ (function () {
    function GameMech(char) {
        this._char = char;
    }
    GameMech.prototype.Info = function () {
        console.log("".concat(this._char.Punch(), "ed to his/her opponent."));
    };
    return GameMech;
}());
var Gamemech = new GameMech(new Character1());
Gamemech.Info();
