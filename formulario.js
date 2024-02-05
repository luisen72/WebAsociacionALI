function enviarFormulario(){


//Recopila los datos del formulario
            var Nombre = document.getElementById("Nombre").value;
            var Apellidos = document.getElementById("Apellidos").value;
            var DNI = document.getElementById("DNI").value;  
            var Gmail = document.getElementById("Gmail").value;
            //var Estado  = document.getElementById("Estado").value;
            var Teléfono = document.getElementById("Teléfono").value;
            //var Disponibilidad = document.getElementById("Disponibilidad").value;
            //var Motivación = document.getElementById("Motivación").value;
            //var observaciones = document.getElementById("observaciones").value;
            //var checkbox = document.getElementById("checkbox").value;

            alert("El nombre es "+Nombre+ "\n el apellido es:" +Apellidos+ "\nEl DNI es: " +DNI+ 
            "\nEl Gmail es: "+Gmail+ "\nEl estado civil es: " + Estado+ "\nEL número de teléfono es:"
             +Teléfono+ "La disponibilidad" +Disponibilidad+"La motivación se debe a: "+Motivación+ "La observación es : "+observación);
        }
