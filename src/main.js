
/*Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....*/

import data from './data/ghibli/ghibli.js';
import generatorHtml from './data.js';
import {searchFilters} from './data.js';
import {characterGenerator} from './data.js';
//import { sortData } from './data.js';
import { sortData } from './data.js';


// Variables para ordenar
const nodoMenuO = document.querySelector(".menuO");
//       Variables para mostrar películas
const nodoRoot = document.querySelector(".root");
let todoHtml=""

//       Variables para mostrar personajes
const nodoPeople=document.querySelector(".people");
const movies= data.films 
const allCharacters=[];
let todoCharacters=""

//console.log(movies.sort(sortData));
//const currentMovies=movies 

//------------Va almacenando las tarjetas de cada película---------------------------
movies.forEach(card=>{
  todoHtml += generatorHtml(card) 
})
//------------Muestra las tarjetas de las películas en HTML---------------------------
nodoRoot.innerHTML= todoHtml;

nodoMenuO.addEventListener("change",(e)=>{
  let sortFilms = sortData(e.target.value,movies);
  let htmlSort = ""
  sortFilms.forEach(oneFilm =>{
    htmlSort += generatorHtml(oneFilm)
  })
  nodoRoot.innerHTML = htmlSort;
})
//----------Crea un arreglo con todos los personajes de todas las películas-----------
for (let index = 0; index < movies.length; index++) {
   allCharacters.push(movies[index].people);
} 
//console.log(allCharacters);

/* ---------Primero accede al arreglo de personajes de cada peícula y después aaccede a 
cada uno de los personajes por película----------------------------------------------*/
allCharacters.forEach(character=>{
  character.forEach(element=>{
    todoCharacters += characterGenerator(element)})
})


//------------Muestra las tarjetas de los personajes en HTML---------------------------
nodoPeople.innerHTML=todoCharacters;

//------Llama a la función para filtrar coincidencias dentro de la clase "item"--------
searchFilters(".search",".item")
