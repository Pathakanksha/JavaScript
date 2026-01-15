//Singleton Object
// Object.create

//object litreals

const mySym = Symbol('key1');

const JsUser = {
    name: "Akanksha",
    age: 21,
    mySym: "myKey1", //not a good practice
    location: "Bangalore",
    email: "akanksha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],   
}
console.log(JsUser.email); //not a good practice for dynamic access
console.log(JsUser["email"]); 
console.log(JsUser.mySym); //myKey1

JsUser.email = "akanksha@outlook.com";
Object.freeze(JsUser); 
JsUser.email = "akanksha@chatgpt.com"
console.log(JsUser.email); 


JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser);