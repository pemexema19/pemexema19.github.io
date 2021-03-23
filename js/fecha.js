"use strict";
var forma              = document.getElementById("forma"),
 	txtFecha           = forma["fecha"],
 	txtHora            = forma["hora"],
 	txtFechaYhoraLocal =forma["fechaYHoraLocal"],
 	txtSemana          = forma["semana"],
 	txtMes             = forma["mes"],
 	salidaHora            = document.getElementById("salidaHora"),
 	salidaFecha           =document.getElementById("salidaFecha"),
  	salidaFechaYHoraLocal =document.getElementById("salidaFechaYHoraLocal"),
 	salidaSemana          =document.getElementById("salidaSemana"),
 	salidaMes             = document.getElementById("salidaMes"); 


	 /Funcion de Proceso de impresion de los datos/ 
 	function procesa(){
		var fechValueAsDate =txtFecha.valueAsDate;
 		var fecha           = new Date(txtFecha.value);
 		var hora            = new Date(txtHora.value);
 		var fechaYhoraLocal = new Date(txtFechaYhoraLocal.value);
 		var semana          = new Date(txtSemana.value);
		var mes             = new Date(txtMes.value); 
    
	
salidaFecha.textContent = (fecha.getDate() + 1 ) + "/"  + (fecha.getMonth() + 1 + "/" + fecha.getFullYear());

salidaFecha.textContent = txtFecha.type + "|" + txtFecha.value + "|" + fecha.toGMTString();
	
salidaHora.textContent = txtHora.type +"|"+txtHora.value ;
	 
salidaFechaYHoraLocal.textContent = txtFechaYhoraLocal.type + "|" + txtFechaYhoraLocal.value; 

salidaFechaYHoraLocal.textContent = (fechaYhoraLocal.getDate()) + "/" + (fechaYhoraLocal.getMonth() + 1 + "/"+ fechaYhoraLocal.getFullYear() + "|   |" + fechaYhoraLocal.getHours() + "  :  " + fechaYhoraLocal.getMinutes());

salidaSemana.textContent = txtSemana.type + "|" + txtSemana.value;

salidaMes.textContent = txtMes.type + "|" + txtMes.value; 
	 
}

	function BotonLimpiar(){

		location.reload();

	 }
