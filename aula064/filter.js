/*const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(valor => valor > 10)

console.log(numerosFiltrados)*/

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome:'Wallace', idade: 47},
]

// Mostra os nomes com 5 ou mais letras
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasComNomeGrande)

// Mostra pessoas que tem mais de 50 anos 
const pessoasComMaisde = pessoas.filter(num => num.idade > 50) 
console.log(pessoasComMaisde)

// Mostra pessoas que o nome termina com a letra 'a'
const pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasNomeTerminaComA)