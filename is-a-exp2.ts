
abstract class WhiteGoods {
    needElectric(): void { }
    abstract Fuse(): void
    abstract Driver(): void
}
class WashingMachine extends WhiteGoods {
    Fuse(): void {
        console.log("The fuse works at 12 amps. in this machine")
    }
    Driver(): void {
        console.log("There is driver to control pump.")
    }
}
class DishwasherMachine extends WhiteGoods {
    Fuse(): void {
        console.log("The fuse works at 15 amps in this machine")
    }
    Driver(): void {
        throw Error ("There is no driver to control pump.")
    }
}
class Cooker extends WhiteGoods {
    Fuse(): void {
        console.log("The fuse works at 18 amps in this machine")
    }
    Driver(): void {
        throw new Error("There is no driver in Cooker.")
    }
}
class Refrigerated extends WhiteGoods {
    Fuse(): void {
        console.log("There is electric control in this machine.")
    }
    Driver(): void {
        console.log("There is driver for control pump.")
    }
}
let ArçelikFırın = new Cooker();
ArçelikFırın.Driver();