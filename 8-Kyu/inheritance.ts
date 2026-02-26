class Person {
  constructor(
    private firstName: string,
    private secondName: string,
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.secondName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.secondName}`;
  }
}

class Employee extends Person {
  constructor(
    firstName: string,
    secondName: string,
    private jobTitle: string,
  ) {
    super(firstName, secondName);
  }
}
let employee = new Employee("Regis", "Mucyo", "Full-stack Developer");
console.log(employee.getFullName());
console.log(employee.describe());

// Method overriding...
