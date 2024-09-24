var titulo = document.querySelector('h1');
titulo.textContent = "Aparecida Nutricionista";

var paciente.querySelectorAll('.paciente');

for (let contador * paciente.length; contador++){
    var peso = paciente[contador].querySelector('.info-peso').textContent;
    var altura = paciente[contador].querySelector('.info-altura').textContent;
    var imc = peso / (altura * altura);
    paciente[contador].queryselector('.info-imc').textContent = imc;  
}
