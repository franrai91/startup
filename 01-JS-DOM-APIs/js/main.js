function hacerFadeIn(){
    var elementFadeIn = document.getElementById("fadein");
    elementFadeIn.classList.remove("ocultado");
    elementFadeIn.classList.add("mostrado");
}
function mensajeAlerta(){
    alert("Mensaje de alerta!");
}
function mostrarChiste(){
    var configurar = {};
    configurar.method = 'GET';
    configurar.url = 'http://api.icndb.com/jokes/random';

    reusable(configurar).then(response =>{
        var objeto = JSON.parse(response);
        
        if(objeto.type === "success"){
            document.getElementById("contenidoJson").innerHTML = objeto.value.joke;
        }
    })
    .catch(error => {
        document.getElementById("contenidoJson").style.background = "red";
    })
}
function reusable(configuracion) {
	return new Promise(function (resolve,reject){
		var httpRqs = new XMLHttpRequest;
	    httpRqs.open(configuracion.method, configuracion.url);
        httpRqs.onload = function() {
          
        if (httpRqs.status == 200) {
            resolve(httpRqs.response);
        }
        else {       
            reject(Error(httpRqs.statusText));
        }
        }
      
        httpRqs.onerror = function() {
            reject(Error("Hubo un error"));
        }
        
        httpRqs.send();
    })  
};
function traerConParametros(value){
    value = document.getElementById("valorUsuario").value;
    var configurar = {};
    configurar.method = 'GET';
    configurar.url = 'https://api.github.com/search/repositories?q=' + value;

    document.getElementById("repositores").innerHTML = '';

    reusable(configurar).then(response =>{
        var objeto = JSON.parse(response);
        
        objeto.items.forEach(elemento => {
            document.getElementById("repositores").innerHTML += "<li>" + elemento["name"] + "</li>";
        });
    })
    .catch(error => alert("cuidadooo"));    
};
function crearMatriz(matriz = [[14,25,78,2], [76,35,48], [98,37,81,88,91], [95,25,13]]){
    var seccion = document.getElementById("matriz");
    var tablaGeneral = document.createElement('table');
    var cuerpoTabla = document.createElement('tbody');

    var largo = matriz.length;
    for(i=0;i<largo;i++){
        var fila = document.createElement('tr');
        var elemento = matriz[i].length;

        for(n=0;n<elemento;n++){
            var columna = document.createElement('td');
            var node = document.createTextNode(matriz[i][n]);

            columna.appendChild(node);
            fila.appendChild(columna);
        }

        cuerpoTabla.appendChild(fila);
    }
    tablaGeneral.appendChild(cuerpoTabla);
    seccion.appendChild(tablaGeneral);
}