'use strict';

const input = document.querySelector('.main__input');
const btn = document.querySelector('.main__btn');

function send(e){
    let value = e.currentTarget;
    value = input.value;
    console.log(value);
}

//Al hacer click en buscar, pedir a Github la información sobre la usuaria en su API

function github(){         
  fetch('https://api.github.com/users/' + input.value)
  .then(response => response.json())
  .then(data => {
    const result = document.querySelector('.main__result');
        result.innerHTML = data.name;
  });
 }

 function all(){
     return send;
     return github;
 }
 btn.addEventListener('click', all);

//Seleccionaremos sólo el nombre

//Escribir cada letra en un <li> de una lista ordenada