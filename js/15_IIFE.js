// IIFE
(function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})('javascript');

(function(suma) {
    console.log(`Aprendiendo a sumar: ${suma}`);
})(2+2);

// Metodos de propiedad
// Cuando una funcion se pone dentro de un objeto

const musica = {
    reproducir: function(id) {
        console.log(`Reproduciendo musica numero ${id}`);
    },
    pausar: function() {
        console.log(`Musica pausada`);
    }
}
musica.borrar = function(id) {
    console.log(`Borrando la cancion numero ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(5);