const pessoa1 = {
    nome:'Gab',
    sobren: 'Oliveira',
    idade: 16,

    fala() {
        console.log(`${this.nome} ${this.sobren} tem ${this.idade} e está aprendendo JS`)
    }
}

pessoa1.fala()