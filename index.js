const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")

let currentQuestion = 0;
let score = 0;
 
let questions = [
   {
       question: "Is JavaScript used for Web Development?",
       answers: [
           {option: "For Sure!", answer: true},
           {option: "No, not at all.", answer: false},
       ]
   },
   {
       question: "What did Adamu used to style his website?",
       answers: [
           {option: "HTML", answer: false},
           {option: "CSS", answer: true},
       ]
   },
   {
       question: "React is a JavaScript framework?",
       answers: [
           {option: "No", answer: false},
           {option: "Yes", answer: true},
       ]
   },
  
]

   /*Add onclick eventsto the button. This will call respective functions when a
    particular button is clicked. */

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

 /*Create a function beginQuiz() that will get executed when the page loads and the script 
  gets executed. We have also added a feature that will allow the page to jump
  to the next question once an option is selected from the list of answer options.*/
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
   falseBtn.onclick = () => {
       if(questions[currentQuestion].answers[1].answer) {
           if(score < 3) {
               score++;
           }
       }
       userScore.innerHTML = score;
       if(currentQuestion < 2) {
           next();
       }
   }
 
   prevBtn.classList.add("hide");
}
 
beginQuiz();

/*Create a function restart() that will reset the score, the current question index
 and remove the hide class from elements if added to them and call beginQuiz(). */

 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 }

 /*Create a function next() that will jump to the next question. Here the currentQuestion
  will be incremented, and the hidden class will beremoved from the prev button.
  Based on the option the user selects, the score will be incremented. */

  function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
   falseBtn.onclick = () => {
       if(questions[currentQuestion].answers[1].answer) {
           if(score < 3) {
               score++;
           }
       }
       userScore.innerHTML = score;
       if(currentQuestion < 2) {
           next();
       }
   }
 
   prevBtn.classList.remove("hide");
}

/*Create a function prev() that will jump to the previous question. 
Here the currentQuestion will be decremented, and the hidden class will be removed 
from the next button. Based on the option the user selects, the score will be incremented. */
function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
   falseBtn.onclick = () => {
       if(questions[currentQuestion].answers[1].answer) {
           if(score < 3) {
               score++;
           }
       }
       userScore.innerHTML = score;
       if(currentQuestion < 2) {
           next();
       }
   }
 
   nextBtn.classList.remove("hide");
}

/* Finally, create the submit button, which will hide all elements except
 the restart button and score. It will also add a congratulatory message to our page. */

 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Congratulations on submitting the Quiz!"
 }