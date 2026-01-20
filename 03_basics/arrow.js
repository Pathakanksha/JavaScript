const user={
    username:"akanksha",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website. `);
    }
}
user.welcomeMessage(); //akanksha , welcome to our website.
user.username="rahul";
user.welcomeMessage(); //rahul , welcome to our website.

console.log(this); //{}

function chai(){
    let a=10;
    console.log(this.a); //undefined, function m kaam nhi krega
}
chai();


const chai=()=>{
    let username="akanksha";
    console.log(this.username); //undefined, arrow function m bhi kaam nhi krega
}
chai();


//ARROW FUNCTION

const addTwo=(num1, num2) => {
    return num1 + num2; //explicit return
}
console.log(addTwo(3,4)); //7

const addtwo =(num1, num2) =>  num1 + num2; // implicit return or (num1+num2)

const addtwoo= (num1, num2) => ({username:"akanksha"}) 
