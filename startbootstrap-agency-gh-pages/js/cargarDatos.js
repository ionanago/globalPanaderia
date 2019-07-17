/*jslint browser:true, devel:true*/
/*eslint-env browser, es6*/
/*eslint no-console: "off"*/

/*global $*/


function fallo() {
	'use strict';
	alert('Ha habido un error en el acceso a los datos');
}

function siempre() {
	'use strict';
	console.log('Operación finalizada');
}
var url = './conservacion.json';

function cargarTabla() {
	'use strict';
	$(document.getElementById("conservacionCuerpo")).empty();
	$.getJSON(url).done(function (datos) {

		var tabla = document.getElementById("conservacionCuerpo");
		console.log('conservaciones cargados a la tabla');
		$(datos).each(function () {
			$(tabla).append('<tr>' + '<td>' + this.producto + '</td>' + '<td align="center">' + this.temperatura + '</td>' + '<td>' + this.vida + '</td>' + '</tr>');
		});
	}).fail(fallo).always(siempre);
}
window.onload = cargarTabla();
