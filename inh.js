//Inheritance
class Araba {
    constructor(marka) {
        this.Arabamarkası = marka;
    }
    sahip() {
        return 'Benim Araba Markam: ' + this.Arabamarkası;
    }
}

class Marka extends Araba {
    constructor(marka, model) {
        super(marka);
        this.model = model;
    }
    göster() {
        return this.sahip() + ', Modeli ise: ' + this.model;
    }
}
let Arabam = new Marka("Tesla", "Model 3");
console.log(Arabam.göster());
