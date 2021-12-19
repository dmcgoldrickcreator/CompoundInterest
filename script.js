const princeBox = document.querySelector("#principal")
const intBox = document.querySelector("#interest")
const numBox = document.querySelector("#ncompounded")
const yearBox = document.querySelector("#time")
const totalSpan = document.querySelector("#balance")
//const button = document.querySelector('input')
//const paragraph = document.querySelector('p')

function computeInterest(){
  const principal = princeBox.value
  const interest = intBox.value / 100.0
  const nCompounded = numBox.value
  const time = yearBox.value
  const balance = principal*Math.pow((1 + interest/nCompounded), time * nCompounded)  
  totalSpan.textContent = balance
 
}
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);
/*
function updateButton() {
  if (button.value === 'Start machine') {
    button.value = 'Stop machine';
    paragraph.textContent = 'The machine has started!';
  } else {
    button.value = 'Start machine';
    paragraph.textContent = 'The machine is stopped.';
  }
}*/
function updateButton() {
  if (button.value === 'Click me for fun!') {
    button.value = 'Hide';
    paragraph.textContent = 'Hover over the balance number for a transition';

    
  }
  else{
    button.value = 'Click me for fun!';
    paragraph.textContent = '';

  }
}
princeBox.addEventListener('input', computeInterest)
intBox.addEventListener('input', computeInterest)
numBox.addEventListener('input', computeInterest)
yearBox.addEventListener('input', computeInterest)
//button.addEventListener('click', updateButton)