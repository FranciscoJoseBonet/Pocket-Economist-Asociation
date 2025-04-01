import { ingresos, gastos } from "../data/db.js";
import { montoFormateoPesos } from "../utils/formatUtils.js";

// Calcula el total de una lista y lo devuelve
export function calcularTotal(lista) {
	return lista.reduce((total, item) => Number(total) + Number(item.monto), 0);
}

// Calcula el saldo final (devuelve el saldo total)
export function calcularSaldo() {
	const ingresoTotal = calcularTotal(ingresos);
	const gastoTotal = calcularTotal(gastos);
	const saldo = ingresoTotal - gastoTotal;
	return saldo;
}
