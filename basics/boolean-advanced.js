let isAccountLocked = false;
let userRole = 'user'

if (isAccountLocked) {
  console.log('Is account locked');
} else if (userRole === 'admin') {
  console.log('Welcome Admin!');
} else {
  console.log('Welcome!');
}

let temp = 120;
if (temp <= 31) {
  console.log('It is freezing outside!');
} else if (temp >= 110) {
  console.log('It is way too hot outside!');
} else {
  console.log('It is a nice day outside.');
}