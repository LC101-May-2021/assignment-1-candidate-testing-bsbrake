const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("")

  // TODO 1.1c: Ask for candidate's name //
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer = (" ");
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let grade=0;

function askForName() {
candidateName = input.question("Enter your name: ");
console.log("\nWelcome " + candidateName + "!\n\n");
}

//MAIN BRANCH
function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

 // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //;

 function askQuestion() {
  for (let i = 0; i < questions.length;i++)
  candidateAnswers[i] = input.question(questions[i]);
 
  for (let i=0; i <questions.length; i++)
  console.log(`\nYour Answer: ${candidateAnswers[i]};\nCorrect Answer: ${correctAnswers[i]}`)
  }

  function gradeQuiz(candidateAnswer, correctAnswer) {
    for (let i = 0; i < questions.length;i++)
    if (candidateAnswers.toUpperCase()===correctAnswers[i].toUpperCase())
    {grade = grade + 1;
    }
    grade=grade/questions.length*100;
    console.log("\n\nRESULTS\nYour Score: " + grade + "%");
    
    if (grade >= 80)
    {;
    console.log("You passed and may enroll in our program!")
    }
    else
    {console.log("Unfortunately you did not meet our criteria.")}
    

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