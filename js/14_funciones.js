//Funcion declarada
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar('Alma');
// ----------------------------

//Suma
function sumar(a, b) {
    console.log(a + b);
}
sumar(1,2);
sumar(3,4);
// ----------------------------

//Suma con return
function sumando(a,b) {
    return a + b;
}
let suma;
suma = sumando(1,2);

console.log(suma);
// ----------------------------

//Saludo string
//Forma anterior
function saludando(nombre) {
    if(typeof nombre === 'undefined') {
        nombre = 'Jhon'
    } 
    return `Hola don ${nombre}`;
}
let saludito;
saludito = saludando("Jorge");

console.log(saludito);

//Forma nueva
function despedir(nombre = 'visitante') {
    return `Hasta luego ${nombre}`;
}
let adios;
adios = despedir('Jhon');

console.log(adios);
// ----------------------------

// FUNCTION EXPRESSION

const resta = function(a,b) {
    return a - b;
}
console.log(resta(5,10));
