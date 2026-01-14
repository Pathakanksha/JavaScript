const marvelHeroes = ['spiderman', 'ironman', 'thor', 'hulk'];
const dcHeroes = ['batman', 'superman', 'wonderwoman', 'flash'];

// Combine both arrays into one
marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);
// Output: ['spiderman', 'ironman', 'thor', 'hulk', ['batman', 'superman', 'wonderwoman', 'flash']]
//array ko as a data le liya 

const allHeroes = marvelHeroes.concat(dcHeroes); // return new array
console.log(allHeroes); 

const allNewHeroes = [ ...marvelHeroes, ...dcHeroes ] ; // spread operator
console.log(allNewHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("Akanksha")); // false
console.log(Array.from("Akanksha")); // ['A','k','a','n','k','s','h','a']
console.log(Array.from({name: "Akanksha"})); // [] // object cannot be converted to array //IMPORTANT

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3) ); // [100,200,300]