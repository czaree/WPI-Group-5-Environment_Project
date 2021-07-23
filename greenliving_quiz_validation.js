//tutorial followed at https://www.codemahal.com/video/javascript-quiz-tutorial/
//initial variables
var pos = 0;
var correct = 0;
var quiz, quiz_status, question, chosen_answer, possible_answers, ans_A, ans_B, ans_C, ans_D;

//question array
var questions = [
  {
    question: "Question 1 Placeholder.",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    answer: "C"
    },
  {
    question: "Question 2 Placeholder.",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    answer: "C"
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
    quiz.innerHTML = "<center><h3>You got "+correct+" out of "+questions.length+" questions correct. Congrats!</h3></center>";
    get("quiz_status").innerHTML = "<center>Quiz complete</center>";
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
