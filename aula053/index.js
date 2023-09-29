function retornaFuncao() {
    const nome = 'Gabriel'
    return function() {
        return nome
    }
}

const funcao = retornaFuncao
console.log(funcao)