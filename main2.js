/* AGENDA GLITTER 2022/23 */

class Reserva {
  constructor(fecha, nColaboradores, nHoras) {
    this.fecha = fecha;
    this.nColaboradores = nColaboradores;
    this.nHoras = nHoras;
  }
}

/*array reservas */

const arrayReserva = [ ];

/* formulario nueva reserva */

const botonUno = document.getElementById("botonUno");
botonUno.addEventListener("click", () => {
    Swal.fire({
      title: "Tu reserva se realizó con éxito !",
      icon: "success",
      customClass: {
        confirmButton: 'swalBtnColor'
      },
    });
 })

const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const fecha = document.getElementById("fecha1").value;
  const nColaboradores = document.getElementById("nColaboradores1").value;
  const nHoras = document.getElementById("nHoras1").value;
  const reserva = new Reserva (fecha, nColaboradores, nHoras);
  if ( nHoras.value > 3 || nColaboradores.value > 3)  { console.log("ERROR"); 
  } else { 
  arrayReserva.push(reserva);
  localStorage.setItem("Reserva", JSON.stringify(arrayReserva));
  console.log(arrayReserva);
  formulario.reset();
   }
  })


 /*  FORMULARIO MODIFICACION DE RESERVA*/

 /* SWEETALERT */
 const botonDos = document.getElementById("botonDos");
 botonDos.addEventListener("click", () => {
  swal.fire ( { 
    title: "Tu reserva se modificó con éxito !",
    icon: "success",
    customClass: {
    confirmButton: 'swalBtnColor'
     },
  });
 })

 const formulario2 = document.getElementById("formulario2")
 formulario2.addEventListener("submit", (e) => {
  e.preventDefault(); 
 
 const fecha = document.getElementById("fecha2");
 const reserva = arrayReserva.find((reserva) => reserva.fecha === fecha.value);
 const indice = arrayReserva.indexOf(reserva);
 const nuevaFecha = document.getElementById("nuevaFecha2").value;
 const nColaboradores = document.getElementById("nColaboradores2").value;
 const nHoras = document.getElementById("nHoras2").value;
 const reservaModificada = new Reserva ( nuevaFecha, nColaboradores, nHoras);
 arrayReserva.splice(indice, 1, reservaModificada);
 localStorage.setItem("Reserva", JSON.stringify(arrayReserva));
 console.log(arrayReserva);
 formulario2.reset();

 })

 /* FORMULARIO CANCELACION DE RESERVA */

 /* SWEET ALERT */
 const botonTres = document.getElementById("botonTres");
 botonTres.addEventListener("click", () => {
  swal.fire ( { 
  title: " ¿ Esta seguro de cancelar su reserva ?",
  icon: "error",
  confirmButtonText:"Aceptar",
  showCancelButton: true,
  cancelButtonText:"Cancelar",
  customClass: {
  confirmButton: 'swalBtnColor'
 },
  }).then((result) => {
  if(result.isConfirmed) {
    console.log(arrayReserva);
    swal.fire( {
      title: "Reserva cancelada",
      icon:"success",
      confirmButtonText:"Aceptar"
     })
  }
 })
})
 const formulario3 = document.getElementById("formulario3");
 formulario3.addEventListener("submit", (e) => {
  e.preventDefault();

  const fecha = document.getElementById("fecha3");
  const reserva = arrayReserva.find((reserva) => reserva.fecha === fecha.value)
  const indice = arrayReserva.indexOf(reserva)
  arrayReserva.splice(indice, 1)
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

/*  INFO RESERVAS */

const listadoNuevo = document.getElementById("listadoNuevo");
 botonNuevas.addEventListener ("click", () => {
  /*const arrayReserva = JSON.parse(localStorage.getItem("Reserva"));*/
  let aux = "";
   arrayReserva.forEach( reserva => {
     aux += `<h2>Fecha: ${reserva.fecha} </h2>
     <h2> Cantidad de colaboradores: ${ reserva.nColaboradores}</h2>
     <h2> Cantidad de horas: ${ reserva.nHoras} </h2>
     <hr> `
});

 listadoNuevo.innerHTML = aux; })


 const listado = document.getElementById("listado");
 const listadoReservas = "json/reservas.json";

  fetch(listadoReservas)
    .then( respuesta=> respuesta.json())
 .then ( datos => {
    datos.forEach ( reserva => {
     listado.innerHTML += `
      <h2>Fecha: ${reserva.fecha} </h2>
      <h2> Cantidad de colaboradores: ${ reserva.nColaboradores}</h2>
      <h2> Cantidad de horas: ${ reserva.nHoras} </h2>
      <hr> `
    })
  })
  .catch(error => console.log("error"))
  .finally( () => console.log("proceso finalizado"))
 


  