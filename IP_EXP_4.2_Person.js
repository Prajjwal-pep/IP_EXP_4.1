// Using ES6 class syntax
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    // Arrow function as a member function
    printDetails = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`);
    }
}
// Using Object Literals
const person4 = {
    name: 'Dana',
    age: 40,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person4.greet();  // Output: Hello, my name is Dana and I am 40 years old.


// Using constructor function
function PersonConstructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;

    this.printDetails = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`);
    }
}

// Non-member arrow function
const printPersonDetails = (person) => {
    console.log(`Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`);
};

// Creating instances
const person1 = new Person('Alice', 30, 'Engineer');
const person2 = new PersonConstructor('Bob', 40, 'Doctor');

// Calling member functions
person1.printDetails();
person2.printDetails();

// Calling non-member function
printPersonDetails(person1);
