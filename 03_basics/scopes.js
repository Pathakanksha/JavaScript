

if (true) {
    let a=10;
    const b=20;
    var c=30; //andhar bhi print hoga aur bahar bhi print hoga
}

console.log(a); 
console.log(b);
console.log(c);


//Nested Scopes
function one(){
    const username="akanksha";

    function two(){
        const website="youtube.com";
        console.log(username);
    }
    console.log(website);
    two();
}
one();

if (true) {
    const username="akanksha";
    if (username==="akanksha") {
        const website=" youtube";
        console.log(username+website);
    }
    console.log(website);
}
console.log(username);

// ++++++++++++++++++++++interesting+++++++++++++++++++++++

//FUNCTION KE DECLARATION SE FARK PADEGA


addone(5); //pahle bhi call ho jaega
function addone(num){
    return num+1;
}
addone(5); //baad m bhi


addTwo(5); //pahle error
const addTwo=function(num){
    return num+2;
}
addTwo(5); //baad m call hoga









//DOM-Document Object Model