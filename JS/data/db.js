import { leerSessionDataLocal } from "../controllers/localStorageController.js";

// En estos arrays se descompone el objeto guardado en el localStorage
// Todas las operaciones se hacn sobre estos arrays
export let gastos = [];
export let ingresos = [];

export function agregarRegistro(registro) {
	if (registro.tipo === "ingreso") {
		ingresos.push(registro);
	} else {
		gastos.push(registro);
	}
}

export function borrarRegistro(tipo, id) {
	if (tipo === "ingreso") {
		const index = ingresos.findIndex((reg) => reg.id === id);
		if (index !== -1) ingresos.splice(index, 1);
	} else {
		const index = gastos.findIndex((reg) => reg.id === id);
		if (index !== -1) gastos.splice(index, 1);
	}
}

//Ver si el array esta vacio
export function esVacio(tipo) {
	if (tipo === "ingreso" && ingresos.length === 0) {
		return true;
	}
	if (tipo === "gasto" && gastos.length === 0) {
		return true;
	}
	return false;
}

//Para cargar los datos desde el LocalStorage
export function cargarInitdb() {
	const regs = leerSessionDataLocal();
	if (
		!regs ||
		!regs.GastosList === undefined ||
		!regs.IngresosList === undefined
	) {
		gastos = [];
		ingresos = [];
		return;
	}
	gastos = [...regs.GastosList];
	ingresos = [...regs.IngresosList];
}
