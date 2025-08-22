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

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if(nombres.length == 0){
        alert("Digite los nombres por favor");
        return;
    }else{
        let numeroGanador = Math.floor(Math.random()*nombres.length);
        let ganador = nombres[numeroGanador];
        resultado.innerHTML = `El amigo secreto es: ${ganador}`;
    }

    return;
}

