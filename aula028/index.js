//const tresHoras = 60 * 60 * 3 * 1000
//const umDia = 60 * 60 * 24 * 1000
//const data = new Date(2023, 8, 14, 26) // ano / mês / dia / hora / minutos / segundos / milisegundos 
const data = new Date('2023-09-20 14:33:43') 
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana ', data.getDay())
console.log(data.toString())
console.log(Date.now())