import { leerSessionDataLocal } from "../controllers/localStorageController.js";

//En estas variables se suma el total de ids de los registros
// Para poder seguir almacenando ids sin que se repitan
export let totalIdsGastos = 0;
export let totalIdsIngresos = 0;

export function cargarInitdbIds() {
	const regs = leerSessionDataLocal();
	if (
		!regs ||
		regs.IdTotalesGastos === undefined ||
		regs.IdTotalesIngresos === undefined
	) {
		totalIdsGastos = 0;
		totalIdsIngresos = 0;
		return;
	}
	totalIdsGastos = regs.IdTotalesGastos;
	totalIdsIngresos = regs.IdTotalesIngresos;
}

export function aumentarId(tipo, valor) {
	if (tipo === "ingreso") {
		return (totalIdsIngresos += valor);
	} else {
		return (totalIdsGastos += valor);
	}
}
