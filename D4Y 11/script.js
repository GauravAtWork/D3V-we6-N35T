const questionsArray = [{
  que: "Question 1: Which player has scored most goals in a calendar year? ",
  option1: "A. Cristiano Ronaldo",
  option2: "B. Lionel Messi",
  option3: "C. Robert Lewandowski",
  option4: "D. Neymar Jr.",
  ans: "B. Lionel Messi",
},
{
  que: "Question 2: Who won 2013 UEFA CHAMPIONS LEAGUE?",
  option1: "A. Bayern Munich",
  option2: "B. Barcelona",
  option3: "C. Real Madrid",
  option4: "D. Chelsea",
  ans: "A. Bayern Munich",
},
{
  que: "Question 3: Who has the most amount of Ballon D'or?",
  option1: "A. Cristiano Ronaldo",
  option2: "B. Michel Platini",
  option3: "C. Pele",
  option4: "D. Lionel Messi",
  ans: "D. Lionel Messi",
},
{
  que: "Question 4: Who is the top scorer in FIFA ?",
  option1: "A. Miroslav Klose",
  option2: "B. Cristiano Ronaldo",
  option3: "C. Lionel Messi",
  option4: "D. Pele",
  ans: "A. Miroslav Klose",
},
{
  que: "Question 5: Who is the third highest in UCL?",
  option1: "A. Lionel Messi",
  option2: "B. Raul Gonzalez",
  option3: "C. Cristiano Ronaldo",
  option4: "D. Robert Lewandowski",
  ans: "D. Robert Lewandowski",
}
];
const quesLen = questionsArray.length;
const question = document.querySelector(".question-h1");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const options = document.querySelectorAll(".options");

let questionsCount = -1;
let validAnswer = "";
let score = 0;
let currentQuestion = {};

let render = () => {
questionsCount++;
currentQuestion = questionsArray[questionsCount];
question.innerHTML = currentQuestion.que;
option1.innerHTML = currentQuestion.option1;
option2.innerHTML = currentQuestion.option2;
option3.innerHTML = currentQuestion.option3;
option4.innerHTML = currentQuestion.option4;
};
let flag = false;
options.forEach((option) => {
option.addEventListener("click", (e) => {
  if (!flag) {
      if (e.target.innerHTML === currentQuestion.ans) {
          e.target.classList.add("correct");
          score++;
      } else {
          if (!e.target.classList.contains("correct")) {
              e.target.classList.add("wrong");
          }
      }
      flag = true;
  }
});
});
render();
let submitClicked = 1;
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => {
flag = false;
submitClicked++;
if (submitClicked > quesLen) {
  alert(`You scored ${score} right answers.`);
  location.reload();
}
options.forEach((option) => {
  option.classList.remove("correct");
  option.classList.remove("wrong");
});
render();
});