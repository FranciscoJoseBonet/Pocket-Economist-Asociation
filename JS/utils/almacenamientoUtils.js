// Aca van todas las funciones necesarias para que almacenamientoController funcione correctamente

import { DatosUsuario } from "../models/DatosUsuario.js"; // devuelve el objeto con los datos del usuario en formato Base64

export function savedDataToB64(
	gastos,
	ingresos,
	gastosCategoria,
	ingresosCategoria
) {
	let objData = new DatosUsuario(
		gastos,
		ingresos,
		gastosCategoria,
		ingresosCategoria
	);
	return btoa(JSON.stringify(objData));
}
