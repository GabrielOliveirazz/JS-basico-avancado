// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome 
    this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome
}

// Pessoa.protype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Gabriel', 'Oliveira')
const data = new Date()

console.dir(pessoa1)
console.dir(data)

