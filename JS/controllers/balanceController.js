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

//Calculo del ingreso total o gasto total
export function actualizarTotal(lista) {
	let total = 0;
	for (let i = 0; i < lista.length; i++) {
		total += lista[i].tipo === "ingreso" ? lista[i].monto : lista[i].monto;
	}
	return total;
}
