var palabras = ["canto", "bosque", "internet", "silla", "profesor"];

/*Elije una palabra al azar*/
var palabraIncognita = palabras[Math.floor(Math.random()*palabras.length)];

/*Configura el arreglo respuesta */
var letrasIncognitas =[];
for(var i = 0; i < palabraIncognita.length; i++){
    letrasIncognitas[i] = "_";
}

var numerodeLetras = palabraIncognita.length;

/*Ciclo del juego */
while(numerodeLetras >0){
    /*muestra progreso del juego */
    alert(letrasIncognitas.join(" "));

/*El jugador ingresa una letra para adivinar */
var letraIngresada = prompt("Adivina una letra o haga click en cancelar pasa salir");
if(letraIngresada === null){
    /*Sale del ciclo y del juego */
    break;
}
else{
    /*Actualiza el estado del juego con la letra ingresada por el jugador */ 
    for(var j=0; j <palabraIncognita.length; j++){
        if(palabraIncognita[j] === letraIngresada){
            letrasIncognitas[j] = letraIngresada;
            numerodeLetras--;
        }
    }
}
/*fin del ciclo y del juego */
}
/*Muestra la respuesta y felicita al jugador */ 
alert(letrasIncognitas.join(" "));
alert("Bien echo!! La respuesta fue " + palabraIncognita);


