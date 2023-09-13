const nome = 'Gabriel'
const sobrenome = 'Oliveira'
const idade = 16
const peso = 58
const altura = 1.68
let imc = 17.71541950113379
let anoNasc 
anoNasc = 2023 - idade 


// SEM TEMPLATES STRINGS
/*
console.log(nome + ' ' + sobrenome, 'tem',  idade, 'anos pesa', peso + 'kg')
console.log('tem', altura, 'de alturae seu IMC é de', imc)
console.log(nome + ' Nasceu em', anoNasc + '.')
*/

// COM TEMPLATES STRING
console.log(`${nome} ${sobrenome} tem, ${idade} anos pesa ${peso} kg`)
console.log(`tem ${altura} de altura seu IMC é de ${imc}`)
console.log(`${nome} Nasceu em ${anoNasc}.`)
