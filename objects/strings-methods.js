let name = 'Chris Mendez';

// Length Property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('password'));

// Challenge Area

// isValidPassword
// length is more than 8 - and it dooesn't contain the word password

// my function
const isValidPassword = function checkPassword(userPassword) {
  return userPassword.length > 8 && !userPassword.includes('password');
}



// Andrew Mead's Function
// let isValidPassword = function (password) {
//   return password.length > 8 && !password.includes('password')
// }

console.log(isValidPassword('asdf'));
console.log(isValidPassword('abc123!!!###'));
console.log(isValidPassword('asdfpassword'));

// checkPassword('asdf');
// checkPassword('abc123!!!###');
// checkPassword('asdfpassword');


