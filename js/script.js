import{Modal} from './modal.js';
import { AlertError } from './alert-error.js';
import {calculateIMC, notAnNumber} from "./utils.js"


// variaveis

const form = document.querySelector('form');
const inputWeigth = document.querySelector('#weight');
const inputHeigth = document.querySelector('#height');




form.onsubmit = function (event) {
  event.preventDefault();

  const weigth = inputWeigth.value;
  const heigth = inputHeigth.value;
  const weigthOrHigthIsNotANumber = notAnNumber(weigth) || notAnNumber(heigth)

  
  
  if(weigthOrHigthIsNotANumber){
   AlertError.open()
    return;
  }
  AlertError.close()
  
  const result = calculateIMC(weigth, heigth)
  displayResultmessage(result)
 

  
};


function displayResultmessage(result){
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open()

}

//fechar a janela de erro ao digitar no campo 
 inputHeigth.oninput = ()=> AlertError.close()
 inputWeigth.oninput = ()=> AlertError.close()

