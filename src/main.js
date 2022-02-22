

import data from './data/ghibli/ghibli.js';
import generatorHtml from './generator.js';
//console.log(data.films[14].poster);

const nodoRoot = document.getElementById("root");

let todoHtml=""

data.films.forEach(card=>{
  todoHtml += generatorHtml(card) 
})

nodoRoot.innerHTML= todoHtml

