import { totalIdsGastos, totalIdsIngresos } from "../data/IdsDb.js";
import { aumentarId } from "../data/IdsDb.js";

//Funcon para actualizar el total de Ids (suma de a uno)
export function generarID(tipo) {
	if (tipo === "ingreso") {
		aumentarId(tipo, 1);
		return totalIdsIngresos;
	} else {
		aumentarId(tipo, 1);
		return totalIdsGastos;
	}
}
