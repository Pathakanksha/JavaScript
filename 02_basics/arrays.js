//Array

const myArr = [0, 1, 2, 3, 4, 5];  //JS arr resizable and mixed type
const myHeroes = ['shaktiman', 'doga', 'naagraj'];

const myArr2 = new Array(10, 20, 30); // not recommended
console.log (myArr[1]); // 1

//Array Methods

myArr.push(6); // adds at the end
myArr.pop(); // removes from the end

myArr.unshift(9); // adds at beginning
myArr.shift(); // removes from beginning

console.log(myArr.includes(3)); // true
console.log(myArr.indexOf(8)); // -1


const newArr = myArr.join();

console.log(myArr); // [0,1,2,3,4,5,6] //array
console.log(newArr); // "0,1,2,3,4,5,6" //string

//slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1) // [1,2] // original array not changed
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2) // removed elements [1,2,3]
console.log("C", myArr);