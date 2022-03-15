import { sortData, filterDirector,filterFilms,comparador} from '../src/data.js';

//-------------------------------test del ordenado-----------
describe('que sortData sea una funcion', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
 });
  

  it('Ordenamiento az', () => {
    const dataExample=[
      {"title": "Castle in the Sky"},
      { "title": "Howl's Moving Castle"},
      {"title": "The Wind Rises"},
      {"title": "The Tale of the Princess Kaguya"},
      {"title": "Kiki's Delivery Service"}
    ]
    const response=[
      {"title": "Castle in the Sky"},
      { "title": "Howl's Moving Castle"},
      {"title": "Kiki's Delivery Service"},
      {"title": "The Tale of the Princess Kaguya"},
      {"title": "The Wind Rises"}
    ]
    expect(sortData("az", dataExample)).toStrictEqual(response);
  });


it('Ordenamiento za', () => {
  const dataExample=[{
    "title": "Castle in the Sky"},
    { "title": "Howl's Moving Castle"},
    {"title": "The Wind Rises"},
    {"title": "The Tale of the Princess Kaguya"},
    {"title": "Kiki's Delivery Service"}
  ]
  const response=[
    {"title": "Castle in the Sky"},
    { "title": "Howl's Moving Castle"},
    {"title": "Kiki's Delivery Service"},
    {"title": "The Tale of the Princess Kaguya"},
    {"title": "The Wind Rises"}
  
  ]
  expect(sortData("za", dataExample)).not.toStrictEqual(response);
});
});
   //------------------test filtro pro productor y director-------------
 describe('filtro por Director', () => {
  it('is a function', () => {
    expect(typeof filterDirector ).toBe('function');
  });

  it('filtrar por director', () => {
    const dataExample=[
      {"title": "Castle in the Sky", "director":"Hayao Miyazaki","producer": "Isao Takahata"},
      {"title": "Spirited Away", "director": "Hayao Miyazaki",  "producer": "Toshio Suzuki"},
      {"title": "When Marnie Was There", "director": "Hiromasa Yonebayashi", "producer": "Yoshiaki Nishimura"}

    ]
    const response=[
      {"title": "When Marnie Was There", "director": "Hiromasa Yonebayashi", "producer": "Yoshiaki Nishimura"}
    
    ]
    expect(filterDirector( "Hiromasa Yonebayashi", dataExample)).toStrictEqual(response);
  });
  it('filtrar por productor', () => {
    const dataExample=[
      {"title": "Castle in the Sky", "director":"Hayao Miyazaki","producer": "Isao Takahata"},
      {"title": "Spirited Away", "director": "Hayao Miyazaki",  "producer": "Toshio Suzuki"},
      {"title": "When Marnie Was There", "director": "Hiromasa Yonebayashi", "producer": "Yoshiaki Nishimura"}

    ]
    const response=[
      {"title": "When Marnie Was There", "director": "Hiromasa Yonebayashi", "producer": "Yoshiaki Nishimura"}
    
    ]
    expect(filterDirector( "Yoshiaki Nishimura", dataExample)).toStrictEqual(response);
  });
});
//--------------------------------filtro de buscador--------------------
describe('buscador', () => {
  it('is a function', () => {
    expect(typeof filterFilms).toBe('function');
  });

it('filtrar por titulo', () => {
  const data=[
    {"title": "The Secret World of Arrietty","release_date": "2010","rt_score": "95"},
    {"title": "My Neighbors the Yamadas", "release_date": "1999", "rt_score": "75"},
    {"title": "Grave of the Fireflies",  "release_date": "1988", "rt_score": "97"}
  ]
  const response=[
    {"title": "The Secret World of Arrietty","release_date": "2010","rt_score": "95"}
  ]
  expect(filterFilms("the secret world of arrietty", data)).toStrictEqual(response);
});
it('filtrar por fecha de lanzamiento', () => {
  const data=[
    {"title": "The Secret World of Arrietty","release_date": "2010","rt_score": "95"},
    {"title": "My Neighbors the Yamadas", "release_date": "1999", "rt_score": "75"},
    {"title": "Grave of the Fireflies",  "release_date": "1988", "rt_score": "97"}
  ]
  const response=[
    {"title": "The Secret World of Arrietty","release_date": "2010","rt_score": "95"}
  ]
  expect(filterFilms("2010", data)).toStrictEqual(response);
});

});
//-------------------------test comparador-------------------------
describe('Comparador de puntaje', () => {
  it('is a function', () => {
    expect(typeof comparador).toBe('function');
  });
  it('score es mayor a 94 deberia retornar 5', () => {
    expect(comparador("98")).toBe(5);
    
  });
  it('score esta entre 84 y 94 deberia retornar 4 ', () => {
    expect(comparador("87")).toBe(4);
    
  });
  it('score esta entre 74 y 84 deberia retornar 3', () => {
    expect(comparador("75")).toBe(3);
    
  });
 
  it('score esta entre 40 y 74  deberia retornar 2 ', () => {
    expect(comparador("71")).toBe(2);
    
  });
  it('score es menor a 40 deberia retornar 1 ', () => {
    expect(comparador("20")).toBe(1);
    
  });

});
