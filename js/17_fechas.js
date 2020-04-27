// Objeto Date
const dia = new Date();

console.log(dia);

//Fecha en especifico
let navidad2010 = new Date('12-24-2010');

console.log(navidad2010);

let valor;

//Obtener el mes
valor = dia.getMonth();

//Obtener el dia
valor = dia.getDate();

//Obtener el año
valor = dia.getFullYear();

//Modificar el año
valor = dia.setFullYear(2013);

valor = dia.getFullYear();

console.log(valor);
