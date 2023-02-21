//Encapsulation
class Student {
    constructor() {
        var name;
        var number;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getNumber() {
        return this.number;
    }
    setNumber(number) {
        this.number = number;
    }
}
var emp = new Student();
emp.setName("Kemal");
emp.setNumber(35);
console.log(emp.getName());
console.log(emp.getNumber());
