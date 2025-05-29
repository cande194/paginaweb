function saludar() {
    alert("¡Hola, mundo!");
}

function mostraralerta(){
    alert("¡Hola, esta es la alerta!");
}

function cambiartexto(){
    document.getElementById("titulo").innerText = "¡El texto ha sido cambiado!";
}

function saludarusuario(){
    const nombre=document.getElementById("nombre").value;
    if (nombre.trim()===""){
        alert("por favor, ingrese su nombre");
    } else {
        alert("¡Hola, " + nombre + "!");
    }
}