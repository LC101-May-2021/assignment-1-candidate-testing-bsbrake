const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = (" ");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ("");
let questions;
let correctAnswers;
let candidateAnswers;


function askForName(candidateName) {
  let name = input.question("What is your name: ");
  console.log("Welcome," + name +  "!");
  
}

function askQuestion() {
  let info = input.question ("1. Who was the first American woman in space? ");
  
}

function gradeQuiz() {(candidateAnswers) 

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};