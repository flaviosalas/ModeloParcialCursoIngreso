function mostrar() {

  var peso;
  var precio;
  var tipo;
  var precioDescuentoA = 0;
  var precioDescuentoB = 0;
  var totalBruto = 0;
  var totalDescuento = 0;
  var precioCaro;
  var tipoCaro;
  var promedio = 0;
  var contadorPeso = 0;
  var contadorPrecio = 0;
  var flag = 0;
  var seguir;

  do {
    peso = parseInt(prompt("Ingrese el peso:"))
    while (isNaN(peso) || peso < 10 || peso > 1000) {
      peso = parseInt(prompt("Peso invalido. Ingrese el peso:"))
    }
    precio = parseInt(prompt("Ingrese el precio:"))
    while (isNaN(precio) || precio <= 0) {
      precio = parseInt(prompt("Precio invalido. Ingrese el precio:"))
    }
    tipo = prompt("Ingrese el tipo de producto:")
    while (tipo != "a" && tipo != "m" && tipo != "v") {
      tipo = prompt("Tipo invalido. Ingrese el tipo de producto:")
    }

    if (peso < 100) {
      precioDescuento = 0;
    } else if (peso > 100 && peso < 300) {
      precioDescuento = precio - (precio * 15) / 100;
    } else {
      precioDescuento = precio - (precio * 25) / 100;
    }
   

    //Informar el tipo de alimento más caro
    if (flag == 0 || precio > precioCaro) {
      precioCaro = precio;
      tipoCaro = tipo;
      flag = 1
    }

    //El importe total a pagar , bruto sin descuento
    totalBruto = totalBruto + precio;

    //El importe total a pagar con descuento
    totalDescuento = totalDescuento + precioDescuento;

    //El promedio de precio por kilo en total
    contadorPeso = peso + peso;
    contadorPrecio = precio + precio;


    seguir = prompt("¿Desea ingresar más datos?")
  } while (seguir == "s")

  if (totalDescuento == 0) {
    totalDescuento = "No se hizo descuento."
  }

  //El promedio de precio por kilo en total
  promedio = contadorPrecio / contadorPeso;

  document.write("El importe total a pagar , bruto sin descuento es: " + totalBruto + "</br>")
  document.write("El importe total a pagar con descuento es: " + totalDescuento + "</br>")
  document.write("El tipo de alimento más caro: " + tipoCaro + "</br>")
  document.write("El promedio de precio por kilo en total es de: " + promedio + " pesos por kilo.")



}
