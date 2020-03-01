function mostrar()
{

    var ladoA;
    var ladoB;
    var anguloRecto;
    var superficie;
    var perimetro;
    var multiplicacion;
    var suma;

    ladoA = parseInt(document.getElementById("ladoA").value);
    ladoB = parseInt(document.getElementById("ladoB").value);
    anguloRecto = document.getElementById("angulosRectos").value;

    //Si es rectangulo, calculamos la superficie
    if ((ladoA > ladoB || ladoB > ladoA) && anguloRecto == "SI") {
        superficie = ladoA * ladoB;
        alert("Lados concatenados: " + ladoA + ladoB + ". El superficie es de: " + superficie)
    }

    //Si es romboide, mostrar el perímetro
    if ((ladoA > ladoB || ladoB > ladoA) && anguloRecto == "NO") {
        perimetro = 2*(ladoA + ladoB);
        alert("Lados concatenados: " + ladoA + ladoB + ". El perimetro es de: " + perimetro)
    }

    //Si es cuadrado, mostrar la multiplicacion de sus lados
    if (ladoA == ladoB && anguloRecto == "SI") {
        multiplicacion = ladoA * ladoB;
        alert("Lados concatenados: " + ladoA + ladoB + ". La multiplicacion de los lados es de: " + multiplicacion)
    }

    //Si es rombo, mostrar la suma de sus lados
    if (ladoA == ladoB && anguloRecto == "NO") {
        suma = ladoA  + ladoB;
        alert("Lados concatenados: " + ladoA + ladoB + ". La suma de los lados es de: " + suma)
    }



    
}
