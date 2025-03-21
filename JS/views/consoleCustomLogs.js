import { esVacio } from "../utils/promptUtils.js";
import { Registro } from "../models/Registro.js";
import { gastos, ingresos } from "../data/db.js";

//Mostrar registros
export function mostrarRegistros() {
	if (esVacio("gasto", false) && esVacio("ingreso", false)) {
		console.log("No existen registros de ingresos ni de gastos");
		alert("No existen registros de ingresos ni de gastos");
		return;
	}
	let mensaje = `
╔═════════════════════════════════╗
║        💸 INGRESOS 💰          ║
╚═════════════════════════════════╝
`;
	mensaje += ingresos.map((reg) => reg.mostrarRegistro()).join("\n");
	mensaje += `
╔═════════════════════════════════╗
║        💳 GASTOS 💵            ║
╚═════════════════════════════════╝
`;
	mensaje += gastos.map((reg) => reg.mostrarRegistro()).join("\n");
	console.log(mensaje);
}
