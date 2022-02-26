

import data from './data/ghibli/ghibli.js';
import generatorHtml from './data.js';
import {searchFilters} from './data.js';
//import {characterGenerator} from './data.js';
//console.log(data["fims"[1]]["people"]);

//const nodoContainer = document.querySelector(".container");
const nodoRoot = document.querySelector(".root");
let todoHtml=""
//        Personajes
const movies= data.films
const filmOne= movies[0]
const characters= filmOne.people 

let todoCharacters=""


data.films.forEach(card=>{
  todoHtml += generatorHtml(card) 
})

nodoRoot.innerHTML= todoHtml;

searchFilters(".search",".item")
/*characters.forEach(character=>{
  todoCharacters += characterGenerator(character) 
})

nodoContainer.innerHTML= todoCharacters;*/

