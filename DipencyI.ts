//Dependency Inversion Principle

interface IReach {
  get(transportation: string)
}

class Reach {
  _reach: IReach;
  constructor(reach: IReach) {
    this._reach = reach;
  }

  get(transportation: string) {
    this._reach.get(transportation);
  }
}


class Subway implements IReach {

  get(transportation: string) {
    console.log(`Metro ile ulaşım sağladınız  ${transportation}`);
  }
}

class Bus implements IReach {
  get(transportation: string) {
    console.log(`Otobüs ile ulaşım sağladınız. ${transportation} `);
  }
}

class Taxi implements IReach {
  get(transportation: string) {
    console.log(`Taksi ile ulaşım sağladınız. ${transportation} `);
  }
}

let reach1 = new Reach(new Subway());
reach1.get("Ücret $5 olacaktır. En hızlı ulaşımı sağladınız. ");

let reach2 = new Reach(new Bus());
reach2.get("Ücret $3 arası olacaktır. En ucuz ulaşımı sağladınız. ");

let reach3 = new Reach(new Taxi());
reach3.get("Ücret $10 - $20 arası olacaktır. En konforlu ulaşımı sağladınız. ");

