// estas funciones son de ejemplo
export default function generatorHtml(card){
  return `<section class="item"><img src="${card.poster}">
  <h2>${card.title}(${card.release_date})</h2>
  <h3>${card.rt_score}</h3></section>`
}
 
export function characterGenerator (character){
  return `<section class="item"><img src="${character.img}">
  <h2>${character.name}(${character.gender})</h2>
  <h3>${character.specie}</h3></section>`
}

export function searchFilters(input,selector){
 document.addEventListener("keyup",(e) =>{
   if(e.target.matches(input)){
     console.log(e.target.value);
     document.querySelectorAll(selector).forEach((el) => 
      el.textContent.toLowerCase().includes(e.target.value)
       ? el.classList.remove("filter")
       : el.classList.add("filter")
     );
   }
 });
}