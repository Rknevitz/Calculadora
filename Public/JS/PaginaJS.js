var reset = false;

function inserir(valor) {
    var valores = document.getElementById('tela').innerHTML;
    if(valores == "Nada para resolver :("){
        document.getElementById('tela').innerHTML = "" + valor;
    }else{
        document.getElementById('tela').innerHTML = valores + valor;
    }
    if(reset == true){
        if(valor == "+" || valor == "-" || valor == "*" || valor == "/"){
            document.getElementById('tela').innerHTML = valores + valor;
            reset = false;
        }else{
        reset = false;
        document.getElementById('tela').innerHTML = "" + valor;
        }
    }
}

function excluir() {
    document.getElementById('tela').innerHTML = "";
    document.getElementById('minitela').innerHTML = "";
}

function deletar() {
    var result = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = result.substring(0, result.length - 1);
}

function igual(sinal) {
    if(sinal == "="){
        reset = true;
        document.getElementById('minitela').innerHTML = document.getElementById('tela').innerHTML + "=";
    }
    var igual = document.getElementById('tela').innerHTML;
    if (igual) {
        document.getElementById('tela').innerHTML = eval(igual);
    } else {
        document.getElementById('tela').innerHTML = "Ops! Tente novamente";
    }
}


function divisor() {
    var divisor = document.getElementById('tela').innerHTML;
    if (divisor) {
        document.getElementById('tela').innerHTML = 1 / (divisor);
    } else {
        document.getElementById('tela').innerHTML = "Ops! Tente novamente";
    }
}

function multiplicar(){
    var vUm = parseInt(document.getElementById('valorUmM').value);    
    var vDois = parseInt(document.getElementById('valorDoisM').value);
    var mult = 0;

    for(var i=0; i<vDois; i++){
        mult += vUm;
    }

    document.getElementById('resposta').innerHTML = "RESPOSTA <br>"+ mult;

}
const audio = new Audio();
audio.src="../audio/Audio1.mp3";