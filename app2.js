//Operadores logicos//
/*
=== estrictamente igual
!== no es estrictamente igual
< menor que 
<= menor o igual
>mayor que 
>mayor o igual
&& and
// or
! not
*/

//ejemplo de condiciones//
/*
const dinero = 300;
const totalApagar = 500;
const tarjeta = false;

if (dinero > totalApagar) {
    console.log("podemos pagar");
} else if (tarejeta){
    console.log("tenemos tarjeta puedo pagar");
} else {
    console.log("fondos insuficentes");
}
*/
/*
//switch

const metodoPago = "tarjeta";

switch (metodoPago) {
    case "efectivo":
        console.log("pagaste en efectivo");
        break;
    case "cheque":
        console.log("pagaste con cheque");
        break;
    case "tarjeta":
        console.log("pagaste con tarjeta");
        break;
    default:
        console.log("metodo de pago no aceptado");
        break;
}
*/
/*
const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log("puede comprar");
} else if (usuario){
    console.log("no puedesv comprar");
} else if (puedePagar){
    console.log("no puedes pagar");
} else {
    console.log("no puedes ingresar ni pagar");
}
*/

/*
const efectivo = 400;
const credito = 300;
const disponible = efectivo + credito;
const TotalApagar = 600

if (efectivo > TotalApagar || credito > TotalApagar || disponible > TotalApagar) {
    console.log("puedes comparar");
} else {
    console.log("fondos insuficientes");
}
*/
/*
let nombreAlumno = prompt("ingrese su nombre");
let apellidoAlumno = prompt("ingrese su apellido");

if (nombreAlumno !== " " && apellidoAlumno !== " ") {
    alert ("nombre: " + nombreAlumno + " apellido " + apellidoAlumno);
} else {
    alert ("no ingreso datos")
}
*/
