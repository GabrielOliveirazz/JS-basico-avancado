const pessoas = [
    {id: 3, nome: 'Thiago'},
    {id: 1, nome: 'Gabriel'},
    {id: 2, nome: 'Rayanne'},
]

//const novasPessoas = {}
//for (const pessoa of pessoas) {
//    const { id } = pessoa 
//    novasPessoas[id] = { ...pessoa }
//}

//console.log(novasPessoas)

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa 
    novasPessoas.set(id,  { ...pessoa })
}
0
console.log(novasPessoas)