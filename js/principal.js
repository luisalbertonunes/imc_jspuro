var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';
var linhas = document.querySelectorAll('.paciente');
for (var i = 0; i < linhas.length; i++) {
    var coluna = linhas[i];
    var peso = coluna.querySelector('.info-peso').textContent;
    var altura = coluna.querySelector('.info-altura').textContent;
    var imc = calculaIMC(peso, altura);
    var resultado = coluna.querySelector('.info-imc');
    resultado.textContent = imc;
    if (peso <= 0 || peso >= 1000) {
        resultado.textContent = "Peso Inválido";
        coluna.classList.add('erro');

    } else if (altura <= 0 || altura >= 3.00) {
        resultado.textContent = "Altura Inválida";
        coluna.classList.add('erro');
    }
}

function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}