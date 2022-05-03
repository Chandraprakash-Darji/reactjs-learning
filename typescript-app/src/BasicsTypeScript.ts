export {};
let message = "Welcome Back";
console.log(message);

let x = 10;
const y = 20;

const title = "TypeScript";

// Basic Type
// BOOL - NUMBER - STRING

let isBeginner: boolean = true;

let total: number;

let name: string = "Moon Light";

let sentence: string = `My name is ${name}
I am beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1, 2, 3, 4, 5, 6, 7];
let list2: Array<number> = [1, 2, 3, 4, 5, 6];

let person1: [string, number] = ["Chris", 22];

enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;

randomValue = "Hello";
randomValue = true;

// randomValue();
// randomValue.toUpperCase();

let myVariable: unknown = 10;

// console.log((myVariable as string).toUpperCase());

let A;
A = 10;
A = true;

let B = 100000000;
console.log(B.toLocaleString());

let multiType: number | boolean;
multiType = 10;
multiType = true;

// ? <- is Optional Parameter
function add(num1: number, num2?: number): number {
  return num2 ? num1 + num2 : num1;
}

console.log(add(5, 10));
console.log(add(5));
// add(5, "10");

function sub(num1: number, num2: number = 10): number {
  return num2 ? num1 - num2 : num1;
}
console.log(sub(10, 4));
console.log(sub(10));

interface Person {
  firstName: string;
  // lastName is optional
  lastName?: string;
}
function fullName(person: Person): void {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p: Person = { firstName: "Moon", lastName: "Light" };
fullName(p);

class Employee {
  // Private - Only Self
  // Protected - Self and Drived Class
  // public - anyPlace
  
  protected employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Moon");
let emp2 = new Employee("Light");

emp1.greet();
emp2.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager Delegating task ${this.employeeName}`);
  }
}
let m1 = new Manager("Moon Light");
m1.delegateWork();
m1.greet();
