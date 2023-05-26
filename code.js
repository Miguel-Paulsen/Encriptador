const botonEncriptar = document.getElementsByClassName('encriptador')[0];
const botonDesencriptar = document.getElementsByClassName('desencriptador')[0];
const botonCopiar = document.getElementsByClassName('copiar')[0];
const textEntrada = document.querySelector('.text_input');


function textoEncriptado(mensaje) {
    let encriptado = '';
    const equivalentes = {
      'a': 'ai',
      'e': 'enter',
      'i': 'imes',
      'o': 'ober',
      'u': 'ufat'
    };
  
    mensaje.split('').forEach(element => {
        const vocal = equivalentes[element];
        encriptado += vocal !== undefined ? vocal : element;
  
    });
    return encriptado;
}
  
function textoDesencriptado(mensaje) {
    let desencriptado = mensaje;
  
    desencriptado = desencriptado.replaceAll('enter', 'e');
    desencriptado = desencriptado.replaceAll('imes', 'i');
    desencriptado = desencriptado.replaceAll('ufat', 'u');
    desencriptado = desencriptado.replaceAll('ober', 'o');
    desencriptado = desencriptado.replaceAll('ai', 'a');
  
    return desencriptado;
 
}


function copiarTexto() {
    const textSalida = document.querySelector('.text_output');
    textSalida.select();
    document.execCommand('copy');
}

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  
botonEncriptar.onclick = function() {
    const textoEntrada = removerAcentos(textEntrada.value.toLowerCase());
    const textoEncriptadoResultado = textoEncriptado(textoEntrada);
    const textSalida = document.querySelector('.text_output');
    textSalida.value = textoEncriptadoResultado;
}
  
botonDesencriptar.onclick = function () {
    const textoEntrada = removerAcentos(textEntrada.value.toLowerCase());
    const textoDesencriptadoResultado = textoDesencriptado(textoEntrada);
    const textSalida = document.querySelector('.text_output');
    textSalida.value = textoDesencriptadoResultado;
}
  
  botonCopiar.onclick = copiarTexto;
 
  
  
  
  
  
  
  
  