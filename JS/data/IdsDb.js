export let totalIdsGastos = 0;
export let totalIdsIngresos = 0;

export function cargarInitdbIds() {
	const regs = leerSessionDataLocal();
	if (regs) {
		totalIdsGastos = 0;
		totalIdsIngresos = 0;
	}
	totalIdsGastos = regs.IdTotalesGastos;
	totalIdsIngresos = regs.IdTotalesIngresos;
}
