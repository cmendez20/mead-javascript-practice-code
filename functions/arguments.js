// Multiple Arguments
let add = function (a, b, c) {
  return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments 
// 0 is only used for score if there no values sent from getScoreText();
let getScoreText = function(name = 'Anonymous', score = 0) {
  // return 'Name: ' + name + ' - Score: ' + score;
  return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area
// Function total, tipPercent .2

function getTip(billAmount, tip = 0.20) {
  let total = billAmount * tip;
  let tipPercent = tip * 100;
  return`A ${tipPercent}% on $${billAmount} would be $${total}`;
}

let tipCalculation = getTip(40, 0.25);
console.log(tipCalculation);