// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave 
        value: estoque, // Valor da chave
        writable: false, // Pode Alterar se for TRUE, Não pode se for FALSE
        configurable: true //Configuravél se for TRUE, não pode se for FALSE
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}
const p1 = new Produto('Camisa', 20, 3)
console.log(p1)

for(let chave in p1) {
    console.log(chave)
}