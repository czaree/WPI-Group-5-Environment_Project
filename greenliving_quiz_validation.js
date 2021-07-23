//tutorial followed at https://www.codemahal.com/video/javascript-quiz-tutorial/ - slightly modified to suit individual needs
//initial variables
var pos = 0;
var correct = 0;
var quiz, quiz_status, question, chosen_answer, possible_answers, ans_A, ans_B, ans_C, ans_D;

//question array
var questions = [
  {
    question: "Which of the following is the most eco-friendly mode of transportation?",
    a: "Flying a Plane",
    b: "Walking",
    c: "Taking the bus",
    d: "Driving a car",
    answer: "B"
    },
  {
    question: "If you find yourself with way more food than you could ever eat, what environmentally safe actions can you take to get rid of it?",
    a: "Throw everything away",
    b: "Put it back into the pantry until everything is expired",
    c: "Flush it down the toilet",
    d: "Donate as much as possible to a local shelter or food pantry, and offer the rest to people you know.",
    answer: "D"
  },
  {
    question: "In the summer, what is an effective way to reduce electricity use?",
    a: "Leaving the air conditioning on 24 hours a day",
    b: "Opening all windows with screens for a short amount of time to let air circulate",
    c: "Plugging 5 different fans into the wall",
    d: "Taking a cold shower, and then using a blow drier",
    answer: "C",
    },
    {
      question: "Which of the following activities is it safe to use greywater to do?",
      a: "Use it as drinking water",
      b: "Water a yard or garden",
      c: "Take a bath or shower",
      d: "Doing the dishes",
      answer: "C",
      },
      {
        question: "What is the highest contributor to greenhouse gas emissions, making up about 29% of all produced?",
        a: "Travel and transport",
        b: "Industry and manufacturing",
        c: "Agriculture",
        d: "Generating Electricity",
        answer: "C",
      },
];

//shortening down code
function get(x) {
  return document.getElementById(x);
}


function displayQuestion() {
  quiz = get("quiz");
//result display and reset
  if (pos >= questions.length) {
    quiz.innerHTML = "<h3>You got "+correct+" out of "+questions.length+" questions correct. Congrats!</h3>";
    get("quiz_status").innerHTML = "Quiz complete";
    pos = 0;
    correct = 0;
    return false;
  }
//question progress display
  get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;

  question = questions[pos].question;
  ans_A = questions[pos].a;
  ans_B = questions[pos].b;
  ans_C = questions[pos].c;
  ans_D = questions[pos].d;

//question display
  quiz.innerHTML = "<p>"+question+"</p>";

//answer display
  quiz.innerHTML += "<label><input type = 'radio' name = 'possible_answers' value = 'A'>"+ans_A+"</label><br>";
  quiz.innerHTML += "<label><input type = 'radio' name = 'possible_answers' value = 'B'>"+ans_B+"</label><br>";
  quiz.innerHTML += "<label><input type = 'radio' name = 'possible_answers' value = 'C'>"+ans_C+"</label><br>";
  quiz.innerHTML += "<label><input type = 'radio' name = 'possible_answers' value = 'D'>"+ans_D+"</label><br><br>";
  quiz.innerHTML += "<button onclick = 'checkAnswer()'>Submit</button>";
}

 //check to see if answer is correct
function checkAnswer() {
  possible_answers = document.getElementsByName("possible_answers");
  for(var i = 0; i < possible_answers.length; i++) {
    if(possible_answers[i].checked) {
      chosen_answer = possible_answers[i].value;
    }
  }
//if answer is correct, increase points
  if (chosen_answer == questions[pos].answer) {
    correct++;
  }
  pos++;
  displayQuestion();
}

//when page loads, call displayQuestion()
window.addEventListener("load", displayQuestion);
