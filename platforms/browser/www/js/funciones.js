$("#miformulario").submit(function(evento){
	evento.preventDefault();

	console.info("Activando formulario....");
	var cadena=$(this).serializeArray();
	console.info(cadena);

	$.ajax({
		url:"http://localhost:8080/mgrdatos.php",
		type:"post",
		data:cadena


	}).done(function(respuesta){
		$(".mensaje").html(respuesta);


	});

});

