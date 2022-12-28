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

/*nueva reserva */

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 
  let fecha = document.getElementById("fecha1");
  let nColaboradores = document.getElementById("nColaboradores1");
  let nHoras = document.getElementById("nHoras1");

  let reserva = new Reserva (fecha.value, nColaboradores.value, nHoras.value);
  if ( nHoras.value > 3 || nColaboradores.value > 3)  { console.log("ERROR"); 
  } else { 
  arrayReserva.push(reserva);
  console.log(arrayReserva);
  formulario.reset();
  console.log("Tu reserva se realizo con exito!")}
 })

 /* modificacion reserva*/

const formulario2 = document.getElementById("formulario2")
 formulario2.addEventListener("submit", (e) => {
  e.preventDefault(); 
 
 let fecha = document.getElementById("fecha2");
 let reserva = arrayReserva.find((reserva) => reserva.fecha === fecha.value);
 let indice = arrayReserva.indexOf(reserva);
 let nuevaFecha = document.getElementById("nuevaFecha2");
 let nColaboradores = document.getElementById("nColaboradores2");
 let nHoras = document.getElementById("nHoras2");
 let reservaModificada = new Reserva ( nuevaFecha.value, nColaboradores.value, nHoras.value);
 arrayReserva.splice(indice, 1, reservaModificada);
 console.log(arrayReserva);
 formulario2.reset();
 console.log("Su reserva se modifico con exito !")

 })

 /*cancelacion reserva */

 const formulario3 = document.getElementById("formulario3");
 formulario3.addEventListener("submit", (e) => {
  e.preventDefault();

  let fecha = document.getElementById("fecha3");
  let reserva = arrayReserva.find((reserva) => reserva.fecha === fecha.value)
  let indice = arrayReserva.indexOf(reserva)
  arrayReserva.splice(indice, 1)
  console.log(arrayReserva);
  console.log( "Su reserva se ha cancelado con exito !");
  formulario3.reset(); })
 
/* MODO OSCURO */

const btnFondo = document.getElementById("btnFondo");
btnFondo.addEventListener("click",() => {
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")) {
  localStorage.setItem("modo", "dark");
} else {
  localStorage.setItem("modo", "light");
}

})

const modo = localStorage.getItem("modo");
if (modo === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}



