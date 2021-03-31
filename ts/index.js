// Variable con un array donde se guarda la información
var ciudades = [
    {
        nombre: 'Madrid',
        vieiras: 500,
        pulpo: 0,
        centollos: 450,
        distancia: 800
    },
    {
        nombre: 'Barcelona',
        vieiras: 450,
        pulpo: 120,
        centollos: 0,
        distancia: 1100
    },
    {
        nombre: 'Lisboa',
        vieiras: 600,
        pulpo: 100,
        centollos: 500,
        distancia: 600
    }
];
// Variables para saber las ganacias de cada ciudad
var madrid;
var barcelona;
var lisboa;
// Variables para saber la cantidad de kg de cada tipo
var vieiras = 50;
var pulpo = 100;
var centollos = 50;
// Funcion run
function run() {
    for (var i = 0; i < ciudades.length; i++) {
        switch (ciudades[i].nombre) {
            case "Madrid":
                madrid = ganancias(ciudades[i].vieiras, ciudades[i].pulpo, ciudades[i].centollos);
                madrid -= impuestos(madrid, ciudades[i].distancia);
                break;
            case "Barcelona":
                barcelona = ganancias(ciudades[i].vieiras, ciudades[i].pulpo, ciudades[i].centollos);
                barcelona -= impuestos(barcelona, ciudades[i].distancia);
                break;
            case "Lisboa":
                lisboa = ganancias(ciudades[i].vieiras, ciudades[i].pulpo, ciudades[i].centollos);
                lisboa -= impuestos(lisboa, ciudades[i].distancia);
                break;
        }
    }
    resul();
}
// Función para saber el precio conseguido con las ventas
function ganancias(v, p, c) {
    return (v * vieiras) + (p * pulpo) + (c * centollos);
}
// Función para calcular los impuestos
function impuestos(ciudad, distancia) {
    return ciudad * ((distancia / 100) / 100) + (5 + 2 * distancia);
}
// Donde se muestra el resultado
function resul() {
    var div = document.getElementById("text");
    if (madrid > barcelona && madrid > lisboa) {
        div.innerHTML = "Madrid es la ciudad con mayor beneficio";
    }
    else if (barcelona > lisboa) {
        div.innerHTML = "Barcelona es la ciudad con mayor beneficio";
    }
    else {
        div.innerHTML = "Lisboa es la ciudad con mayor beneficio";
    }
}
run();
