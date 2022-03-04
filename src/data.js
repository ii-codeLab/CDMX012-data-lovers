
/*Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.*/


//--------------------crea una tarjeta por película---------------------------------
export default function generatorHtml(card){
  return `<section class="item"><img src="${card.poster}">
  <h2>${card.title}(${card.release_date})</h2>
  <h3>${card.rt_score}</h3></section>`
}
 
//--------------------crea una tarjeta por personaje---------------------------------
export function characterGenerator(element){
  //console.log(character);
    return `<section class="item"><img src="${element.img}">
    <h2>${element.name}(${element.gender})</h2>
    <h3>${element.specie}</h3></section>`
}



//--------------------Ordenado por título de A-Z y Z-A---------------------------------
export function sortData(opcion,data){
  return data.sort(function(a,b){
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if(opcion=="az"){
      if (titleA > titleB) {
        return 1;
      }
      if (titleA < titleB) {
        return -1;
      }
      return 0;
    }else{
      if (titleA > titleB) {
        return -1;
      }
      if (titleA < titleB) {
        return 1;
      }
      return 0;
    }
  });
}

//-------------------Buscador pel+iculas------------------------------------------------
   export function filterFilms(word,data) {
    // console.log(title);
      return data.filter((oneFilm) =>oneFilm.title.toLowerCase().includes(word)||oneFilm.release_date.toLowerCase().includes(word));
    }
