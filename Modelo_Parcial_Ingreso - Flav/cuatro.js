function mostrar()
{

    var letra;
    var numero;
    var acumuladorImpares = 0;
    var acumuladorPares = 0;
    var contadorCeros = 0;
    var acumuladorNeg = 0;
    var contadorNeg = 0;
    var promedioNeg = 0;
    var multiPos = 1;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;
    var contadorVoc = 0;
    var flag = 0;
    var seguir;

    do {
         letra = prompt("Ingrese una letra:");
         while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
             letra = prompt("Letra invalida. Ingrese una letra:");
         }
        numero = parseInt(prompt("Ingrese un numero:"))
        while(numero < -10 || numero > 10 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero:"))
        }

        //resta impares
        if (numero % 2 == 1 || numero % 2 == -1) {
            acumuladorImpares = acumuladorImpares - numero;
        }

        //Suma de numeros pares
        if (numero % 2 == 0) {
            acumuladorPares = acumuladorPares + numero;
        }
        
        //Promedio
        if (numero < 0) {
            acumuladorNeg = acumuladorNeg + numero;
            contadorNeg++;
        }else if (numero > 0 ){
            multiPos = numero * multiPos;
        }else {
            contadorCeros++;
        }

        //Maximos y minimos
        if (flag == 0 || numero > numeroMax) {
            numeroMax = numero;
            letraMax = letra;
        }

        if (flag == 0 || numero < numeroMin) {
            numeroMin = numero;
            letraMin = letra;
            flag = 1;
        }


        if (letra == "a" || letra == "b" || letra == "c" || letra == "d" || letra == "e") {
            contadorVoc++;
        }
        


        seguir = prompt("¿Ingresar mas datos?")
    }while(seguir == "s")

    promedioNeg = acumuladorNeg / contadorNeg;

    document.write("La resta de los numeros impares es de: " + acumuladorImpares + "</br>")
    document.write("La suma de los numeros pares es de: " + acumuladorPares + "</br>")
    document.write("La cantidad de ceros es de: " + contadorCeros + "</br>")
    document.write("El promedio de los negativos es de : " + promedioNeg + "</br>")
    document.write("La multiplicación de todos los números positivos " + multiPos + "</br>")
    document.write("El numero máximo es: " + numeroMax + " y la letra es " + letraMax + "</br>")
    document.write("El numero minimo es: " + numeroMin + " y la letra es " + letraMin + "</br>")
    document.write("La cantidad de vocales es de: " + contadorVoc)


}
