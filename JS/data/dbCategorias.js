import { leerSessionDataLocal } from "../controllers/localStorageController.js";

// En estos arrays se descompone el objeto guardado en el localStorage
// Todas las operaciones se hacn sobre estos arrays
export let gastosCategoria = [];
export let ingresosCategoria = [];

export function cargarInitdbcategoria() {
	const regs = leerSessionDataLocal();
	if (!regs || !regs.GastosCategList || !regs.IngresosCategList) {
		gastosCategoria = [
			"Alimentos",
			"Transporte",
			"Entretenimiento",
			"Salud",
			"Varios",
		];
		ingresosCategoria = [
			"Salario",
			"Freelance",
			"Inversiones",
			"Regalos",
			"Varios",
		];
		return;
	}
	gastosCategoria = [...regs.GastosCategList];
	ingresosCategoria = [...regs.IngresosCategList];
}
