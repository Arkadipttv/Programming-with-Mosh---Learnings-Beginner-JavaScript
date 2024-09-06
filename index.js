// Comment - Documentation
console.log("Hello World");
var a = 'A';
var b = 'B';
var c = 5;

let name;
console.log(name);//undefined
// name = "MOSH";
// console.log(name);//deprecated -- outadated features not recommended to be used

let name2 = "Arka";
console.log(name2);//String
 // alert("Hello");

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// but in real life we may require a constant

const inflationRate = 10;
//inflationRate = 20;
//index.js:23 Uncaught TypeError: Assignment to constant variable. at index.js:23:15
console.log(inflationRate);


let firstName = "Arka";// String literal
let age = 19; // Number literal
let isApproved = true;//Boolean literal
console.log(typeof(isApproved));
let secondName;//undefined
let selectedColor = null;//explicitly clear the value of a variable // type -- object
console.log(typeof(selectedColor));
// ES6 we have another thing named SYMBOL

// DYNAMIC TYPING

//typeof used to check type of variable
// 30 , 30.1 both are numbers (not like int and float in other languages)
isApproved = 3;
console.log(typeof(isApproved));

//Objects


// let name3 = "Rinku";
// let age3 = 10;

// {} --> Object Literal

let person = {
    name3: "Ravi",
    age3: 50
};
console.log(person);


//Dot Notation
person.name3 = "JOhn";
console.log(person.name3);

//Bracket Notation

person["name3"] = 'Mary';
console.log(person.name3);

// //Bracket Notation
// let selection = "name3";
// person[selection] = 'Mary';
// console.log(person.name3);

//if you don't know the name of the target property until the runtime, in those cases you may use bracket notation

// Dot Notation is short and concise.


// ARRAYS

let colorsSelected = ["red", "blue"];
console.log(colorsSelected);
console.log(colorsSelected[0]);

//change length dynamically
colorsSelected[2] = "green";
console.log(colorsSelected);

// array can have different types as well
// objects and size of array is dynamic

colorsSelected[3] = 5;
console.log(colorsSelected);
console.log(typeof(colorsSelected));// array is an object

console.log(colorsSelected.length);


//FUNCTIONS


//Display on console
function greet(name4)//parameter
{
    console.log("Hello, " + name4);
}

greet("James Bond.");//argument
greet("Shahrukh Khan.");//argument

function greet(name4, name5)//parameter
{
    console.log("Hello, " + name4 + " " + name5);
}

greet("Simran", "Kaur.");

//calculate a value

function square(number)
{
    return number * number;
}

let number = square(2);
console.log(number);

// or simply, console.log(square(2));