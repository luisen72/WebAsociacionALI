modo = false

function cambioCss() {
    
    icono = document.getElementsByClassName("css")
    if (!modo){
        icono[0].href = "Imagenes/iconoIlu.png"
        icono[1].href = "css/cssIlu.css"
        icono[2].src = "Imagenes/iconoIlu.png"
        icono[3].src = "Imagenes/icono.png"
        icono[4].innerHTML = "Modo UFO"
        document.getElementById("imgAlien").src = "./Imagenes/fondoIlumi-removebg-preview.png"
        document.getElementById("imgAlien").id = "imgIlumin"
        document.getElementById("seccionAlien").id = "seccionIlumin"

        modo = true

    } else if (modo){
        icono[0].href = "Imagenes/icono.png"
        icono[1].href = "css/cssAli.css"
        icono[2].src = "Imagenes/icono.png"
        icono[3].src = "Imagenes/iconoIlu.png"
        icono[4].innerHTML = "Modo Iluminati"
        document.getElementById("imgIlumin").src = "./Imagenes/Alien-removebg-preview.png"
        document.getElementById("imgIlumin").id = "imgAlien"
        document.getElementById("seccionIlumin").id = "seccionAlien"


        modo = false
    }
    
}