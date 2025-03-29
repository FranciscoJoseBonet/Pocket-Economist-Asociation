import { ingresos, gastos } from "../data/db.js";
import { montoFormateoPesos } from "../utils/formatUtils.js";

// Calcula el total de una lista y lo devuelve
export function calcularTotal(lista) {
	return lista.reduce((total, item) => total + item.monto, 0);
}

// Calcula el saldo final (devuelve el saldo total)
export function calcularSaldo() {
	const ingresoTotal = calcularTotal(ingresos);
	const gastoTotal = calcularTotal(gastos);
	const saldo = ingresoTotal - gastoTotal;

	alert(`El saldo actual es: ${montoFormateoPesos(saldo)}`);
	console.log(montoFormateoPesos(saldo));
	return saldo;
}
