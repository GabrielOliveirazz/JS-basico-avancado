function retornaFuncao() {
    const nome = 'Gabriel'
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('Ray')
const funcao2 = retornaFuncao('Scar')
console.log(funcao(), funcao2())