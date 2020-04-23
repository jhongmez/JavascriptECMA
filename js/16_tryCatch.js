//Funcion que no existe
try {
    obtenerMusica();
} catch(error) {
    console.log(error);
} finally {
    console.log('No le importa may brother');
}

function obtenerMusica() {
    console.log("Descargando...");

    setTimeout(function() {
        console.log("Archivos completados!")
    }, 3000);
}