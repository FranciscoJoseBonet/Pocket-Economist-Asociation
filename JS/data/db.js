import { leerSessionDataLocal } from "../controllers/localStorageController";

export let gastos = [];
export let ingresos = [];

export function agregarRegistro(registro) {
	if (registro.tipo === "ingreso") {
		ingresos.push(registro);
	} else {
		gastos.push(registro);
	}
}

export function eliminarRegistro(id, tipo) {
	if (tipo === "ingreso") {
		const index = ingresos.findIndex((reg) => reg.id === id);
		if (index !== -1) ingresos.splice(index, 1);
	} else {
		const index = gastos.findIndex((reg) => reg.id === id);
		if (index !== -1) gastos.splice(index, 1);
	}
}

export function cargarInitdb() {
	const regs = leerSessionDataLocal();
	if (regs) {
		gastos = [];
		ingresos = [];
	}
	gastos = regs.GastosList;
	ingresos = regs.IngresosList;
}
