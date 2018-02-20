var botaoAdd = document.querySelector('#adicionar-paciente');
botaoAdd.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Oi eu sou o botao');
    //query selector permite que eu acesse os elementos do form pelo id direto
    var form = document.querySelector("#form-adiciona");
    //pega valor dos input
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    //criacao da tr principal e das td 
    var linhaTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");

    //atribui valor digitado nas td;
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaIMC(peso, altura);

    //coloca as td dentro da tr;
    linhaTr.appendChild(nomeTd);
    linhaTr.appendChild(pesoTd);
    linhaTr.appendChild(alturaTd);
    linhaTr.appendChild(gorduraTd);
    linhaTr.appendChild(imcTd);

    //pegando e colocando tr dentro da tabela
    var tabela = document.querySelector('#tabela-pacientes');
    linhaTr.classList.add('paciente');

    tabela.appendChild(linhaTr);


});