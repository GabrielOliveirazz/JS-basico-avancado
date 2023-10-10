const produto = { nome: 'Caneca', preco: 35.50}

Object.defineProperty(produto, 'nome', {
    value: 'Caneca',
    writable: false,
    enumerable: true,
    configurable: false
}) 

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(produto)

//const camiseta = { nome: produto.nome, preco: produto.preco}