
/*Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filter(, condition)`: esta función `filter` o filtrar recibiría la
  , y nos retornaría aquellos datos que sí cumplan con la condición.*/


//--------------------crea una tarjeta por película---------------------------------
export default function generatorHtml(card){
  let numeroCalcifers = comparador(card.rt_score);
  const imagen= `<img src = "./IMG/calcifer.png">`;
 let calcifers = `${(imagen).repeat(numeroCalcifers)}`;
  return `<section class="item">
    <img src="${card.poster}">
    <h2>${card.title}(${card.release_date})</h2>
      <section class="score">
        ${calcifers}
      </section>
    <h3>${card.rt_score}</h3>
  </section>`
}
 
//------------------cálculo agregado-------------------------------------------------
// Mostrar cantidad de calcifers según el puntaje de cada película
// Definir rangos para equivalencias a calcifers
// Hacer una función que que muestre la equivalencia entre el puntaje y nuestro rango establecido
// Pintar en la tarjeta las imégenes que representan la equivalencia

// función que arroje el número de calcifers a los que corresponde la puntuación
export function comparador(puntaje){
  if(puntaje > 94){
      return 5;
  }else if(puntaje <= 94 && puntaje > 84){
    return 4;
  }else if(puntaje <= 84 && puntaje > 74){
    return 3;
  }else if(puntaje <= 74 && puntaje > 40){
    return 2;
  }else{
    return 1;
  }
}


//--------------------crea una tarjeta por personaje---------------------------------
export function characterGenerator(element){
    return `<section class="item"><img src="${element.img}">
    <h2>${element.name}(${element.gender})</h2>
    <h3>${element.specie}</h3></section>`
}



//--------------------Ordenado por título de A-Z y Z-A---------------------------------
export function sortData(opcion, data){
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

//-------------------Buscador películas------------------------------------------------
   export function filterFilms(word,data) {
      return data.filter((oneFilm) => oneFilm.title.toLowerCase().includes(word) || oneFilm.release_date.includes(word));
    }

//-------------------Filtrado por director------------------------------------------------
export function filterDirector(word,data){
  return data.filter((oneFilm) => oneFilm.director == word || oneFilm.producer == word);
}