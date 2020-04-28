for (let i = 1; i <= 5; i++ ) {
    if (i == 5) {
        console.log(`Vamos en el numero ${i}`);
        continue;
    }
    console.log(`Numero: ${i}`);
}

for (let i = 0; i <= 5; i++) {
    if (i % 2 == 0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
}

const juegos = ['LoL','Free Fire','Call of Duty Mobile','PUBG'];

for (let i = 0; i < juegos.length; i++) {
    console.log(`Agregaste al carrito el juego ${juegos[i]}`);
}