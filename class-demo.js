class Person {
  constructor(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let person1 = new Person('Ehsanul', 'Sajjad', 25);
let person2 = new Person('Nasir', 'Uddin', 23);

console.log(person1, person2);
console.log(person1.fullName());
console.log(person2.fullName());
