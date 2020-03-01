function mostrar() {
    var nombre;
    var habitantes;
    var temperatura;
    var contadorImpares = 0;
    var nombrePaisMas;
    var nombrePaisMaxTemp;
    var habitantesMas;
    var temperaturaMax;
    var contadorPaisesBajo = 0;
    var acumuladorHab = 0;
    var contadorHab = 0;
    var promedio = 0;
    var flag = 0;
    var seguir;

    do {
        nombre = prompt("Ingrese el nombre de un pais:")
        habitantes = parseInt(prompt("Ingrese la cantidad de habitantes:"))
        while (habitantes < 1 || habitantes > 270 || isNaN(habitantes)) {
            habitantes = parseInt(prompt("Cantidad invalida. Ingrese la cantidad de habitantes:"))
        }
        temperatura = parseInt(prompt("Ingrese la temperatura:"));
        while (temperatura < -50 || temperatura > 50 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese la temperatura:"));
        }

        //Temperaturas IMPARES
        if (temperatura % 2 == 1 || temperatura % 2 == -1) {
            contadorImpares++;
        }

        //Nombre pais con mas habitantes
        if (flag == 0 || habitantes > habitantesMas) {
            habitantesMas = habitantes;
            nombrePaisMas = nombre;
        }

        //Cantidad de paises por debajo de los cero grados
        if (temperatura < 0) {
            contadorPaisesBajo++
        }

        //Promedio de los paises ingresados 
        acumuladorHab = acumuladorHab + habitantes;
        contadorHab++;

        //La temperatura máxima ingresada, y nombre del pais que registro esa temperatura.
        if (flag == 0 || temperatura > temperaturaMax) {
            temperaturaMax = temperatura;
            nombrePaisMaxTemp = nombre;
            flag = 1;
        }


        seguir = prompt("¿Ingresar mas datos?")
    } while (seguir == "s");

    promedio = acumuladorHab / contadorHab;

    document.write("La cantidad de temperaturas imapres es de: " + contadorImpares + "</br>")
    document.write("El pais con más habitantes es: " + nombrePaisMas + "</br>")
    document.write("Cantidad de paises por debajo de los cero grados: " + contadorPaisesBajo + "</br>")
    document.write("El promedio de habitantes entre los paises ingresados: " + promedio + "</br>")
    document.write("La temperatura máxima ingresada: " + temperaturaMax + ". Nombre del pais que registro esa temperatura: " + nombrePaisMaxTemp)


}
