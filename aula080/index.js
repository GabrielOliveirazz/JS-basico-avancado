class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome 
        this.sobrenome = sobrenome 
    }

    falar() {
        console.log(`${this.nome}, está falando`)
    }

    comer() {
        console.log(`${this.nome}, está comendo`)
    }

    beber() {
        console.log(`${this.nome}, está bebendo`)
    }
}

const p1 = new Pessoa('Gabriel', 'Oliveira')
const p2 = new Pessoa('Rayanne', 'Nayara')
const p3 = new Pessoa('Thiago', 'Moura')

console.log(p1) 