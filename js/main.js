function saludo(){
    alert("welcome usuario");
}

function suma(){
//  declaramos las variablees
let a=0;
let b=0;
let suma=0;
// solicitar valores
alert("este algoritmo realizar la suma de dos vaalores ingresados por usted")
    a=parseInt(prompt("por favor ingrese el primer valor a sumar "));
    b=parseInt(prompt("please ingre el segundo valor a sumar mi socio "));
// realizamos operaciones
    suma=a+b;
// mostramos resultado
    alert("El resultado de la suma es: "+ suma)
}
function operacionesBasicas(){
    // declaramos variables
    let a,b,suma,resta,multiplicacion,division=0;
// mensaje para el usuario
    alert("welcome  a continacion ingresara dos numeros para realizar operaciones basicas");

// realizamos operaciones
    a=parseInt(prompt("ingrese el primer numero:"));
    b=parseInt(prompt("ingrese el segundo numero:"));

    suma=a+b;
    resta=a-b;
    multiplicacion=a*b;
    division=a/b

    alert("el resultado de la suma es: "+suma +"\n"+
    "el resultado de la resta es:"+resta+"\n"+"el resultado de la multipliacion es:"+multiplicacion+"\n" + "el resultado de la division es: "+division);
}

function cuadrado(){
// declaramos las variables 
    let a,cuadrado=0;

// mensaje para el usuario
    alert("welcome a continuacion ingrese un numero para calcularlo al cuadrado");

// pedimos al usuario los datos
    a=parseInt(prompt("ingrese el primer numero "));
   
// realizamos operaciones
    cuadrado=a**2;

// mostramos el resultado
    alert("El numero ingresado elevado al cuadrado es: "+cuadrado+"cm²");
}




function areaTriangulo(){
// declaramos variables
    let a,b,area=0;
// mensaje para el usuario
    alert("welcom a continuacion ingresa los datos para hayar la area de un triangulo en CM")

// pedimos los datos al usuario
    b=parseInt(prompt("ingrese la base del triangulo por favor:"));
    a=parseInt(prompt("ingrese la altura del triangulo por favor:"));

// realizamos operaciones
    area=(b*a)/2;

// mostramos el resultado
    alert("El area de su triangulo es: "+area);

}




function numeroMayor(){
    // declaramos variables
    let a,b=0;
// mensaje para el susurio
    alert("bienvenido a continuacion vas ingresar dos numeros  para saber cula es menor");
    

// declaramos variables
    a=parseInt(prompt("ingrese l primer valor:"));
    b=parseInt(prompt("ingrese el segundo valor:"));
// operaciones
    if (a == b) {
        alert("los valores ingresados son iguales, en la trampa");
    }else if(a>b){
        alert(a+"es mayor que " +b);
    }else{
        alert(b+"es mayor que "+a);
    }
}

function unidadesMedida(){

    // declaramos variables
    let cm,pies,pulgas,kilometros=0;

// mensaje para el usuarios
    alert("welcome ingresa una medida en cm y sera convertida a pies,pulgadas y kilometros");

    cm=parseInt(prompt("ingrese los cm: "));

    pies=cm/30.48;
    pulgadas=cm/2.54;
    kilometros=(cm*1)/100000;

    // resultado 
    alert("la covertura en pies es: "+pies+"pies \n"+
    "la covertura en pulgadas es: "+pulgadas + "pulgadas \n"+" la covertura a kilometros: "+kilometros+"kilometros");
}


function temperatura(){
    let celsius,Fahrenheit=0;

    alert("welcome ingrese  la temperatura en centigrados: ");


    celsius=parseFloat(prompt("ingrese lo grados celsius:"));

    Fahrenheit=(celsius*9/5)+32;



    alert("el resultado de la conversion a fahrenheit: "+Fahrenheit+"\n" + " el resultado de la conversion a celdius es: "+celsius);


}


var nombre,materia,notas,nota1=0;
function promedioEstudiante(){

    alert("welcome estudiante de la javeriana este es un test para ver si aprobo la materia ");
    materia=prompt("ingrese el nombre de la materia,a continuacion ingresera sus 10 notas,teniendo en cuenta que la calificacion que sacaste esta en el rango del 1 al 10");

    
    for (var i=1; i<=10; i++) {
        notas=parseInt(prompt("ingrese la nota numero -> "+i)); 
        if (notas>10) {
            alert("tramposo ingreseste un valor que no esta en el rango.");
            i=(i-1)
        }else{
            nota1 += notas;
        }
    }
    notaFinal=nota1/10;
   
    if (notaFinal>=6) {
        alert("el resultado de su promedio es:" +notaFinal+"\n"+"usted es un muy buen estudiante aprobado la materia de "+materia);
    }else{
        alert("el resultado de su promedio es:" +notaFinal+"\n"+"usted es un  estudiante de bajo nivel academico reprobo la materia de "+materia);
    }
    nota1=0
    
}


function descuento(){
    let totalPagar,descuento,compra=0;
    let valor=4500;
    alert("welcome al supermercado de manzanas criollas");
    compra=parseInt(prompt("ingrese la cantidad de kilos de manzanas que ha comprado"));

    if(compra>=3 && compra<=5){
        descuento=((compra*valor)*0.1);
        totalPagar=(compra*valor)-descuento;
        alert("su descuento es del 10% -> "+descuento+"\n"+
        "su valor a pagar es -> "+totalPagar);
    }else if(compra>=6 && compra<=10){
        descuento=(compra*valor)*0.15;
        totalPagar=(compra*valor)-descuento
        alert("su descuento es del 15% -> "+descuento+"\n"+
        "su valor a pagar es -> "+totalPagar);
    }else if(compra>10){
        descuento=(compra*valor)*0.20;
        totalPagar=(compra*valor)-descuento;
        alert("su descuento es del 20% -> "+descuento+"\n"+
        "su valor a pagar es -> "+totalPagar);
    }
}



function parImpar(){
    let numero=0;

    alert("welcome ingresaras un numero para saber si es para o impar:");
    numero=parseInt(prompt("ingrese el numero: "));

    if(numero % 2 == 1){
        alert("El nùmero ingresado es impar: "+numero);
    }else{
        alert("El nùmero ingresado es par: "+numero);
    }
}

const horas=10000;
const horaExtra=20000;
function salario(){
    let  horasTrabajadas,pago,pago1,pago2,pagoTotal=0;

    alert("welcome a continuacion ingresara sus horas trabajadas");
    horasTrabajadas=parseInt(prompt("ingrese sus horas trabajadas mi compa"));

    if(horasTrabajadas<=40){
        pago=horasTrabajadas*horas;
        alert("su sueldo es: "+pago);
    }
    if(horasTrabajadas>40){
        pago1=(horasTrabajadas-40)*horaExtra;
        pago2=pago1+400000;
        alert("su sueldo es: "+pago2);
    }
}   






function menor(){
    let a,b,c=0;

    alert("welcome a continuacion ingresaras tres numeros para saber cual es menor");
    a=parseInt(prompt("ingresa el primer numero: "));
    b=parseInt(prompt("ingrese el segundo numero: "));
    c=parseInt(prompt("ingrese el tercer numero: "));

    if(a<b && a<c){
        alert("numero menor es: "+a)
    }else if(b<a && b<c){
        alert("el menor es: "+b)
    }else{
        alert("el menor es: "+c)
    }
}


