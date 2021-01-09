function makeMathQuestion() {
    const randomNumber = (max = 10, min = 1) => Math.round((Math.random() * (max - min)) + min);
    let x = randomNumber();
    let y = randomNumber();
    let product = x * y;
    let sum = x + y;

    // choose question type
    let questionType = randomNumber(3, 0);
    switch (questionType) {
        case 0: //addition
            return questionInfo = {
                x: x,
                y: y,
                answer: sum,
                question: `${x} + ${y} =`
            }

        case 1: //subtraction
            return questionInfo = {
                x: x,
                y: y,
                answer: sum - x,
                question: `${sum} - ${x} =`
            }
        case 2: // multiplication
            return questionInfo = {
                x: x,
                y: y,
                answer: product,
                question: `${x} × ${y} =`
            }
        case 3: //division
            return questionInfo = {
                x: x,
                y: y,
                answer: product / x,
                question: `${product} ÷ ${x} =`
            }
    }
}

const displayMathQuestion = document.querySelector("#mathQuestion");
const inputAnswers = document.querySelector("#inputAnswers");
const userAnswer = document.querySelector("#answer");
const userScore = document.querySelector("#score");
const resetScore = document.querySelector("#reset")


//define variables for score calculation
let scoreTally = [];
let score;
let percent;


let newQuestion = makeMathQuestion();
displayMathQuestion.textContent = newQuestion.question;

inputAnswers.addEventListener("submit", (e) => {
    //if the answer is correct, points are awarded. 'true' added to score
    if (parseInt(userAnswer.value) === newQuestion.answer) {
        scoreTally.push(true);
    }
    //if the answer is incorrect, no points awarded, 'false' added to score
    else {
        scoreTally.push(false);
    }

    //generate new math question
    newQuestion = makeMathQuestion();
    displayMathQuestion.textContent = newQuestion.question;
    userAnswer.value = ""

    //generate score
    score = (scoreTally.filter(n => n === true)).length;
    percent = ((score / scoreTally.length) * 100).toFixed(2);
    userScore.textContent = `Score: ${score} / ${scoreTally.length} (${percent}%)`;

    //prevent form default
    e.preventDefault();
})


//reset score
resetScore.addEventListener("click", () => {
    scoreTally = [];
    score = undefined;
    percent = undefined;
    alert("Score has been reset.")
    userScore.textContent = 'Score:'
})