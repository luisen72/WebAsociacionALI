function enviarFormulario(){


//Recopila los datos del formulario
            var Nombre = document.getElementById("Nombre").value;
            var Apellidos = document.getElementById("Apellidos").value;
            var DNI = document.getElementById("DNI").value;  
            var Gmail = document.getElementById("Gmail").value;
            var Estado  = document.getElementsByClassName("estado");
            var Teléfono = document.getElementById("Teléfono").value;
            //var Disponibilidad = document.getElementById("Disponibilidad").value;
            var Motivación = document.getElementsByClassName("opciones");
            var observaciones = document.getElementById("observaciones").value;
            
           
          for(var i=0; i<8;i++){
               
               if(Motivación[i].selected){
                   solucion = Motivación[i].value;
               }
            }
            //Un array para el estado
            var estado = new Array(3);
            estado[0] = "Soltero"
            estado[1] = "Casado"
            estado[2] = "Divorciado"
           
           
          for(var i=0; i<3;i++){
               
               if(Estado[i].checked){
                   var resultado = estado[i];
               }
            }


            alert("El nombre es: "+Nombre+ "\nEl apellido es:" +Apellidos+ "\nEl DNI es: " +DNI+ 
            "\nEl Gmail es: "+Gmail + "\nEl estado civil es: " + resultado+ "\nEL número de teléfono es:"
             +Teléfono+ /*"La disponibilidad" +Disponibilidad+*/ "\nLa motivación se debe a: "+solucion+ "\nLa observación es : "+observaciones);
        }
