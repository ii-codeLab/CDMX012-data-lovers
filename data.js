
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
     // return 0;
    }else{
      if (titleA > titleB) {
        return -1;
      }
     /* if (titleA < titleB) {
        return 1;
      }
      //return 0;*/
    }
  })
}


//-------------------Buscador películas------------------------------------------------
   export function filterFilms(word,data) {
      return data.filter((oneFilm) => oneFilm.title.toLowerCase().includes(word) || oneFilm.release_date.includes(word));
    }

//-------------------Filtrado por director------------------------------------------------
export function filterDirector(word,data){
  return data.filter((oneFilm) => oneFilm.director == word || oneFilm.producer == word);
}