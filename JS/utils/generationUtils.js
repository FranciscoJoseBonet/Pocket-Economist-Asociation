//Funcon para generar un id
function generarID(tipo) {
	if (tipo === "ingreso") {
		conteoIdIngresos += 1;
		return conteoIdIngresos;
	} else {
		conteoIdGastos += 1;
		return conteoIdGastos;
	}
}
