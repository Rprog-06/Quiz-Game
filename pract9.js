const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(option));
        optionsEl.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionEl.textContent = `Quiz Completed! Your score is ${score} out of ${questions.length}.`;
    optionsEl.innerHTML = "";
    submitBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    submitBtn.classList.remove("hidden");
    restartBtn.classList.add("hidden");
    loadQuestion();
}

submitBtn.addEventListener("click", () => loadQuestion());
restartBtn.addEventListener("click", restartQuiz);

// Load the first question when the page loads
loadQuestion();
