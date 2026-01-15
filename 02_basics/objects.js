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
