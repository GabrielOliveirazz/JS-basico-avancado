function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

// {} <- this ->número
const p1 = new Pessoa('Gabriel', 'Oliveira')
const p2 = new Pessoa('Rayanne', 'Nayara')

console.log(p1)
console.log(p2)

