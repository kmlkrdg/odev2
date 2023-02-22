//Single Responsibility Principle 
var Flight = /** @class */ (function () {
    function Flight(FlightNumber, CompanyName, GateNumber) {
        this.FlightNumber = FlightNumber;
        this.CompanyName = CompanyName;
        this.GateNumber = GateNumber;
    }
    return Flight;
}());
var flights = [];
var FlightAnnouncements = /** @class */ (function () {
    function FlightAnnouncements() {
    }
    FlightAnnouncements.prototype.add = function () {
        flights.push(new Flight('TKY1786', "Türk Hava yolları", 280));
        flights.push(new Flight('PGS1883', "Pegasus", 237));
        flights.push(new Flight('BSS1889', "BoraJet", 240));
        flights.push(new Flight('ATY1107', "AnadoluJet", 251));
        flights.push(new Flight('SUN1425', "Sun Express", 203));
        return flights;
    };
    return FlightAnnouncements;
}());
var DoAnnouncements = /** @class */ (function () {
    function DoAnnouncements() {
    }
    DoAnnouncements.prototype.writeToConsole = function (flights) {
        flights.forEach(function (x) {
            console.log("".concat(x.FlightNumber, " U\u00E7u\u015F numaral\u0131 ").concat(x.CompanyName, " yolcular\u0131,u\u00E7a\u011Fa bini\u015Finiz i\u00E7in ").concat(x.GateNumber, " numaral\u0131 kap\u0131ya gelmeniz ricada bulunur."));
        });
    };
    return DoAnnouncements;
}());
var FlightAnnouncement = new FlightAnnouncements();
FlightAnnouncement.add();
var Announcement1 = new DoAnnouncements();
Announcement1.writeToConsole(flights);
