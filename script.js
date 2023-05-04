const textAreaInput = document.querySelector(".text-area");
const mensagemOutput = document.querySelector(".mensagem");

function btn_encriptar(){
  const textoEncriptado =  encriptar(textAreaInput.value)
  mensagemOutput.value = textoEncriptado;
  textAreaInput.value = "";
  
}
function encriptar(string_encriptada) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	string_encriptada = string_encriptada.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (string_encriptada.includes(matrizCodigo[i][0])) {
			string_encriptada = string_encriptada.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			);
		}
	}
  return string_encriptada;
}
//descriptar
function btn_desencriptar() {
	const textoDesencriptado = desencriptar(textAreaInput.value);
	mensagemOutput.value = textoDesencriptado;
	textAreaInput.value = "";
}

function desencriptar(string_desencriptada) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	
	string_desencriptada = string_desencriptada.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (string_desencriptada.includes(matrizCodigo[i][1])) {
			string_desencriptada = string_desencriptada.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}
	return string_desencriptada;
}