let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

const questions = [
    {
        question: "Which of the following elements has the highest electronegativity?",
        options: ['Sodium','Carbon','Fluorine','Zinc',], 
        answer: 2
     },
    {
      question: "Which of the following compounds is a strong acid?",
      options: ['Acetic acid (CH3COOH)','Nitric acid (HNO3)','Ethanol (C2H5OH)','Ammonia (NH3)'],
      answer: 1
    },
    {
        question: "Which of the following is an example of a heterogeneous mixture?",
        options:  ['Saltwater','Air','Vinegar','Granite'],
        answer: 3
      },
      {
        question: "The process of converting a solid directly into a gas without going through the liquid phase is called?",
        options: ['Sublimation ','Evaporation','Condensation','Fusion'],
        answer: 0
      },
      {
        question: "Which of the following is an example of an exothermic reaction?",
        options: ['Burning wood','Melting ice','Dissolving salt in water','Photosynthesis'],
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
    resultElement.textContent = "Congratulation! You scored " + score + " out of " + questions.length;
    resultElement.style.display = "block";
    if(score<3){
        return "Sory your score "+score +" is below average, you are not ready for the exam"
    }
  }
  nextBtn.addEventListener("click", checkAnswer);
  loadQuestion();