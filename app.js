// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[]

function agregarAmigo() {
    let input = document.getElementById('amigo').value
    
    if (input ===""){
        alert("Por favor, inserte un nombre.")
    return;
}
amigos.push(input)
limpiarInput()
actualizaListaAmigos()
}
function limpiarInput() {
let valorInput = document.querySelector("#amigo")
valorInput.value = "";
}
function actualizaListaAmigos() {
    let listaHTML = document.querySelector("#listaAmigos")
    listaHTML.innerHTML = ""
    for(amigo of amigos){
        let li = document.createElement("li")
        let nombre = document.createTextNode(amigo)
        li.appendChild(nombre)
        listaHTML.appendChild(li)

    }
    
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear")
        return;
              }
    let listaGanador = document.querySelector("#resultado")
    listaGanador.innerHTML = "" 
    let indice = Math.floor(Math.random()*amigos.length)
    let ganador = amigos[indice]
    let li = document.createElement("li")
    let nombre = document.createTextNode(ganador)
    li.appendChild(nombre)
        listaGanador.appendChild(li)

}
