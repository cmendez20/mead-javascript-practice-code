// students score, total possible score
// goal: 15/20 -> "You got a C (75%)!"

let getStudentScore = function(totalCorrect, total) {
  let score = (totalCorrect / total) * 100;
  let letterGrade = '';

  if (score >= 90) {
    letterGrade = 'A';
  } else if (score >= 80) {
    letterGrade = 'B';
  } else if (score >= 70) {
    letterGrade = 'C';
  } else if (score >= 60) {
    letterGrade = 'D';
  } else if (score >= 50) {
    letterGrade = 'F';
  } else {
    letterGrade = 'E';
  }
  return `You got a ${letterGrade} (${score}%)!`;
};

let scoreResult = getStudentScore(15, 20);
console.log(scoreResult);