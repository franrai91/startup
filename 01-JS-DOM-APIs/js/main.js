function hacerFadeIn(){
    var elementFadeIn = document.getElementById("fadein");
    elementFadeIn.classList.remove("ocultado");
    elementFadeIn.classList.add("mostrado");
}
function popUpMessage(){
    alert("Mensaje de alerta!");
}
function mostrarChiste(){
    var direc = {};
    direc.method = 'GET';
    direc.url = 'http://api.icndb.com/jokes/random';

    reusable(direc).then(response =>{
        var res = JSON.parse(response);
        
        if(res.type === "success"){
            document.getElementById("contenidoJson").innerHTML = res.value.joke;
        }
    })
    .catch(error => {
        document.getElementById("contenidoJson").classList.add("classError");
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
function crearMatriz(matriz = [[14,25,78,2], [76,35,48], [98,37,81,88,91], [95,25,13,285]]){
    var seccion = document.getElementById("matriz");
    var tablaGeneral = document.createElement('table');
    var cuerpoTabla = document.createElement('tbody');

    var largo = matriz.length;
    var i =0;
   
    for(i;i<largo;i++){
        var fila = document.createElement('tr');
        var elemento = matriz[i].length;
        var n = 0;
        for(n;n<elemento;n++){
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