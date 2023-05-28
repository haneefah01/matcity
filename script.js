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

//Question Bank
const question =[{
   question: "Which of the following elements has the highest electronegativity?",
   option: ['Sodium','Carbon','Fluorine','Zinc',], 
   answer: 'Fluorine'
},
{
   question: " Which of the following is an example of a heterogeneous mixture? ",
   option: ['Saltwater','Air','Vinegar','Granite',], )
   answer: 'Granite'
},
{
   question: "Which of the following compounds is a strong acid? ",
   option: ['Acetic acid (CH3COOH)','Nitric acid (HNO3)','Ethanol (C2H5OH)','Ammonia (NH3)',], 
   answer: 'Nitric acid (HNO3)'
},
{
   question: "The process of converting a solid directly into a gas without going through the liquid phase is called:",
   option: ['Sublimation ','Evaporation','Condensation','Fusion',], 
   answer: 'Sublimation '
},{
   question: "Which of the following is an example of an exothermic reaction?",
   option: ['Burning wood','Melting ice','Dissolving salt in water','Photosynthesis',],
   answer: 'Burning wood'
}

  