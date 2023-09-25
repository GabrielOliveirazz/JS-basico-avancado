
// Minha solução
/*
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const container = document.querySelector('#container')

container.innerHTML = `<p>Frase 1</p> <div>Frase 2</div> <footer>Frase 3</footer> <section id="frase4">Frase 4</section>`
*/

// Solução do prof

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const container = document.querySelector('#container')
const div = document.createElement('div')

for(let i = 0; i < elementos.length; i++) { 
    let { tag, texto } = elementos[i]
    let criada = document.createElement(tag)
    criada.innerText = texto 
    div.appendChild(criada)
}

container.appendChild(div)