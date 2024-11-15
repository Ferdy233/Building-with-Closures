class Person {
    constructor(name, age) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (typeof age !== 'number') {
            throw new TypeError('Age must be a number');
        }
        this.name = name;
        this.age = age;

        this.greet = function() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        };
    }
}

const person1 = new Person('Ferdinald', 34);
const person2 = { name: 'Alice', age: 28 };
person1.greet.call(person2);  

const boundGreet = person1.greet.bind(person2);
boundGreet();  

person1.greet.apply(person2);  
