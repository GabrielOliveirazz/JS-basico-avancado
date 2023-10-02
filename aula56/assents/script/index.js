function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        // Faz a conta também ser realizada caso aperte e solte a tecla enter
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        // Faz a conta
        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('Conta Inválida')
                    return
                }

                this.display.value = String(conta)
            }catch {
                alert('Conta Inválida')
                return
            }
        },

        // Botão de Clear (Apagar Tudo)
        clearDisplay() {
            this.display.value = " "
        },

        // Botão de apagar uma caractere só
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        // Adiciona o valor clicado no input
        cliqueBotoes() {
            document.addEventListener('click', e => {
               const el = e.target

               if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
               }

               if (el.classList.contains('btn-clear')) {
                    this.clearDisplay
               }

               if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
               }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()