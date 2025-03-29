// Aca van todas las funciones para que use el controlador de almacenamiento

import { DatosUsuario } from "../models/DatosUsuario.js";

// devuelve el objeto con los datos del usuario
export function sessionDataInObject(
	gastos,
	ingresos,
	gastosCategoria,
	ingresosCategoria,
	totalGastos,
	totalIngresos
) {
	let objData = new DatosUsuario(
		gastos,
		ingresos,
		gastosCategoria,
		ingresosCategoria,
		totalGastos,
		totalIngresos
	);
	return objData;
}
