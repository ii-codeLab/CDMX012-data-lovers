

import data from './data/ghibli/ghibli.js';
import generatorHtml from './data.js';
//console.log(data.films[14].poster);

const nodoRoot = document.querySelector(".root");

let todoHtml=""

data.films.forEach(card=>{
  todoHtml += generatorHtml(card) 
})

nodoRoot.innerHTML= todoHtml

