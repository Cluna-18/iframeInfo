var problems = [
  {question: "12 * 3", answer: "36"},
  {question: "35 + 10", answer: "45"},
  {question: "5 * 6", answer: "30"},
  {question: "10 * 10", answer: "100"},
  {question: "17 * 0", answer: "0"}
];

var n = 0; // Current problem number
var correctNum = 0;

// Function to display the current problem
function displayProblem() {
  $('#question').text(problems[n].question);
  $('#answerForm').val('')
}

// Function to check the user's answer
function checkAnswer() {
  $('#score').show();
  var answer = $('#answerForm').val().trim();

  if (answer === problems[n].answer) {
    correctNum++;
  }

  n++;

  $('#correctNum').text(correctNum);
  $('#totalNum').text(n);

  if (n < problems.length) {
    displayProblem();
  } else {
    $('#done').show();
    $('#finalCorrect').text(correctNum);
    $('#main').hide();
  }
}

function setUp() {
  $('#answerbtn').click(checkAnswer);
  displayProblem();
  $('#done').hide();
  $('#score').hide();
}

$(document).ready(setUp);
