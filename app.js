

let intentos = 1;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
console.log('Numero secreto' + numeroSecreto);
let bandera = false;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}
function verificarIntento() {
    let numerosDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numerosDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        limpiarCaja();
        console.log(numerosDeUsuario);
        console.log(numeroSecreto);
        if (numerosDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        }
        else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
    }
    return;
}
function reiniciarJuego() {
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    limpiarCaja();
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos lo números posibles');
    }
    else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');