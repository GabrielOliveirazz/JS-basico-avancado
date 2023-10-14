function ValidaCPF(cpfenviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfenviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)  

    this.criaDigito()
    return true
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1
    const digito = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo --
        return ac
    }, 0)
    console.log(digito)
}

const cpf = new ValidaCPF('705,484,450-52')
console.log(cpf.valida())
