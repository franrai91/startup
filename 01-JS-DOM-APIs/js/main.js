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

