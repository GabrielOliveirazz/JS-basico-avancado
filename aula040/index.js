const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Continue continua para a próxima interação
// Break sai do laço


for (let i in numeros){
    let numero = numeros[i]
    
    if (numero === 2) { 
        console.log('Pulei o 2')
        continue
    }

    if (numero === 7) {
        console.log('sete encontrado, saindo')
        break
    }

    console.log(numero)
}