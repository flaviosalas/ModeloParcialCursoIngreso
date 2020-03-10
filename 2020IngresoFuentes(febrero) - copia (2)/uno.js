
function mostrar() {
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var precioBarbijoCaro;
	var cantidadCaro;
	var fabricanteCaro;
	var cantidadMas;
	var fabricanteMas;
	var acumuladorJabones = 0;
	var flag = 0;

	for (i = 0; i < 5; i++) {
		tipo = prompt("Ingrese el tipo de producto:");
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt("Producto invalido. Ingrese el tipo de producto:");
		}
		precio = parseInt(prompt("Ingrese el precio:"));
		while (precio < 100 || precio > 300) {
			precio = parseInt(prompt("Precio invalido. Ingrese el precio:"));
		}
		cantidad = parseInt(prompt("Ingrese la cantidad:"))
		while (cantidad <= 0 || cantidad > 1000) {
			cantidad = parseInt(prompt("Cantidad invalida. Ingrese la cantidad:"))
		}
		marca = prompt("Ingrese la marca:");
		fabricante = prompt("Ingrese el fabricante:")

		//Del más caro de los Barbijos, la cantidad de unidades y el fabricante
		if (tipo == "barbijo" || precio > precioBarbijoCaro) {
			precioBarbijoCaro = precio;
			cantidadCaro = cantidad;
			fabricanteCaro = fabricante;
		}

		// Del ítem con más unidades, el fabricante 
		if (flag == 0 || cantidad > cantidadMas) {
			cantidadMas = cantidad;
			fabricanteMas = fabricante;
			flag = 1;
		}

		//Cuántas unidades de jabones hay en total
		if (tipo == "jabon") {
			acumuladorJabones = acumuladorJabones + cantidad;
		}

		/*Datos de testeo
		
		Jabon 150 150 a a
		Barbijo 200 200 b b
		barbijo 250 250 c c
		alcohol 225 225 d d
		jabon 120 120 e e

		barbijo 270 270 a a
		jabon 150 150 b b
		jabon 300 300 c c
		barbijo 290 290 d d
		alcohol 200 200 e e

		*/

	}

	document.write("La cantidad de unidades del barbijo más caro es de: " + cantidadMas + " y su fabricante es: " + fabricanteMas + "</br>")
	document.write("El fabricante del item con mas unidades es: " + fabricanteMas + "</br>")
	document.write("La cantidad total de jabones es de: " + acumuladorJabones)



}
