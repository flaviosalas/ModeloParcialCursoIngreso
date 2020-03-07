function mostrar()
{

  var peso;
  var precio;
  var tipo;
  var precioDescuentoA = 0;
  var precioDescuentoB = 0;
  var promedioPesoKilo = 0;
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

    //El promedio de precio por kilo en total.
    promedioPesoKilo = precio / peso;
    

    seguir = prompt("Desea ingresar mas datos?")
  }while (seguir == "s")

  document.write(precioDescuentoA)



}
