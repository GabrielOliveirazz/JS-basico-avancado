function zeroAesquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAesquerda(data.getDate())
    const mês = zeroAesquerda(data.getMonth() + 1)
    const ano = zeroAesquerda(data.getFullYear())
    const hora = zeroAesquerda(data.getHours())
    const minuto = zeroAesquerda(data.getMinutes())
    const segundo = zeroAesquerda(data.getSeconds())

    return `${dia}/${mês}/${ano} ${hora}:${minuto}:${segundo}`
}

const data = new Date()
const dataBr = formataData(data)
console.log(dataBr)