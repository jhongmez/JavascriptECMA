const pago = 'bitcoin';

switch(pago) {
    case 'efectivo':
        console.log(`Usted pago en ${pago}`);
        break;
    case 'tarjeta':
        console.log(`Usted pago con ${pago}`);
        break;
    default:
        console.log('Metodo de pago no soportado');
        break;
}