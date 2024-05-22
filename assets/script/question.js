const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let userScore = 0;

let questionNumber = 0;

const answerRandomizer = (array) => {
  for (let i = 0; i < array.length; i++) {
    const randomNum = Math.floor(
      Math.random() * array[i].incorrect_answers.length
    );
    const incorrectAnswers = array[i].incorrect_answers;
    const currentQuestion = array[i];
    const result = incorrectAnswers.toSpliced(
      randomNum,
      0,
      currentQuestion.correct_answer
    );
    currentQuestion.incorrect_answers = result;
  }
};

const checkAnswer = (question, answer) => {
  if (answer === question.correct_answer) {
    console.log("Complimenti");
    userScore++;
    console.log(userScore);
  } else {
    console.log("sbagliato");
  }
};

const timer = () => {
  const timerCircle = document.getElementById("timer-circle");
  timerCircle.style.animationName = "none";
  setTimeout(() => {
    timerCircle.style.animationName = "";
  }, 1000);
};

let second = 60;
let interval = setInterval(() => {
  if (second > 0) {
    second--;
    console.log(second);
  } else {
    timeOut();
  }
}, 1000);

const counter = () => {
  clearInterval(interval);
  second = 60;
  interval = setInterval(() => {
    if (second > 0) {
      console.log(second);
      innerTimer();
      second--;
    } else {
      timeOut();
    }
  }, 1000);
};

const innerTimer = () => {
  const innerTimerSpace = document.getElementById("inner-timer");
  innerTimerSpace.innerHTML = `<p>
  SECONDI <br />
  ${second} <br>
  RIMANENTI
</p>`;
};

const eventHandler = (event) => {
  const currentQuestion = questions[questionNumber - 1];
  const answer = event.target.innerText;
  checkAnswer(currentQuestion, answer);
  questionGen();
  timer();
  counter();
  innerTimer();
};

const timeOut = () => {
  questionGen();
  timer();
  counter();
  innerTimer();
};

const questionGen = () => {
  if (questionNumber < 10) {
    const questionSpace = document.getElementById("domande");
    const answerSpace = document.getElementById("risposte");
    questionSpace.innerHTML = "";
    answerSpace.innerHTML = "";
    const questionH1 = document.createElement("h1");
    questionH1.innerText = questions[questionNumber].question;
    questionSpace.appendChild(questionH1);
    for (
      let i = 0;
      i < questions[questionNumber].incorrect_answers.length;
      i++
    ) {
      const currentAnswer = questions[questionNumber].incorrect_answers[i];
      const answerBtn = document.createElement("button");
      answerBtn.classList.add("button");
      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("button-container");
      answerBtn.innerText = currentAnswer;
      answerBtn.addEventListener("click", eventHandler);
      answerBtn.id = "answer" + i;
      buttonDiv.appendChild(answerBtn);
      answerSpace.appendChild(buttonDiv);
    }
    const currentQuestionSpace = document.getElementById("current-question");
    currentQuestionSpace.innerHTML = "";
    const p = document.createElement("p");
    const pSpan = document.createElement("span");
    pSpan.innerText = " / 10";
    p.innerText = "QUESTION " + (questionNumber + 1);
    p.appendChild(pSpan);
    currentQuestionSpace.appendChild(p);
    questionNumber++;
  } else {
    location.replace("results.html");
  }
};

(window.onload = answerRandomizer(questions)),
  questionGen(),
  timer(),
  counter(),
  innerTimer();
