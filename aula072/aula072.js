const produto = { nome: 'Caneca', preco: 35.50} 
const camiseta = { nome: produto.nome, preco: produto.preco}

camiseta.nome = 'Camiseta'
camiseta.preco = 2.5

console.log(produto)
console.log(camiseta)