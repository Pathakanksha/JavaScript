// Primitive data types

// 7 types : string, number, bigint, boolean, undefined, symbol, null


const score = 100;
const scoreValue =100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol('123'); //unique value
const anotherId = Symbol('123'); //unique value

const bigNumber = 1234567890123456789012345678901234567890n; //bigint

// Non-primitive or Reference data types

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "akanksha",
    age: 21,
}

const myFunc = function() {
    console.log("hello world");
}

console.log(typeof outsideTemp); //object

console.log(typeof function() {}); //function   or object function


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) vs Heap(Non-Primitive) memory

let myYouTubename = "akankshapracticedotcom"

let anotherName = myYouTubename;
anotherName = "chai aur coffee"

console.log({myYouTubename}); // akankshapracticedotcom
console.log({anotherName}); // chai aur coffee

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "akanksha@google.com"

console.log(userOne.email); // akanksha@google.com
console.log(userTwo.email); // akanksha@google.com

