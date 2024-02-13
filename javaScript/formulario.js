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
               
               if(Motivación[7].selected){
                    var solucion = document.getElementById("otros").value;
               } else if (Motivación[i].selected){
                  solucion = Motivación[i].value

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
             +Teléfono + "La disponibilidad es: " + horarioSemana() + "\nLa motivación se debe a: "+solucion+ "\nLa observación es : "+observaciones);
        }

        function comprobarOtros() {
          if(document.getElementsByClassName("opciones")[7].selected) {
            document.getElementById("otros").hidden = false
          } else if(document.getElementsByClassName("opciones")[7].selected == false) {
            document.getElementById("otros").hidden = true
          }
        }

        function horarioSemana() {
          var horadiaL = new Array (4);
          var horadiaM = new Array (4);
          var horadiam = new Array (4);
          var horadiaJ = new Array (4);
          var horadiaV = new Array (4);
          var horadiaS = new Array (4);
          var horadiaD = new Array (4);

          for (var j=0; j<7; j++){
            document.getElementsByClassName("horas")[j].hidden = true
            if (document.getElementsByClassName("dias")[j].selected) {
              document.getElementsByClassName("horas")[j].hidden = false
            }
            for (var h=0; h<4; h++){
              if (document.getElementsByClassName("horarioL")[h].checked){
                horadiaL[h] = document.getElementsByClassName("horarioL")[h].value
              } else if (document.getElementsByClassName("horarioL")[h].checked == false) {
                horadiaL[h]= ""
              }
            }
            for (h=0; h<4; h++){
              if (document.getElementsByClassName("horarioM")[h].checked){
                horadiaM[h] = document.getElementsByClassName("horarioM")[h].value
              } else if (document.getElementsByClassName("horarioM")[h].checked == false) {
                horadiaM[h]=""
              }
            }
            for (h=0; h<4; h++){
              if (document.getElementsByClassName("horariom")[h].checked){
                horadiam[h] = document.getElementsByClassName("horariom")[h].value
              } else if (document.getElementsByClassName("horariom")[h].checked == false) {
                horadiam[h]=""
              }
            }
            for (h=0; h<4; h++){
              if (document.getElementsByClassName("horarioJ")[h].checked){
                horadiaJ[h] = document.getElementsByClassName("horarioJ")[h].value
              } else if (document.getElementsByClassName("horarioJ")[h].checked == false) {
                horadiaJ[h]=""
              }
            }
            for (h=0; h<4; h++){
              if (document.getElementsByClassName("horarioV")[h].checked){
                horadiaV[h] = document.getElementsByClassName("horarioV")[h].value
              } else if (document.getElementsByClassName("horarioV")[h].checked == false) {
                horadiaV[h]=""
              }
            }
            for (h=0; h<4; h++){
              if (document.getElementsByClassName("horarioS")[h].checked){
                horadiaS[h] = document.getElementsByClassName("horarioS")[h].value
              } else if (document.getElementsByClassName("horarioS")[h].checked == false) {
                horadiaS[h]=""
              }
            }
            for (h=0; h<4; h++){
              if (document.getElementsByClassName("horarioD")[h].checked){
                horadiaD[h] = document.getElementsByClassName("horarioD")[h].value
              } else if (document.getElementsByClassName("horarioD")[h].checked == false) {
                horadiaD[h]=""
              }
            }

            
          }
          return "Lunes: " + horadiaL[0]+ horadiaL[1] + horadiaL[2] + horadiaL[3] + "\nMartes: " + horadiaM[0]+ horadiaM[1] + horadiaM[2] + horadiaM[3] + "\nMiercoles: " + horadiam[0]+ horadiam[1] + horadiam[2] + horadiam[3] + "\nJueves: " + horadiaJ[0]+ horadiaJ[1] + horadiaJ[2] + horadiaJ[3] + "\nViernes: " + horadiaV[0] + horadiaV[1] + horadiaV[2] + horadiaV[3] + "\nSabado: " + horadiaS[0]+ horadiaS[1] + horadiaS[2] + horadiaS[3] + "\nDomingo: " + horadiaD[0]+ horadiaD[1] + horadiaD[2] + horadiaD[3]
          

        }
