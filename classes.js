class Person {
    constructor(name, age) {
        // Check that name is a string and age is a number
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (typeof age !== 'number') {
            throw new TypeError('Age must be a number');
        }
        this.name = name;  // Set the name
        this.age = age;    // Set the age

        // Define the greet method
        this.greet = function() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        };
    }
}

const person1 = new Person('Ferdinald', 34);  // Create a new Person object
const person2 = { name: 'Alice', age: 28 };   // Create a plain object with name and age

person1.greet.call(person2);  // Use call to invoke greet with person2's context

const boundGreet = person1.greet.bind(person2);  // Bind greet to person2's context
boundGreet();  // Call the bound greet function

person1.greet.apply(person2);  // Use apply to invoke greet with person2's context
