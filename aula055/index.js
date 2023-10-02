// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
    
    const sobrenome = 'Oliveira'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log('Gabriel')
    }

    falaNome() 
    console.log(idade, peso, altura)
})(16, 58, 1.68)