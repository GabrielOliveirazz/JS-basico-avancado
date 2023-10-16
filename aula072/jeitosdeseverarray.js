
const produto = { nome: 'Caneca', preco: 35.50}
console.log(Object.values(produto)) // Mostra só o valor
console.log(Object.keys(produto)) // Mostra a chaves
console.log(Object.entries(produto)) // Mostra os dois

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}



