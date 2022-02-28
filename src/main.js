

import data from './data/ghibli/ghibli.js';
import generatorHtml from './data.js';
import {searchFilters} from './data.js';
import {characterGenerator} from './data.js';
//console.log(data["fims"[1]]["people"]);

//const nodoContainer = document.querySelector(".container");
const nodoRoot = document.querySelector(".root");
let todoHtml=""
//        Personajes
const nodoPeople=document.querySelector(".people");
const movies= data.films
const filmOne= movies[0]
const characters= filmOne.people 
const allCharacters=[];
let todoCharacters=""

for (let index = 0; index < movies.length; index++) {
   allCharacters.push(movies[index].people);
   console.log(allCharacters);
}
movies.forEach(card=>{
  todoHtml += generatorHtml(card) 
})
nodoRoot.innerHTML= todoHtml;

allCharacters.forEach(character=>{
  todoCharacters += characterGenerator(character) 
})
nodoPeople.innerHTML=todoCharacters;
/*characters.forEach(card=>{
  todoCharacters += characterGenerator(character) 
})*/

//nodoContainer.innerHTML= todoCharacters;
searchFilters(".search",".item")
