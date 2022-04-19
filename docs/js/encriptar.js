//cajas de texto
var input = document.querySelector("#entrada");
var output = document.querySelector("#salida");

//botones
/*var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector(".botonCopiar");*/

var texto;

var tmp = "";

/*encriptar.onclick = encriptarTexto;
desencriptar.onclick = desencriptarTexto;
copiar.onclick = copiarTexto;*/

function encriptarTexto(){
  texto = input.value;
  tmp = "";

  cambiarLetrasEncriptacion();

  //console.log("Encriptado: " + tmp);
  mostrarSalida(tmp);
}

function desencriptarTexto(){
  texto = input.value;
  tmp = texto;

  cambiarLetrasDesencriptacion();
  //console.log("Desencriptado: " + tmp);
  mostrarSalida(tmp);
}

function cambiarLetrasEncriptacion(){
  for(var i = 0; i < texto.length;i++){
    if(texto.charAt(i) == 'a'){
      tmp = tmp.concat("ai");
    }else if(texto.charAt(i) == 'e'){
      tmp = tmp.concat("enter");
    }else if(texto.charAt(i) == 'i'){
      tmp = tmp.concat("imes");
    }else if(texto.charAt(i) == 'o'){
      tmp = tmp.concat("ober");
    }else if(texto.charAt(i) == 'u'){
      tmp = tmp.concat("ufat");
    }else{
      tmp = tmp.concat(texto.charAt(i));
    }
  }
}

function cambiarLetrasDesencriptacion(){
  tmp = tmp.replace(/ai/gi,"a");
  tmp = tmp.replace(/enter/gi,"e");
  tmp = tmp.replace(/imes/gi,"i");
  tmp = tmp.replace(/ober/gi,"o");
  tmp = tmp.replace(/ufat/gi,"u");
}

function mostrarSalida(textoSalida){
  output.value = textoSalida;
}

function copiarTexto(){
  output.select();
  document.execCommand("cut");
  input.value = "";
  input.focus();
  //alert("Copiado");
}
