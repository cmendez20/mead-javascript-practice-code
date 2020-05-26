// function - input, code, output

let greetUser = function () {
  console.log('Welcome user!');
}

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// challenge area

//  convertFahrenheitToCelsius
// let convertFahrenheitToCelsius = function (temp) {
//   let celsiusTemp = (temp - 32) * 5 / 9;
//   return celsiusTemp;
// }

let convertFahrenheitToCelsius = temp => {
  let celsiusTemp = (temp - 32) * 5 / 9;
  return celsiusTemp;
}

//  Call a couple of times (32 -> 0) (68 -> 20)
let temp = convertFahrenheitToCelsius(32);
let otherTemp = convertFahrenheitToCelsius(68);

//  Print the converted values
console.log(temp);
console.log(otherTemp);
