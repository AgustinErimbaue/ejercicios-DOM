console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const tituloGeneration1 = document.querySelector('#gen-1')
tituloGeneration1.innerText = 'Generasión 1 Pokimon';
console.log(tituloGeneration1);

//Cambia el color de fondo de la primera generación de Pokimon.
const backgroundColor = document.querySelector('.infocard-list');
backgroundColor.style.background = 'pink'
console.log(backgroundColor);

let page;
page = document;

//Imprime por consola la URL de la página.
page = document.URL
console.log(page);

//Imprime por consola el dominio de la página.
page = document.domain
console.log(page);

//Imprime todos los nodos de imagen

const nodos = document.querySelectorAll("img")
console.log(nodos);

//Sustituye el atributo "src" de todas las imágenes por este
for (const imagenes of nodos) {
    imagenes.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif'
}

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying


const voladores = document.querySelectorAll('.flying')

for (const a of voladores) {
    a.parentNode.parentNode.style.background = 'red'
}

