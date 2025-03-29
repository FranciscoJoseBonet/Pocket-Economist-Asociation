export let gastosCategoria = [];
export let ingresosCategoria = [];

export function cargarInitdbcategoria() {
	const regs = leerSessionDataLocal();
	if (regs) {
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
	}
	gastosCategoria = regs.GastosCategList;
	ingresosCategoria = regs.IngresosCategList;
}
