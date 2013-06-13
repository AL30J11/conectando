// JavaScript Document
function LoginConectar (U, P)
{
	datos = "usuario" + U + "& pasword = " + P;
	$.ajax({
		type: "POST",
		url: "192.168.1.11/Sitio6/Log_in_m.php",
		data: datos,
}).done(function(msg){ //ajax
	alert(msg);
	if (msg == "" || msg == null)
	{alert("Usuario incorrecto");}
	else
	{alert("Bienvenido");}
});//funtion msg
}
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		$('.enviar').tap(function(){
			var formulario = $(this).parent('form');
			var usuario = document.getElementById('Usuario').value;
			var password = document.getElementById('Password').value;
			LoginConectar(usuario,password);
		});//tap
	});//deviceready
});//ready
    
