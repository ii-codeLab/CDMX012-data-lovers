
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

//------Recibe las palabras ingresadas y las compara con todo el contenido de la -------
//----------------clase item y oculta aquello que no coincide---------------------------
export function searchFilters(input,selector){
 document.addEventListener("keyup",(e) =>{
   if(e.target.matches(input)){
     console.log(e.target.value);
     document.querySelectorAll(selector).forEach((el) => 
      el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
       ? el.classList.remove("filter")
       : el.classList.add("filter")
     );
   }
 });
}


/* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.*/


/*export function sortData(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();
  if (titleA > titleB) {
    return 1;
  }
  if (titleA < titleB) {
    return -1;
  }
  // a must be equal to b
  return 0;
}*/

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
      // a must be equal to b
      return 0;
    }else{
      if (titleA > titleB) {
        return -1;
      }
      if (titleA < titleB) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }
  });
}