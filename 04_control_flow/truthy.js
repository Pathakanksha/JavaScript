const userEmail = "akanksha@123.ai";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Email not found");
}

// Falsy values: 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values:
// "0",'false', " ", [], {}, function(){}, new Date()

const emptyObj = {};
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null or undefined

let val1;
val1= 5 ?? 10; //5
val2 = null ?? 10; //10
var1 = undefined ?? 15; //15

//Ternary Operator

// condition ?  true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");