function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

esperaAi('frase 1', 1000)
esperaAi('frase 2', 2000)
esperaAi('frase 3', 3000)
esperaAi('frase 4', 4000)

