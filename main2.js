/* AGENDA GLITTER 2022 */

 let opciones = prompt(" Seleccione una opcion : 1-Servicios   2-Presupuestos   3-Disponibilidad ");

 switch (opciones) {
         case "1": 
          console.log("Be glitter ofrece un stand con 1, 2 o 3 colaboradoras segun la cantidad de invitados. Los materiales y viaticos se encuentran dentro del presupuesto.");
           break; 
         case "2":
          console.log("El presupuesto dependera de la cantidad de horas, de colaboradoras del stand y de km, en caso de que el evento se realice fuera de la ciudad de Rosario.");
         
         let opcionPresupuesto = parseInt(prompt("Elija una opcion: 1 - Una colaboradora x 1 hs. 2- Dos colaboradoras x 2 hs. 3- Tres colaboradoras x 3 hs.")); 
         
         function presupuesto () {
            if (opcionPresupuesto === 1) {
                console.log( "El valor de una colaboradora por 1 hs es de $12000. Viaticos dentro de Rosario y materiales incluidos");
                 alert("Viaticos fuera de Rosario + $1000")
            }  else if (opcionPresupuesto === 2) {
                console.log( "El valor de dos colaboradoras por 2 hs es de $20000. Viaticos dentro de Rosario y materiales incluidos");
                 alert("Viaticos fuera de Rosario + $1000")
            } else {
                console.log( "El valor de tres colaboradoras por 3 hs es de $25000. Viaticos dentro de Rosario y materiales incluidos");
                 alert("Viaticos fuera de Rosario + $1000")
            }
         }
            presupuesto();
         break;

         case "3":
          console.log(" Para consultar por fechas 2023 enviar un mail a beglitter@gmail.com ");
           let fechaDisponible = parseInt(prompt("Ingrese fecha Diciembre 2022 (ej: 8)"));

         function disponibilidad () {
           if (fechaDisponible == "9" || fechaDisponible == "10" || fechaDisponible == "18" ) {
             console.log ("NO disponible");
          } else {
            console.log( "Disponible");
         }
        } 
        disponibilidad();
        break;
    }
        
    
