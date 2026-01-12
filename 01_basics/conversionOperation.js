let score="33";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

// NaN = 'not a number';

//"33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "akanksha" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);n
// console.log(typeof stringNumber);


//************************ Operations *****************************

let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "Hello ";
let str2 = " Akanksha";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + true); // "1true"
console.log("1" + false); // "1false"
console.log("1" + null); // "1null"
console.log("1" + undefined); // "1undefined"
console.log("1" + NaN); // "1NaN"
console.log("1" + 2 + 3); // "123"
console.log(1 + 2 + "3"); // "33"