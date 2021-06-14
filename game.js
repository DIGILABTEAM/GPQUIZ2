const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progresstext = document.getElementById("progresstext");
const scoretext = document.getElementById('score');
const progressbarfull = document.getElementById('progressbarfull');
let currentquestion = {};
let acceptinganswers = false;
let score = 0;
let questioncounter = 0;
let availablequestions = [];

let questions = [
  {
    question: "There are products in the market that help people not to cough at times, such as overnight when they need to sleep. What is the keyword to look for in buying such a product?",
    choice1: "Suppressant",
    choice2: "Mucolytic",
    choice3: "Expectorant",
    choice4: "Surfactant",
    answer: 1
  },
  {
    question: "What two disorders comprise COPD?",
    choice1: "Emphysema and chronic bronchitis",
    choice2: "Lung cancer and asthma",
    choice3: "Asthma and emphysema",
    choice4: "Pneumonia and chronic bronchitis",
    answer: 1
  },
  {
    question: "What is an expectorant?",
    choice1: "Another term for a cough drop ",
    choice2: "A technique used by therapists to ease coughing ",
    choice3: "A medication to aid in removing phlegm from the body ",
    choice4: "A prescription-strength cough suppressant",
    answer: 3
  },
  {
    question: "What is the primary physical change when a person has emphysema?",
    choice1: "The lungs develop a reduced ability to expel air ",
    choice2: "The bronchial tubes shred, allowing air to escape out of the respiratory system ",
    choice3: "The oxygen exchange process is corrupted because blood cells can't enter the lungs  ",
    choice4: "The lungs shrink, resulting in inability to take in sufficient oxygen",
    answer: 1
  },
  {
    question: "Related to coughing, what are percussions? ",
    choice1: "The rhythmic pulsating of the chest wall when one coughs ",
    choice2: "The closure of the aortic valve of the heart when one coughs ",
    choice3: "Adhesions of mucus to the lining of the upper bronchial tubes",
    choice4: "A physical therapy to loosen mucus in the lungs",
    answer: 4
  }

];




const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questioncounter = 0;
  score = 0;
  availablequestions = [...questions];
  console.log(availablequestions);
  getquestion();
};
getquestion = () => {
  if (availablequestions.length == 0 || questioncounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostrecentscore", score);
    return window.location.assign("end.html");
  }
  questioncounter++;
  progresstext.innerText = `Question ${questioncounter}/${MAX_QUESTIONS}`;
  progressbarfull.style.width = `${(questioncounter / MAX_QUESTIONS) * 100}%`;
  const questionindex = Math.floor(Math.random() * availablequestions.length);
  currentquestion = availablequestions[questionindex];
  question.innerText = currentquestion.question;
  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentquestion['choice' + number];
  });
  availablequestions.splice(questionindex, 1);
  console.log(availablequestions);
  acceptinganswers = true;
};
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptinganswers) return;
    acceptinganswers = false;
    const selectedchoice = e.target;
    const selectedanswer = selectedchoice.dataset["number"];

    const classtoapply = selectedanswer == currentquestion.answer ? 'correct' : 'incorrect';
    if (classtoapply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedchoice.parentElement.classList.add(classtoapply);
    setTimeout(() => {
      selectedchoice.parentElement.classList.remove(classtoapply);
      getquestion();
    }, 1000);
  });
});
incrementScore = num => {
  score += num;
  scoretext.innerText = score;
};
startGame();