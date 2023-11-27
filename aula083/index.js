class controleRemoto {
    constructor(tv) {
        this.tv
        this.volume = 0
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 1
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 1
    }

    // Método de estático
    static trocaPilha() {
        console.log('OK, vou trocar')
    }
}

const c1 = new controleRemoto('LG')
c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
c1.diminuirVolume()
console.log(c1)
    
controleRemoto.trocaPilha()