// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou metodos privados
    const id = 123456
    const metodoInterno = function() {

    }
    // Atributos ou metodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ' Sou um metodo')
    }
}

const p1 = new Pessoa('Gabriel', 'Oliveira')
const p2 = new Pessoa('Rayanne', 'Nayara')

p2.metodo()
