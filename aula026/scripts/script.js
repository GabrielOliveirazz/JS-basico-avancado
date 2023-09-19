const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#alutra')
    
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if (!peso) {
        setResultado('Peso inválido')
        return 
    }
    const 
})

function criaP () {
    const p = document.createElement('p')
    return p
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()
}