// 1st Class
class Person {
  // Base Class
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  greetings() {
    return `Hi, ${this.firstName} ${this.lastName}!`;
  }
}

// 2nd Class
class Customer extends Person {
  // Sub Class
  constructor(fName, lName, phone, membership) {
    super(fName, lName);

    this.phone = phone;
    this.membership = membership;
  }
}

// 1st Class Output
let person1 = new Person('Ehsanul', 'Islam');
console.log(person1);
console.log(person1.greetings());

// 2nd Class Output
let customer1 = new Customer('Nasir', 'Uddin', 01712343172, true);
console.log(customer1);
console.log(customer1.phone, customer1.membership);
console.log(customer1.greetings());
