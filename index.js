// This is my first JavaScript code
console.log('Hello Akshay');


//Variables

let name = 'Akshay';
console.log(name);

//Variable cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hypen (-)
//Are cass-sensitive

let firstName = 'Akshay';
let lastName = 'Pawar';


//Constant
const Rate = 0.3;
console.log(Rate);

// const interestRate = 0.3;
// interestRate = 1; // We can not assign new value to const variable
// console.log(interestRate);



//Primitive types : String, Number, Boolean, undefined, null
let myName = 'Akshay'; // String literal
let age = 25; // Number literal
let isApproved = true; // Boolean literal
let address = undefined; // undefined literal
let phone = null;


// Dynamic Typing

// typeof myName
// "string"
// myName = 1;
// 1
// typeof myName
// "number"

// typeof age
// "number"
// age = 30.1
// 30.1
// typeof age
// "number"

// typeof isApproved
// "boolean"
// typeof address
// "undefined"
// typeof phone
// "object"


//Reference Type
//Objects
// {} object literal
let person = {
    name: 'Akshay',
    age: 25
};

console.log(person)

//Dot notation
person.name = 'Lucky';
console.log(person.name)

//Bracket notation
person['name'] = 'LuckywaLLer';
console.log(person.name)


//Arrays
let selectedColors = ['red', 'Blue'];
console.log(selectedColors);
selectedColors[2] = 'Black';
console.log(selectedColors);
selectedColors[3] = 10;
console.log(selectedColors);
console.log(selectedColors[0]);
//Array is object in JavaScript
console.log(selectedColors.length);


//Functions
function greet() {
    console.log('Good Evening');
}

greet();

//Performing a task
function greetPerson(name) // parameters 
{ 
    console.log('Good Evening ' + name);
}

greetPerson('Akshay'); // arguments
greetPerson('Lucky');

//Calculate a value
function square(number){
   return number * number;
}

let number = square(2);
console.log(number);
console.log(square(3));