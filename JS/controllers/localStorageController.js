// Aca van las funciones de carga y descarga del objeto DatosUsuario en localstorage

import * as almUtils from "../utils/almacenamientoUtils.js";
import { totalIdsGastos, totalIdsIngresos } from "../data/IdsDb.js";
import { ingresos, gastos } from "../data/db.js";
import { gastosCategoria, ingresosCategoria } from "../data/dbCategorias.js";

// Esta funcion graba el objeto con los datos en el local storage

export function grabarSessionDataLocal() {
	let datos = almUtils.sessionDataInObject(
		gastos,
		ingresos,
		gastosCategoria,
		ingresosCategoria,
		totalIdsGastos,
		totalIdsIngresos
	);
	console.log("Datos que se van a guardar en el localStorage:", datos);
	const SessionData = JSON.stringify(datos);
	localStorage.setItem("datosGuardadosDeUsuario", SessionData);
}

// Esta funcion lee el objeto del local storage
export function leerSessionDataLocal() {
	const datos = localStorage.getItem("datosGuardadosDeUsuario");
	if (datos) {
		return JSON.parse(datos); // Devuelve el objeto con todos los datos del usuario
	} else {
		return null;
	}
}
