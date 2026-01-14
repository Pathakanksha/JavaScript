//Dates
 
let myDate = new Date(); 
console.log(myDate.toString()); // Wed Jan 14 2026 18:59:48 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Wed Jan 14 2026
console.log(myDate.toISOString()); // 2026-01-14T13:29:48.123Z
console.log(myDate.toLocaleString()); // 1/14/2026, 6:59:48 PM
console.log(myDate.toLocaleDateString()); // 1/14/2026
console.log(myDate.toLocaleTimeString()); // 6:59:48 PM
console.log(myDate.toJSON()); // 2026-01-14T13:29:48.123Z

console.log(typeof myDate); // object

let myCreatedDate = new Date(2003,9,21, 9, 10, 30, 0); 
console.log(myCreatedDate.toLocaleString()); // Tue Oct 21 2003 

let myCreatedDate2 = new Date("2014-01-30"); // YYYY-MM-DD
console.log(myCreatedDate2.toLocaleString()); // 30/01/2014, 5:30:00 AM

let myCreatedDate3 = new Date("12/23/1999"); // MM/DD/YYYY
console.log(myCreatedDate3.toLocaleString()); // 23/12/1999, 5:30:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1768400638877
console.log(myCreatedDate3.getTime()); // 945887400000
console.log(Math.floor(Date.now()/1000)); // 1768400638

let newDate = new Date();

// `${newDate.getDay()} and the time

newDate.toLocaleString('default', { 
    weekday: 'long',
    year: 'numeric',
    timeZone: 'short',
}); // Wednesday