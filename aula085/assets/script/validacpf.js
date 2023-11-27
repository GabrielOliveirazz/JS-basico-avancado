// 705.484.450-52 # 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false, 
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ''),
        })
    }

    éSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const d1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const d2 = ValidaCPF.geraDigito(cpfSemDigitos + d1)
        this.novoCPF = cpfSemDigitos + d1 + d2
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica)
            reverso--;
        }

        const d = 11 - (total % 11);
        return d <= 9 ? String(d) : '0'
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCpf()
        console.log(this.novoCPF)
        return this.novoCPF === this.cpfLimpo
    }
}

//let validaCPF = new ValidaCPF('070.987.720-03')

//console.log(validaCPF.valida())