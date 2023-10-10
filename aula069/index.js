const pessoa1 = new Object()
pessoa1.nome = 'Gabriel'
pessoa1.sobrenome = 'Oliveira'
pessoa1.idade = 16
pessoa1.falarNome = function() {
    return console.log(`${this.nome} ${this.sobrenome} está falando seu nome e sua idade ${this.idade})
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())