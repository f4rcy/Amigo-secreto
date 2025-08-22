let nombres=[];

function agregarAmigo(){
    let nombreAmigos = document.getElementById('amigo').value;

    if (nombreAmigos=="") {
        alert("Por favor inserta un nombre");
    }else{
        nombres.push(nombreAmigos);
        mostraramigos();
    }

    console.log(nombres);

    document.getElementById('amigo').value = "";

    return; 
}

function mostraramigos(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i=0; i<nombres.length; i++) {
        lista.innerHTML = lista.innerHTML + "<li>" + nombres[i] + "</li>";
    }

    return;
}

