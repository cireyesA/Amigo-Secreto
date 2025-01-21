// Fucionalidades:
//1)Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
//2) Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
//3)Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
//4)Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
 
// -------------------------------------------------------------
// // Se declara el arreglo en donde van a ir los nombres
let nombres = [];

// Como ya declaramos el arreglo donde van los nombres, ahora hacemos la funcion del boton agregar amigos
function agregarAmigo() {
    // Ahora se procede a capturar el valor que hay en la caja de texto (input)
    //  y adicionamos ese valor al arreglo -- funcionalidad 1
    let nombresInput = document.getElementById('amigo').value;
    if (nombresInput == '') {  // funcionalidad 2
        alert('Por favor ingrese un nombre válido.');
    }
    nombres.push(nombresInput);
    console.log(nombres);
    // se limpia la caja de texto cada vez que se agrega a la lista
    document.getElementById('amigo').value = '';
    // Crear un nuevo elemento <li>
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombresInput;
    // Agregar el nuevo elemento <li> al <ul>
    document.getElementById('listaAmigos').appendChild(nuevoElemento); // funcionalidad 3

}
// Función que sortea el amigo
function sortearAmigo() {
    // funcionalidad 4
    //let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    let indiceAleatorio= Math.floor(Math.random()*nombres.length);
    console.log('tamaño de la lista: '+nombres.length);
    console.log('indice aleatorio: '+indiceAleatorio);
    // el resultado es
    console.log(nombres[indiceAleatorio]);
    document.getElementById('resultado').innerHTML='El amigo secreto sorteado es: '+nombres[indiceAleatorio];
}


