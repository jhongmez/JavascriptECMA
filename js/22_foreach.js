const pendientes = ['tarea','ejercicio','proyectos'];

for(i = 0; i < pendientes.length; i++) {
    console.log(`Mis pendientes ${pendientes[i]}`);
}
//Usar foreach con javascript
pendientes.forEach( function(pendiente, index) {
    console.log(`${index}: ${pendiente}`);
});


// Mapas
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Televisión'},
    {id: 3, producto: 'Periódico'},
    {id: 4, producto: 'Radio'},
];

const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;    
});

console.log(nombreProducto);


const automoviles = {
    modelo:  'Camaro',
    motor:        6.1,
    anio:        1969,
    marca: 'Chevrolet'
}

for (let auto in automoviles) {
    console.log(`${auto}: ${automoviles[auto]}`);    
}
