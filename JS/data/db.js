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

	console.log(`Estos son los ingresos:`);
	ingresos.forEach((gasto) => {
		console.log(gasto.mostrarRegistro());
	});
	console.log("Estos son los gastos:");
	gastos.forEach((gasto) => {
		console.log(gasto.mostrarRegistro());
	});
}

export function borrarRegistro(id, tipo) {
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
