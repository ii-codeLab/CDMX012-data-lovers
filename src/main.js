
/*Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....*/

import data from './data/ghibli/ghibli.js';
import generatorHtml from './data.js';
import {characterGenerator} from './data.js';
import { sortData } from './data.js';
import{filterFilms} from './data.js';
import { filterDirector } from './data.js';

//---------------VARIABLES----------------------------------------------------------
//----------llamando input search------------------
const search=document.querySelector(".search");

//----------Variables para ordenar-----------------
const nodoMenuO = document.querySelector(".menuO");

//-----------Variables para filtrar----------------
const nodoMenuF = document.querySelector(".menuF");

//----------------------Variables para mostrar películas----------------------------
const nodoRoot = document.querySelector(".root");
let todoHtml=[];      //cambiamos de string a array

//----------------------Variables para mostrar personajes----------------------------
const nodoPeople=document.querySelector(".people");
const movies= data.films 
//let currentMovies = "";
const allCharacters=[];
let todoCharacters="";
//-----------------------*INTERACCIÓN*-------------------------------------------------

//------------------------PELÍCULAS--------------------------------------------------
//------------Va almacenando las tarjetas de cada película---------------------------
movies.forEach(card=>{
  todoHtml += generatorHtml(card) 
})
//console.log(todoHtml);
//------------Muestra las tarjetas de las películas en HTML---------------------------
nodoRoot.innerHTML= todoHtml;

//----------------------PERSONAJES----------------------------------------------------
//----------Crea un arreglo con todos los personajes de todas las películas-----------
for (let index = 0; index < movies.length; index++) {
   allCharacters.push(movies[index].people);
} 
//console.log(allCharacters);

/*let calcifers = "";
for (let i= 0; i < movies.length; i++) {
  calcifers.push(movies[i].rt_score);
} 
console.log(calcifers);*/

/* ---------Primero accede al arreglo de personajes de cada peícula y después aaccede a 
cada uno de los personajes por película----------------------------------------------*/
allCharacters.forEach(character=>{
  character.forEach(element=>{
    todoCharacters += characterGenerator(element)})
})

//------------------------------Buscador----------------------------------------------
search.addEventListener("keyup",(e) => {
  let searchFilm = filterFilms(e.target.value.toLowerCase(),movies);
  let htmlSearch = ""
  searchFilm.forEach(everyFilm =>{
      htmlSearch += generatorHtml(everyFilm)      
  })
 nodoRoot.innerHTML = htmlSearch;
  })

 //------------------------------Filtrado por director--------------------------------
 nodoMenuF.addEventListener("change",(e)=>{
  let filterD = filterDirector(e.target.value,movies)
  console.log(e.target.value);
  let directors = "";
  filterD.forEach(oneFilm =>{
    directors += generatorHtml(oneFilm);
  })
  nodoRoot.innerHTML = directors;
})

//-------------------------------Ordenado---------------------------------------------
nodoMenuO.addEventListener("change",(e)=>{
  let sortFilms = sortData(e.target.value, movies);
  let htmlSort = ""
  sortFilms.forEach(oneFilm =>{
    htmlSort += generatorHtml(oneFilm)
  })
  nodoRoot.innerHTML = htmlSort;
})

//------------Muestra las tarjetas de los personajes en HTML---------------------------
//nodoPeople.innerHTML=todoCharacters;

