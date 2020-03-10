/*Bienvenidos.
En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.*/

function mostrar() {

    var nombre;
    var edad;
    var sexo;
    var estadoCivil;
    var edadJoven;
    var nombreJoven;
    var estadoCivilJoven;
    var sexoNombreViejo = 0;
    var sexoViejo;
    var nombreViejo;
    var edadViejo;
    var cantidadMujeresCasadasViudas = 0;
    var contadorMujeres = 0;
    var acumuladorMujeres = 0;
    var promedioMujeres = 0;
    var acumuladorHombres = 0;
    var contadorHombres = 0;
    var promedioHombres = 0;
    var flag = 0;
    var seguir;

    do {
        nombre = prompt("Ingrese el nombre:");
        edad = parseInt(prompt("Ingrese la edad:"));
        while (isNaN(edad) || edad < 18) {
            edad = parseInt(prompt("Edad invalida. Ingrese la edad:"));
        }
        sexo = prompt("Ingrese el sexo:");
        while (sexo != "m" && sexo != "f") {
            sexo = prompt("Sexo invalido. Ingrese el sexo:");
        }
        estadoCivil = prompt("Ingrese el estado civil:");
        while (estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "soltero") {
            estadoCivil = prompt("Estado civil incorrecto. Ingrese el estado civil:");
        }

        //El nombre del hombre casado más joven.
        if (sexo == "m" && estadoCivil == "casado" && flag == 0 || edad < edadJoven) {
            edadJoven = edad;
            nombreJoven = nombre;
            estadoCivilJoven = estadoCivil;
            flag = 1;
        }

        //El sexo y nombre del pasajero/a más viejo.
        if (sexoNombreViejo == 0 || edad > edadViejo) {
            edadViejo = edad;
            nombreViejo = nombre;
            sexoViejo = sexo;
            sexoNombreViejo = 1;
        }

        //La cantidad de mujeres que hay casadas o viudas.
        if (sexo == "f" && (estadoCivil == "casado" || estadoCivil == "viudo")) {
            cantidadMujeresCasadasViudas++;
        }

        //El promedio de edad entre las mujeres.
        if (sexo == "f") {
            acumuladorMujeres = acumuladorMujeres + edad;
            contadorMujeres++;
        }

        //El promedio de edad entre los hombres solteros.
        if (sexo == "m" && estadoCivil == "soltero") {
            acumuladorHombres = acumuladorHombres + edad;
            contadorHombres++;
        }

        seguir = prompt("¿Desea ingresar mas datos?")
    } while (seguir == "s")



    if (flag == 0) {
        nombreJoven = "No se ingresaron datos de hombres casados."
    }

    if (acumuladorMujeres == 0) {
        promedioMujeres = "No se ingresaron datos de mujeres."
    } else {
        promedioMujeres = acumuladorMujeres / contadorMujeres;
    }

    if (acumuladorHombres == 0) {
        promedioHombres = "No se ingresaron datos de hombres solteros."
    } else {
        promedioHombres = acumuladorHombres / contadorHombres;
    }

    document.write("El nombre del hombre casado más joven es: " + nombreJoven + "</br>")
    document.write("El nombre del pasajero más viejo es: " + nombreViejo + " y su sexo: " + sexoViejo + "</br>")
    document.write("La cantidad de mujeres que hay casadas o viudas es: " + cantidadMujeresCasadasViudas + "</br>")
    document.write("El promedio de edad entre las mujeres es: " + promedioMujeres + "</br>")
    document.write("El promedio de edad entre los hombres solteros es: " + promedioHombres + "</br>")

}
