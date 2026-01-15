// const tinderUser = new Object();
const tinderUser = {}

tinderUser.name = "Emily";
tinderUser.id= "123abc";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstName : "Emiliana",
            lastName : "Cooper"
        }
    }
}
console.log(regularUser.fullname.userFullname.firstName); 

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2); 
const obj3 = {...obj1, ...obj2}; //good practice
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users= [
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        id: 1,
        email: "a@gmail.com",
    }
]

users[1].email 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //['name', 'id', 'isLoggedIn']
console.log(Object.values(tinderUser)); //['Emily', '123abc', false]
console.log(Object.entries(tinderUser)); // [ [ 'name', 'Emily' ], [ 'id', '123abc' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("name")); //true



const course = {
    coursename : "JavaScript",
    price : 999,
    courseInstructor : "Hitesh Choudhary"
}
// course.courseInstructor
const{courseInstructor}= course;
// console.log(courseInstructor); //Hitesh Choudhary
console.log(instructor); 


// {
//     // JSON
//     "name" : "Akanksha",
//     "course" : "JS in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]