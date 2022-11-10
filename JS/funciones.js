
Narracion = 1
document.getElementById("button_narracion").addEventListener('click',  Iniciar_narracion)

function Iniciar_narracion(){
    if(Narracion == 1){
    document.getElementById("narracion").play()
    document.getElementById("Play").style.display = "none"
    document.getElementById("Pause").style.display = "table"
    Narracion = 2}
    else{
        document.getElementById("narracion").pause()
        document.getElementById("Play").style.display = "table"
        document.getElementById("Pause").style.display = "none"
        Narracion = 1
    }
}