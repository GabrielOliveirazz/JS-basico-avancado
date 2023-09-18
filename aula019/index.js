/*
 Primitivos - string - number - boolean - undefined, null (bigint, symbol) (Copiados)

 Referência (mutavél) - array - object - function (Passados por referência)
*/

const a = {
    nome: 'Gabriel',
    sobrenome: 'Moura',
}

const b = {...a}

console.log(b)

a.nome = 'João'
console.log(b)
console.log(a)


/*
let a = [1, 2 ,3]
let b = [...a]

console.log(a, b)

a.push(4)

console.log(a, b)

b.pop()
console.log(b, a)
*/