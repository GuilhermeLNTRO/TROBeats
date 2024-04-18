function verifBandeira() {
    var numeroCartao = document.getElementById("cc").value;

    document.getElementById("visa").checked = false;
    document.getElementById("master").checked = false;
    document.getElementById("amex").checked = false;

    var primeiroDigito = parseInt(numeroCartao.charAt(0));
    erroCartao('')
    if (primeiroDigito === 4) {
        document.getElementById("visa").checked = true;
    } else if (primeiroDigito === 3) {
        var segundoDigito = parseInt(numeroCartao.charAt(1));
        if (segundoDigito === 4 || segundoDigito === 7) {
            document.getElementById("amex").checked = true;
        } else {
            erroCartao('Cartão inválido!');
        }
    } else if (primeiroDigito === 5) {
        var doisDigitos = parseInt(numeroCartao.slice(0, 2));
        if (doisDigitos >= 51 && doisDigitos <= 55) {
            document.getElementById("master").checked = true;
        } else {
            erroCartao('Cartão inválido!');
        }
    } else {
        erroCartao('Cartão inválido!');
    }

    function erroCartao(mensagem){
        document.getElementById('erro-cartao').textContent = mensagem;
    }
}