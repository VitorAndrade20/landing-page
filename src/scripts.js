let email = document.getElementById('email');
let nome = document.getElementById('nome');

let enviar = document.getElementById("enviar").addEventListener("click",function(){
	localStorage.setItem(email.value,nome.value);
});