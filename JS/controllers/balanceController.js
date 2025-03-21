import { ingresos, gastos } from "../data/db.js";
import { montoFormateoPesos } from "../utils/formatUtils.js";

export function calcularSaldo() {
	const ingresoTotal = ingresos.reduce((acc, reg) => acc + reg.monto, 0);
	const gastoTotal = gastos.reduce((acc, reg) => acc + reg.monto, 0);
	const saldo = ingresoTotal - gastoTotal;

	alert(`El saldo actual es: ${montoFormateoPesos(saldo)}`);
	console.log(montoFormateoPesos(saldo));
	return saldo;
}
