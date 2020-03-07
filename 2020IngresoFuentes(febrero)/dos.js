function mostrar()
{

  var peso;
  var precio;
  var tipo;
  var precioDescuento = 0;
  var promedioPesoKilo = 0;
  var importeTotal = 0;
  var importeDescuento = 0;
  var seguir;

  do {
    peso = parseInt(prompt("Ingrese el peso:"));
    while (isNaN(peso) || peso < 10 || peso > 1000) {
      peso = parseInt(prompt("Peso invalido. Ingrese el peso:"));
    }
    precio = parseInt(prompt("Ingrese el precio:"));
    while (isNaN(precio) || precio <= 0) {
      precio = parseInt(prompt("Precio invalido. Ingrese el precio:"));
    }
    tipo = prompt("Ingrese el tipo:")
    while (tipo != "a" && tipo != "v" && tipo != "m") {
      tipo = prompt("Tipo invalido. Ingrese el tipo:")
    }

    if ( peso > 100) {
      precioDescuento = precio - (precio * 15 / 100)
    }
    if ( peso > 400) {
      precioDescuento = precio - (precio * 25 / 100)
    }

    //Importe total
    importeTotal = importeTotal + precio;
    
    seguir = prompt("Desea ingresar mas datos?")
  }while (seguir == "s")

  document.write(importeTotal)



}
