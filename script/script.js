var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");
var textoResultado = "";

function transformarTexto(operacao) {
  var texto = textInput.value;
  if (operacao === "criptografar") {
    textoResultado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  } else if (operacao === "descriptografar") {
    textoResultado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }

  outInput.innerHTML =
    '<textarea readonly id="input-texto">' +
    textoResultado +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  var textareaCopiar = document.createElement("textarea");
  textareaCopiar.value = textoResultado;
  document.body.appendChild(textareaCopiar);
  textareaCopiar.select();
  document.execCommand("copy");
  document.body.removeChild(textareaCopiar);
  alert("Texto copiado: " + textoResultado);
}
