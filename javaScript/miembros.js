pantalla = false
datos = false

var fondo = "";
var ancho = "";
var altura ="";
var radio = "";
var left = "";
var top = "";
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
            this.left = document.getElementById(seccion).style.marginLeft 
            this.top = document.getElementById(seccion).style.marginTop
            this.radio2 = document.getElementById(img).style.borderRadius 
            this.borde = document.getElementById(img).style.border 
            this.ancho2 = document.getElementById(img).style.width 
            this.altura2 = document.getElementById(img).style.height 
            this.hover = document.getElementById(img).style.borderHover
            this.fondo2 = document.getElementById("html").style.backgroundColor
    
            datos = true

            console.log(fondo);
        }
             
        if (!pantalla){
            document.getElementById(seccion).style.backgroundColor = "white"
            document.getElementById(seccion).style.width = "750px"
            document.getElementById(seccion).style.height = "800px"
            document.getElementById(seccion).style.borderRadius = "25px"
            document.getElementById(seccion).style.marginLeft = "100px"
            document.getElementById(seccion).style.marginTop = "-763px"
            document.getElementById(img).style.borderRadius = "25px"
            document.getElementById(img).style.border = "0px"
            document.getElementById(img).style.width = "750px" 
            document.getElementById(img).style.height = "300px"
            document.getElementById(img).style.borderHover= "0px"
            document.getElementById("html").style.backgroundColor = "rgb(31, 27, 20 ,0.9)"
            document.getElementById(texto).hidden = false
            document.getElementById(texto).style.fontFamily = "Simbolitos"
    
            pantalla = true
        } else if (pantalla){
            document.getElementById(seccion).style.backgroundColor = fondo
            document.getElementById(seccion).style.width = ancho
            document.getElementById(seccion).style.height = altura
            document.getElementById(seccion).style.borderRadius = radio
            document.getElementById(seccion).style.marginLeft = left
            document.getElementById(seccion).style.marginTop = top
            document.getElementById(img).style.borderRadius = radio2
            document.getElementById(img).style.border = borde
            document.getElementById(img).style.width = ancho2
            document.getElementById(img).style.height = altura2
            document.getElementById(img).style.borderHover= hover
            document.getElementById("html").style.backgroundColor = fondo2
            document.getElementById(texto).hidden = true

    
            pantalla = false
        }



    
    }
