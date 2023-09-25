/*try {  
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou um erro')
    console.log('fechei o arquivo')
} catch(e) {
 console.log('Tratando o erro')
} finally {
    console.log('FINALLY: Eu sempre sou executado')
}
*/

function retornaHora(data) {
    if (!(data instanceof Date)) {
        console.log('n é')
        throw new TypeError('Esperando intância de Date')
    }
    if(!data) {
        data = new Date()
    }
}

return data.toLocalTimeString('pt-BR', {
    hora12: false
})

const hora = retornaHora()
console.log(hora)