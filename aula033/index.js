const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Oliveira',
    idade: 16,
    endereço: {
        rua: 'Egidio Guidotti',
        bairro: 'Novo Osasco',
        cidade: 'Osasco',
        N: 3,
    }
}
const { endereço: {rua, N,}, endereço} = pessoa 
console.log(rua, N, endereço)