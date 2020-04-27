const edad = 15;

if(edad >= 18) {
    console.log('Puedes ingresar');
} else {
    console.log(`No puedes ingresar por que tienes ${edad} años`);
}

//Comprobar que una variable existe
const puntaje = 1000;

if(puntaje) {
    console.log(`FELICITACIONES su puntaje es de ${puntaje}`);
} else {
    console.log(`No hay ningún puntaje`);
}

//Carrito de compras
let efectivo    = 500;
let carrito     = 300;

let cambio = efectivo - carrito;

if (efectivo > carrito) {
    console.log(`Valor a pagar ${carrito} y se le dara cambio de ${cambio}`);
} else {
    console.log(`Aún no puedes cancelar tu pedido`);
}

// Hora
let hora = new Date();

actual = hora.setHours(12)

actual = hora.getHours();

if (actual > 0 && actual <= 11) {
    console.log(`Buenos dias`);
} else if (actual > 11 && actual <= 18) {
    console.log(`Buenas tardes`);
} else if (actual > 18 && actual <= 24) {
    console.log(`Buenas noches`);
} else {
    console.log('Hora no ingresada');
}

//Credito

let dinero       = 600,
    credito      = 600,
    prestamo     = dinero + credito,
    totalCarrito = 1000;

if (totalCarrito < dinero || totalCarrito < credito) {
    console.log('Puedes pagar');
} else if( totalCarrito < prestamo) {
    console.log(`Cancelaste con tu prestamo con un total de ${prestamo}`)
} else {
    console.log('No puedes cancelar')
}


//ternario
const login = true;

console.log( login === true ? 'Si se logueo' : 'No se logueo');
