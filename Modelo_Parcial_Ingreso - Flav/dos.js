function mostrar() {
    var nombre;
    var genero;
    var edad;
    var peso;
    var acumuladorEdad = 0;
    var contadorEdad = 0;
    var acumuladorPeso80 = 0;
    var promedioEdadMas25 = 0;
    var nombreBajo;
    var pesoBajo;
    var flag = 0;

    for (var i = 0; i < 4; i++) {
        nombre = prompt("Ingrese el nombre:");
        genero = prompt("Ingrese el genero:");
        while (genero != "masculino" && genero != "femenino" && genero != "otro") {
            genero = prompt("Genero invalido. Ingrese el genero nuevamente:")
        }
        edad = parseInt(prompt("Ingrese la edad:"));
        while (edad < 18 || edad > 100 || isNaN(edad)) {
            edad = parseInt(prompt("Edad invalida. Ingrese la edad nuevamente:"));
        }
        peso = parseInt(prompt("Ingrese el peso:"));
        while (peso < 1 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese el peso nuevamente:"))
        }

        if (edad >= 25) {
            acumuladorEdad = acumuladorEdad + edad;
            contadorEdad++;
        }

        if (flag == 0 || peso < pesoBajo) {
            pesoBajo = peso;
            nombreBajo = nombre;
            flag = 1;
        }

        if (genero != "masculino" || peso > 80) {
            acumuladorPeso80++;
        }

    }

    promedioEdadMas25 = acumuladorEdad / contadorEdad;

    alert("El promedio de las edades mayores o iguales a 25 es de: " + promedioEdadMas25.toFixed(2) 
     + "\nEl nombre de la persona menos pesada es: " + nombreBajo + ", y su peso es: " + pesoBajo +
     "\nLa cantidad personas de género distinto a masculino ó peso mayor a 80 es de: " + acumuladorPeso80)

}
