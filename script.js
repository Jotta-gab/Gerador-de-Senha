var sliderElement = document.querySelector("#slider");
var buttonElement = document.querySelector("#button");

var sizePassword = document.querySelector("#valor");
var password = document.querySelector("#password");

var containerPassword = document.querySelector("#container-password");

var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
var novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
}

function generatePassword() {

  var pass = '';
  for (var i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(pass)
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  navigator.clipboard.writeText(novaSenha);
}


const saida = document.querySelector(".saida");
function digitacao(texto, contador) {

  if (contador < texto.length) {

    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 90)
  }
}

digitacao("Gerador de Senhas", 0);