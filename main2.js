/* AGENDA GLITTER 2022 */

class Reserva {
  constructor(fecha, nColaboradores, nHoras) {
    this.fecha = fecha;
    this.nColaboradores = nColaboradores;
    this.nHoras = nHoras;
  }
}

const reservaUno = new Reserva("9/12", 2, 2);
const reservaDos = new Reserva("10/12", 1, 1);
const reservaTres = new Reserva("17/12", 1, 1);
const reservaCuatro = new Reserva("23/12", 3, 3);
const reservaCinco = new Reserva("30/12", 3, 3);
const reservaSeis = new Reserva("31/12", 2, 2);

const arrayReserva = [
  reservaUno,
  reservaDos,
  reservaTres,
  reservaCuatro,
  reservaCinco,
  reservaSeis,
];
console.log(arrayReserva);



function menu () {
  alert("Bienvenidos a Beglitter! ");
  let opcion = parseInt(prompt("Seleccione una opcion : \n 1- Quiero reservar \n  2-Quiero modificar mi reserva \n  3- Quiero cancelar mi reserva \n 4- Salir " ));
  return opcion;
}

let opcion = menu ();
switch (opcion) {
  case 1:
    alert(" 9, 10, 17, 23, 30, 31 de Diciembre OCUPADOS");
    nuevaReserva();
    break;
  case 2:
    modificacionReserva();
    break;
  case 3:
    cancelacionReserva();
    break;
  case 4:
    salir();
    break;
  default:
    alert("Opcion no disponible");
    break;
}

/* funcion para nueva reserva*/

function nuevaReserva() {
  let fecha = prompt(" Ingrese la fecha: (Ej: 25/8) ");
  let nColaboradores = prompt(" Cantidad de colaboradores. (Solo numeros, max 3)");
  let nHoras = prompt(" Cantidad de Hs del servicio. ( Solo numeros, max 4)");
  let reserva = new Reserva(fecha, nColaboradores, nHoras);
  if ( reserva.nColaboradores > 3 || reserva.nHoras > 3)  { alert("EEROR"); 
}
else { 
  arrayReserva.push(reserva);
  console.log(arrayReserva);
  alert( "Tu reserva se ha realizado con exito!. Pronto recibiras un mail con la confirmacion.");
   }
}



/* funcion para modificacion de reserva */

function modificacionReserva() {
  let fecha = prompt("Ingrese la fecha de su reserva (ej: 25/8)");
  let reserva = arrayReserva.find((reserva) => reserva.fecha === fecha);
  let indice = arrayReserva.indexOf(reserva);
  let nuevaFecha = prompt("Ingrese nueva fecha : (Ej 25/8)");
  let nColaboradores = prompt(
    "Actualice cantidad de colaboradores.( Solo numeros, max 3)");
  let nHoras = prompt("Actualice cantidad de Hs del servicio.( Solo numeros, max 4)");
  let reservaModificada = new Reserva(nuevaFecha, nColaboradores, nHoras);
  arrayReserva.splice(indice, 1, reservaModificada);
  console.log(arrayReserva);
}

/* funcion cancelacion de reserva*/

function cancelacionReserva() {
  let fecha = prompt("Ingresela fecha de su reserva (ej:25/8)");
  let reserva = arrayReserva.find((reserva) => reserva.fecha === fecha);
  let indice = arrayReserva.indexOf(reserva);
  arrayReserva.splice(indice, 1);
  console.log(arrayReserva);
  alert("Su reserva ha sido cancelada con exito.");
}

/* funcion para salir */

function salir() {
  alert("Gracias por elegir Beglitter !");
}



