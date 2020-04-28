const paises = ['Estados unidos', 'España', 'Rusia'];
const numeros = new Set([24, 258, 165, 789]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador');

//entries nos devuelve posicion con el calor
for (let pais of paises.values()) {
    console.log(pais);
}

//values solamente el valor
for(let numero of numeros.values()) {
    console.log(numero);
}

//Keys nos devuelven las posiciones
for(let dato of datos.keys()) {
    console.log(dato);
}