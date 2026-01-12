const accountId = 12345;
let accountEmail =  'akanksha@gmail.com'
var accountPassword = '12345@abc'
accountCity = 'Bangalore'

//  accountId = 23; // not allowed

console.log(accountId);

accountEmail = 'akanksha123@gmail.com';
accountPassword = 'newpassword@123'
accountCity = 'Mumbai'
console.log(accountId);

// prefer not to use var because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity]);