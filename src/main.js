
/*Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....*/

import data from './data/ghibli/ghibli.js';
import {generatorHtml} from './generator.js';
import {characterGenerator} from './generator.js';
import { sortData } from './data.js';
import{filterFilms} from './data.js';
import { filterDirector } from './data.js';

//---------------VARIABLES----------------------------------------------------------
//----------llamando input search------------------
const search=document.querySelector(".search");
// menues

//----------Variables para ordenar-----------------
const nodoMenuO = document.querySelector(".menuO");

//-----------Variables para filtrar----------------
const nodoMenuF = document.querySelector(".menuF");

//----------------------Variables para mostrar películas----------------------------
const nodoRoot = document.querySelector(".root");
const btnMovies = document.querySelector(".btnMovies")
let allHtml=[];      //cambiamos de string a array
//let allDescriptions = ""

//----------------------Variables para mostrar personajes----------------------------
const btnCharacters = document.querySelector(".btnCharacters");
const movies= data.films 
const allCharacters=[];
let totalCharacters="";

//-----------------------*INTERACCIÓN*-------------------------------------------------

//------------------------PELÍCULAS--------------------------------------------------
//------------Va almacenando las tarjetas de cada película---------------------------
btnMovies.addEventListener("click", () =>{ 
  nodoMenuF.style.display="";
  nodoMenuO.style.display="";
  nodoRoot.innerHTML = ""
  movies.forEach(card=>{
  allHtml += generatorHtml(card)
})
nodoRoot.innerHTML = allHtml;
})
//------------Muestra las tarjetas de las películas en HTML---------------------------


//----------------------PERSONAJES----------------------------------------------------
//----------Crea un arreglo con todos los personajes de todas las películas-----------
for (let index = 0; index < movies.length; index++) {
   allCharacters.push(movies[index].people);
} 



/* ---------Primero accede al arreglo de personajes de cada peícula y después aaccede a 
cada uno de los personajes por película----------------------------------------------*/
btnCharacters.addEventListener("click", () =>{
  nodoMenuF.style.display="none";
  nodoMenuO.style.display="none";
  nodoRoot.innerHTML=""
  allCharacters.forEach(character=>{
  character.forEach(element=>{
    totalCharacters += characterGenerator(element)})
})
nodoRoot.innerHTML = totalCharacters;
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
  let directors = "";
  filterD.forEach(oneFilm =>{
    directors += generatorHtml(oneFilm);
  })
  nodoRoot.innerHTML = directors;
})

//-------------------------------Ordenado películas---------------------------------------------
nodoMenuO.addEventListener("change",(e)=>{
  let sortFilms = sortData(e.target.value, movies);
  let htmlSort = ""
  sortFilms.forEach(oneFilm =>{
    htmlSort += generatorHtml(oneFilm)
  })
  nodoRoot.innerHTML = htmlSort;
})



