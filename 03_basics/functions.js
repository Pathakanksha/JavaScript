function sayMyName(){
    console.log("E");
    console.log("M");
    console.log("I");
    console.log("L");
    console.log("Y");
}
// sayMyName();

function addTwoNumbers(number1, number2){ // parameters
    // console.log(number1 + number2);
     let result = number1 + number2;
        return result;
        console.log("Akanksha"); // unreachable code
}
addTwoNumbers(5, 7);// 12    // arguments
addTwoNumbers(10, "4");// "104"

const result = addTwoNumbers(20, 30); 
console.log(result); // undefined


function loginUserMessage(username){
    if (!username ){ // username === undefined || username === null || username === ""
        return "Please provide a username";
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("emily"));
console.log(loginUserMessage()); // username is undefined not null


function calculateCartPrice(...num1){ // rest operator
    return num1;
}
console.log(calculateCartPrice(200, 300, 400, 500)); // [200, 300, 400, 500]
//(val1, val2, ...num1) //num1= [400, 500]

const user ={
    username: "akanksha",
    price: 5000,
}

function handleObject(anyobj){
    console.log(`Username is: ${anyobj.username} and price is: ${anyobj.price}`); 
}
// handleObject(user);
handleObject({
    username: "emily",
    price: 7000,
}); // passing object directly

const myNewArray = [3, 5, 7, 9];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)); // 5
console.log(returnSecondValue([3, 5, 7, 9])); // passing array directly 5