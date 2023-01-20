/* AGENDA GLITTER 2022/23 */

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

/*array reservas */

const arrayReserva = [ reservaUno, reservaDos, reservaTres,reservaCuatro, reservaCinco,reservaSeis ];

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
const contenedorQr = document.getElementById("contenedorQr");
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '5d92d1c3cfmsh666f9a4c00450b4p14bdddjsn785fe41d808f',
		'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
	},
	body: '{"data":"https://linqr.app","image":{"uri":"icon://appstore","modules":true},"style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4,"error_correction":"M"},"output":{"filename":"qrcode","format":"png"}}'
};

fetch('https://qrcode3.p.rapidapi.com/qrcode/text', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(error => console.log(error));

  