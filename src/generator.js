import {comparator} from './data.js';
//--------------------crea una tarjeta por película---------------------------------
export  function generatorHtml(card){
    let calciferNumber = comparator(card.rt_score);
    const picture= `<img src = "./IMG/calcifer.png">`;
    let calcifers = `${(picture).repeat(calciferNumber)}`;
    return `<section class="item">
                      <img src="${card.poster}">
                      <h2>${card.title}(${card.release_date})</h2>
                       <section class="score">
                         ${calcifers}
                        </section>
                          <h3>${card.rt_score}</h3>
                </section>`        
}

  //--------------------crea una tarjeta por personaje---------------------------------
export function characterGenerator(element){
    return `<section class="item"><img src="${element.img}">
    <h2>${element.name}(${element.gender})</h2>
    <h3>${element.specie}</h3></section>`
}
