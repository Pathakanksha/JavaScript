const name="akanksha"; 
const repoCount= 50;

// console.log(name + repoCount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('akanksha-hceck'); // not recommended

console.log(gameName[0]); // a
console.log(gameName.__proto__); // shows all string methods

console.log(gameName.length); // 14
console.log(gameName.toUpperCase()); // AKANKSHA-HCECK
console.log(gameName.charAt(3)); // k
console.log(gameName.indexOf('c')); // 8


const newString= gameName.substring(0,6);
console.log(newString); // akanks

const anotherString= gameName.slice(-12,6);
console.log(anotherString); // anksha

const newStringOne= "   akanksha   ";
console.log(newStringOne); //    akanksha
console.log(newStringOne.trim()); // akanksha

const url= "https://akankshapractice.com/akanksha%20practice";

url.replace('%20','-'); // https://akankshapractice.com/akanksha-practice

console.log(url.includes('practice')); // true

console.log(gameName.split('-')); // [ 'akanksha', 'hceck' ]