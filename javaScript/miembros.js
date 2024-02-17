pantalla = false
datos = false

var fondo = "";
var ancho = "";
var altura ="";
var radio = "";
var margenLeft = "";
var margenTop = "";
var radio2 ="";
var borde = "";
var ancho2 = "";
var altura2 = "";
var hover = "";
var fondo2 = "";


    

    function rescalado(img, seccion, texto) {
        if (!datos){
            this.fondo = document.getElementById(seccion).style.backgroundColor 
            this.ancho = document.getElementById(seccion).style.width 
            this.altura = document.getElementById(seccion).style.height 
            this.radio = document.getElementById(seccion).style.borderRadius 
            this.margenLeft = document.getElementById(seccion).style.marginLeft 
            this.margenTop = document.getElementById(seccion).style.marginTop
            this.radio2 = document.getElementById(img).style.borderRadius 
            this.borde = document.getElementById(img).style.border 
            this.ancho2 = document.getElementById(img).style.width 
            this.altura2 = document.getElementById(img).style.height 
            this.hover = document.getElementById(img).style.borderHover
    
            datos = true

            
        }

        

        switch (seccion){
            case "seccionLuis" :
                document.getElementById("seccionMrtartaria").hidden = true
                document.getElementById("seccionAntonio").hidden = true
                document.getElementById("seccionIvan").hidden = true
                document.getElementById("seccionEmpirico").hidden = true
                break;
            case "seccionMrtartaria" :
                document.getElementById("seccionLuis").hidden = true
                document.getElementById("seccionAntonio").hidden = true
                document.getElementById("seccionIvan").hidden = true
                document.getElementById("seccionEmpirico").hidden = true
                break;
            case "seccionAntonio" :
                document.getElementById("seccionMrtartaria").hidden = true
                document.getElementById("seccionLuis").hidden = true
                document.getElementById("seccionIvan").hidden = true
                document.getElementById("seccionEmpirico").hidden = true
                break;
            case "seccionIvan" :
                document.getElementById("seccionMrtartaria").hidden = true
                document.getElementById("seccionAntonio").hidden = true
                document.getElementById("seccionLuis").hidden = true
                document.getElementById("seccionEmpirico").hidden = true
                break;
            case "seccionEmpirico" :
                document.getElementById("seccionMrtartaria").hidden = true
                document.getElementById("seccionAntonio").hidden = true
                document.getElementById("seccionIvan").hidden = true
                document.getElementById("seccionLuis").hidden = true
                break;
             }
             
        if (!pantalla){
            document.getElementById(seccion).style.backgroundColor = "white"
            document.getElementById(seccion).style.width = "750px"
            document.getElementById(seccion).style.height = "800px"
            document.getElementById(seccion).style.borderRadius = "25px"
            document.getElementById(seccion).style.marginLeft = "585px"
            document.getElementById(seccion).style.marginTop = "-797px"
            document.getElementById(img).style.borderRadius = "25px"
            document.getElementById(img).style.border = "0px"
            document.getElementById(img).style.width = "750px" 
            document.getElementById(img).style.height = "550px"
            document.getElementById(img).style.borderHover= "0px"
            document.getElementById(texto).hidden = false
            document.getElementById(seccion).style.zIndex = "2"
    
            pantalla = true
        } else if (pantalla){
            document.getElementById(seccion).style.backgroundColor = fondo
            document.getElementById(seccion).style.width = ancho
            document.getElementById(seccion).style.height = altura
            document.getElementById(seccion).style.borderRadius = radio
            document.getElementById(seccion).style.marginLeft = margenLeft
            document.getElementById(seccion).style.marginTop = margenTop
            document.getElementById(img).style.borderRadius = radio2
            document.getElementById(img).style.border = borde
            document.getElementById(img).style.width = ancho2
            document.getElementById(img).style.height = altura2
            document.getElementById(img).style.borderHover= hover
            document.getElementById(texto).hidden = true
            document.getElementById(seccion).style.zIndex = "1"
            document.getElementById("seccionMrtartaria").hidden = false
            document.getElementById("seccionAntonio").hidden = false
            document.getElementById("seccionIvan").hidden = false
            document.getElementById("seccionLuis").hidden = false
            document.getElementById("seccionEmpirico").hidden = false
    
            pantalla = false
            datos = false
        }

        if (document.getElementsByClassName("css")[1].href == "css/cssIlu.css") {
            switch (img) {
                case "imgIvan" :
                    document.getElementById(img).src = "Imagenes/fotoIvanIlumi.jpeg"
                    break;
                case "imgLuis" :
                    document.getElementById(foto).src = "Imagenes/fotoLuisIlumi.jpeg"
                    break;
                case "imgAntonio" :
                    document.getElementById(foto).src = "Imagenes/fotoIvanIlumi.jpeg"
                    break;
            }
            
        }



    
    }
