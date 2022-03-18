import {comparador} from './data.js';
//--------------------crea una tarjeta por película---------------------------------
export  function generatorHtml(card){
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

/*export  function generatorDescription(film){
  //console.log(film.description);
    return `<section class = "item">
        <p>${film.description}</p>
      </section>`
}*/
  //--------------------crea una tarjeta por personaje---------------------------------
export function characterGenerator(element){
    return `<section class="item"><img src="${element.img}">
    <h2>${element.name}(${element.gender})</h2>
    <h3>${element.specie}</h3></section>`
}
