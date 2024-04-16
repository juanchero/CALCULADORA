//crea un mensaje de bienbenida al usuario
alert("Hola 😎, Bienbeni@ a la calculadora");
//solicita un numero al usuario
var nuemro1 = parseFloat(prompt("ingresa un numero del 1 al infinito"));
//muestra el numero que digitó
alert("Elegiste el numero " + nuemro1);
//solicita al usuario que digite un segundo numero
var numero2 = parseFloat(prompt("ingresa un segundo numero del 1 al infinito"));
//muestra el numero que digitó
alert("tu segundo numero es " + numero2);
//muestra las operaciones matematicas disponibles para realizar
alert("Elige la operacion matematica que deceas realizar con los numeros " + nuemro1 + " y " + numero2);
var operacion = parseFloat(prompt("Elige una opcion.\n1 suma➕.\n2 resta➖.\n3 multiplicacion✖️.\n4 divicion➗"));
var resultado;
var nombre="";
// sirven para que se relizen cada una de las operaciones matematicas
if(operacion == 1){
    resultado = nuemro1 + numero2;
    nombre = " ➕ la suma es " + resultado;
} else if(operacion == 2){
    resultado = nuemro1 - numero2;
    nombre = "➖ la resta es " + resultado;
}else if(operacion == 3){
    resultado = nuemro1 * numero2;
    nombre = "✖️ la multiplicacion es " + resultado;
}else if(operacion == 4){
    if(numero2 !== 0){
    resultado = nuemro1 / numero2;
    nombre = "➗ la divicion es " + resultado;
} else{
    "no se puede dividir por cero";
}}
else{
    nombre="operacion no valida";
}
//describe la opreracion realizada junto con el resultado
alert(nombre);
document.write("los numeros que ingresaste fueron " + nuemro1 + " y " + numero2 + " y el resultado de la operacion fue " + nombre);