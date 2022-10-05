import questionsArr from "./q.js";

let qIndex = 0;
let score = 0;

const getQuestion = (qIndex) => {
  return questionsArr[qIndex];
};

const pushQuestionToDom = (qIndex) => {
  const question = getQuestion(qIndex);
  const options = question.options;
  document.querySelector(".qtext").textContent = question.questionText;
  document.querySelector(".code").textContent = question.code;
  for (let i = 0; i < options.length; i++) {
    const element = document.querySelector(".opt" + i);
    element.textContent = options[i];
  }
};

const showScore = function () {
  const cardBody = document.querySelector(".card-body");
  cardBody.innerHTML = `<h1>Your Correct answer is: ${score}</h1>
  <h1>Your incorrect answer is: ${questionsArr.length - score}</h1>`;
};

const showQuestionStatus = function () {
  const qBar = document.querySelector(".qbar");
  const soruNo = document.querySelector(".soruNo");
  qBar.innerHTML = `<span class="currentquestion">${
    qIndex + 1
  }</span>/<span class="totalquestion">${questionsArr.length}</span>`;
  soruNo.innerHTML = qIndex + 1;
};
showQuestionStatus();

pushQuestionToDom(qIndex);

const card = document.querySelector(".card");

card.addEventListener("click", (e) => {
  if (e.target.classList.contains("form-check-input")) {
    const radioCheck = document.getElementsByName("answerfromclient");
    for (let i = 0; i < radioCheck.length; i++) {
      if (radioCheck[i].checked) {
        const answerFC = radioCheck[i].nextElementSibling.textContent;
        if (questionsArr[qIndex].checkAnswer(answerFC)) {
          e.target.parentElement.classList.add("bg-success", "text-wrap");
          score++;
        } else {
          e.target.parentElement.classList.add(
            "bg-danger",
            "badge",
            "text-wrap"
          );
        }
      }
      radioCheck[i].disabled = true;
    }
  }
  if (e.target.classList.contains("forward")) {
    if (questionsArr.length - 1 == qIndex) {
      showScore();
    } else if (questionsArr.length - 1 > qIndex) {
      const radios = document.getElementsByName("answerfromclient");
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = false;
        radios[i].checked = false;
        radios[i].parentElement.className = "form-check";
      }
      ++qIndex;
      showQuestionStatus();
      pushQuestionToDom(qIndex);
    }
  }
});
