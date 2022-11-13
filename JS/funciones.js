
let modo = document.getElementById("modo");
let body = document.body;


modo.addEventListener("click", function(){
   let val= body.classList.toggle("dark")
   localStorage.setItem("modo", val)
})
let valor = localStorage.getItem("modo")

if(valor == "true"){
    body.classList.add("dark")

}else{
    body.classList.remove("dark")

}


Narracion = 1
document.getElementById("button_narracion").addEventListener('click',  Iniciar_narracion)

function Iniciar_narracion(){
    if(Narracion == 1){
    document.getElementById("narracion.mp3").play()
    document.getElementById("Play").style.display = "none"
    document.getElementById("Pause").style.display = "table"
    Narracion = 2}
    else{
        document.getElementById("narracion.mp3").pause()
        document.getElementById("Play").style.display = "table"
        document.getElementById("Pause").style.display = "none"
        Narracion = 1
    }
}
