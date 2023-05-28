const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: 0
    },
    // Add more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const resultElement = document.getElementById("result");
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    optionsElement.innerHTML = "";
    for (let i = 0; i < question.options.length; i++) {
      const option = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = i;
      option.appendChild(input);
      option.append(" " + String.fromCharCode(65 + i) + ") " + question.options[i]);
      optionsElement.appendChild(option);
    }
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      const question = questions[currentQuestion];
      if (parseInt(selectedOption.value) === question.answer) {
        score++;
      }
  
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }
  }
  
  function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextBtn.style.display = "none";
    resultElement.textContent = "You scored " + score + " out of " + questions.length;
    resultElement.style.display = "block";
  }
  nextBtn.addEventListener("click", checkAnswer);
  loadQuestion();