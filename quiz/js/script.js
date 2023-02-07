const start = document.querySelector("#start");
const quiz = document.querySelector(".quiz");
const boxScore = document.querySelector("#boxScore");


start.onclick = () => {
    quiz.classList.add("activeQuiz");
    console.log(quiz.classList)
}

let que_count = 0;
let que_numb = 1;

const next = document.querySelector("#next");
const talQues = document.querySelector(".total_ques");

next.onclick = function () {
    if (que_count < questions.length) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        next.classList.remove("show");
    }
    else {
        showResultat();
    }
}

function showQuestions(id) {
    const question = document.querySelector(".ques");
    const options = document.querySelectorAll(".opt");

    let ques = "<p class='fs-3'>" + questions[id].question + "</p>";
    let option = "<button class='btn btn-dark rounded-3'>" + questions[id].opt[0] + "</button>"
    "<button class='btn btn-dark rounded-3'>" + questions[id].opt[1] + "</button>"
    "<button class='btn btn-dark rounded-3'>" + questions[id].opt[2] + "</button>"

    question.innerHTML = ques;
    options.innerHTML = option;

    for (i = 0; i < opt.length; i++) {
        opt[i].setAttribute("onclick", "optionSelected(this)");
    }
}