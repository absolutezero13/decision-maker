class Person {
  constructor(name = "anonim", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return ` I am ${this.name}, S.a`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old. `;
  }
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `Their major is ${this.major}`;
    }
    return description;
  }
}
class Traveler extends Person {
  constructor(name = "anonim", age = 0, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Student("İlker Sarica", 24, "Pdr");
console.log(me);

console.log(me.getGreeting());
console.log(me.getDescription());
const gay = new Traveler("Dezcan", 25, "Düzce");
console.log(gay.getGreeting());
