fotos = false

function fotoMiembros() {
    
    icono = document.getElementsByClassName("css")
    if (!fotos){
        document.getElementById("imgIvan").src = "Imagenes/fotoIvanIlumi.jpeg"
        document.getElementById("imgLuis").src = "Imagenes/fotoLuisIlumi.jpeg"
        document.getElementById("imgAntonio").src = "Imagenes/fotoAntonioIlumi.jpeg"
        document.getElementById("imgAlien").src = "./Imagenes/fondoIlumi-removebg-preview.png"
        document.getElementById("imgAlien").id = "imgIlumin"
        document.getElementById("seccionAlien").id = "seccionIlumin"

        fotos = true

    } else if (fotos){
        document.getElementById("imgIvan").src = "Imagenes/fotoIvan.jpeg"
        document.getElementById("imgLuis").src = "Imagenes/fotoLuis.jpeg"
        document.getElementById("imgAntonio").src = "Imagenes/fotoAntonio.jpeg"
        document.getElementById("imgIlumin").src = "./Imagenes/Alien-removebg-preview.png"
        document.getElementById("imgIlumin").id = "imgAlien"
        document.getElementById("seccionIlumin").id = "seccionAlien"

        fotos = false
    }
    
}