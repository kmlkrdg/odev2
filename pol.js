//Polymorphism 
class Animal {
    constructor(name) {
      this.name = name;
    }
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
    eatType(){
        console.log(`${this.name} eats for live. `)
    }
  }
  class Lion extends Animal {
    constructor(name) {
      super(name);
    } 
    makeSound() {
      console.log(`${this.name} Roarr!!.`);
    }
    eatType(){
        console.log(`${this.name} are carnivores, which means they are animals that only eat meat. `)
    }
  } 
  class Sheep extends Animal {
    constructor(name) {
      super(name);
    }
    makeSound() {
      console.log(`${this.name} meee!.`);
    }
    eatType(){
        console.log(`${this.name} Sheep are herbivores and eat mainly plant material. `)
    }
  }
  const lion = new Lion('Arthur');
  const sheep = new Sheep('Molly');
  lion.makeSound(); 
  lion.eatType();
  sheep.makeSound(); 
  sheep.eatType();
  