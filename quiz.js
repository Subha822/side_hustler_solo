const quizData = [
    {
        question: "1. What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "2. Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "3. Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerText = currentQuestion.question;
    quizContainer.appendChild(questionElement);

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'options';
        optionElement.innerHTML = `<input type="radio" id="radio" name="answer" value="${option}"> ${option}`;
        quizContainer.appendChild(optionElement);
    });
}

function checkAnswer() {
    const options = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer = '';

    options.forEach(option => {
        if (option.checked) {
            selectedAnswer = option.value;
        }
    });

    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
        score++;
    }
}

document.getElementById('next-button').addEventListener('click', () => {
    checkAnswer();
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = `<h2>Your score: ${score} out of ${quizData.length}</h2>`;
        document.getElementById('next-button').style.display = 'none'; // Hide the button
    }
});

// Load the first question
loadQuestion();
