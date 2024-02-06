modo = false

function cambioCss() {
    
    icono = document.getElementsByClassName("css")
    if (!modo){
        icono[0].href = "Imagenes/iconoIlu.png"
        icono[1].href = "css/cssIlu.css"
        icono[2].src = "Imagenes/iconoIlu.png"
        icono[3].src = "Imagenes/icono.png"
        icono[4].value = "Modo UFO"
        modo = true

    } else if (modo){
        icono[0].href = "Imagenes/icono.png"
        icono[1].href = "css/cssAli.css"
        icono[2].src = "Imagenes/icono.png"
        icono[3].src = "Imagenes/iconoIlu.png"
        modo = false
    }
    
}