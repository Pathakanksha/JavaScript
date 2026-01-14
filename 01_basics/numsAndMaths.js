const score = 400
console.log(score) // 400

const balance = new Number(100)
console.log(balance) // Number {100}

console.log(balance.toString()) // "100"
console.log(balance.toFixed(2)) // "100.00"

const otherNumber= 23.8966

console.log(otherNumber.toPrecision(3)) // "23.9"

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // "10,00,000"

// ++++++++++++++++++MATHS+++++++++++++++++++++++++

console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.abs(-100)) // 100 absolute value
console.log(Math.round(4.6)) // 5 upper
console.log(Math.ceil(4.2)) // 5 lower
console.log(Math.floor(4.9) ) // 4
console.log(Math.min(2,34,5,1,-23,45)) // -23
console.log(Math.max(2,34,5,1,-23,45)) // 45
console.log(Math.random()) // random number between 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min) // random number between 10 and 20 