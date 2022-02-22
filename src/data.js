// estas funciones son de ejemplo

export const example = (data) => {
  let title= data.films[0].title
  return title.result;
};
  

export const anotherExample = () => {
  return 'OMG';
};

function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.createElement("section");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

function showPrincipal (data){
    const newSection = document.createElement("section");
    let newContent = document.createElementNode.data;
    newSection.appendChild(newContent);
    const currentSection = document.getElementById("root");
    document.body.insertBefore(newSection, currentSection);
}
export {showPrincipal};