const nome = 'Gabriel Oliveira'

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i])
}

console.log('#####')

for (let valor of nome) { // pega o valor 
  console.log(valor)
}

console.log('#####')

for (let i in nome) { // pega o indice 
  console.log(nome[i])
}

console.log('#####')

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (interáveis, array ou strings)
