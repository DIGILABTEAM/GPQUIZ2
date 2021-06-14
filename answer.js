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
    question: "What is a productive cough?",
    choice1: "One that makes you feel better immediately",
    choice2: "One that results in cancer",
    choice3: "One that helps expel phlegm from the body",
    choice4: "One that causes other symptoms to appear",
    answer: 3
  },
  {
    question: "What are rales?",
    choice1: "Crossbars on a train track",
    choice2: "Abnormal lung sounds you can hear through a stethoscope",
    choice3: "Definitive indicators of lung cancer ",
    choice4: "Spasms of coughing",
    answer: 2
  },
  {
    question: "Who among these options is most likely to suffer from chronic bronchitis?",
    choice1: "People with childhood asthma",
    choice2: "People with deformed lungs",
    choice3: "People who have survived tuberculosis",
    choice4: "Smokers",
    answer: 4
  },
  {
    question: "What is another name for pertussis?",
    choice1: "Tuberculosis",
    choice2: "Whooping cough",
    choice3: "Bronchitis ",
    choice4: "Pneumonia",
    answer: 3
  },
  {
    question: "Perhaps unexpectedly, which of the following condition can be diagnosed because of a cough? ",
    choice1: "Gastrointestinal reflux disease",
    choice2: "Epilepsy",
    choice3: "Kidney disease",
    choice4: "Gout",
    answer: 1
  }

];
