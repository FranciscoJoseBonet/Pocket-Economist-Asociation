import { gastos, ingresos } from "../data/db.js";
import { gastosCategoria, ingresosCategoria } from "../data/dbCategorias.js";

export let conteoIdIngresos = 0;
export let conteoIdGastos = 0;

export function generarID(tipo) {
	if (tipo === "ingreso") return ++conteoIdIngresos;
	return ++conteoIdGastos;
}

export function pedirTipo() {
	let aux;
	do {
		const input = prompt("1: INGRESO o 2: GASTO");
		if (input === null) return null;
		aux = Number(input);
		if (aux !== 1 && aux !== 2) {
			alert("Por favor, ingrese un número válido");
		}
	} while (aux !== 1 && aux !== 2);
	return aux === 1 ? "ingreso" : "gasto";
}

//monto
export function pedirMonto(tipo = "") {
	let aux;
	do {
		const input = prompt(
			`Proporcione el monto del ${tipo} (Ingresar decimales con ".")`
		);
		if (input === null) return null;
		aux = Number(input);
		if (isNaN(aux) || aux < 0) {
			alert("Por favor, ingrese un monto válido");
		}
	} while (isNaN(aux) || aux < 0);
	return aux;
}

//descripción
export function pedirDescripcion(tipo = "") {
	if (!confirm(`¿Desea agregar una descripción al ${tipo}?`)) {
		return "No posee una descripción asignada";
	}
	const aux = prompt(`Descripción para el ${tipo}`);
	return aux === null || aux.trim() === ""
		? "No posee una descripción asignada"
		: aux;
}

//esMensual
export function pedirEsMensual(tipo = "") {
	return confirm(
		`¿El ${tipo} es mensual? Presiona ACEPTAR para SI o CANCELAR para NO`
	);
}

export function pedirCategoria(tipo = "") {
	const lista = tipo === "ingreso" ? ingresosCategoria : gastosCategoria;
	let aux;

	if (!confirm(`¿Desea asignarle al ${tipo} una categoría?`)) {
		return "Varios";
	} else {
		do {
			let opciones = opcionesDispCat(tipo);
			let input = prompt(`Seleccione una categoría:\n${opciones}`);
			if (input === null || input.trim() === "") {
				return "Varios";
			}
			aux = Number(input);
		} while (isNaN(aux) || aux < 1 || aux > lista.length);
		return lista[aux - 1];
	}
}

//pedir la fecha
export function pedirFecha(tipo = "") {
	let aux;
	const regex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
	if (
		confirm(
			`Si es un ${tipo} del dia de HOY presione ACEPTAR, sino presione CANCELAR`
		)
	) {
		return new Date().toLocaleDateString("es-ES");
	} else {
		do {
			aux = prompt(`Ingrese la fecha del ${tipo} con el formato dd/mm/aaaa`);
			if (aux === null) return new Date().toLocaleDateString("es-ES");
			if (!regex.test(aux)) {
				alert("Por favor, ingrese una fecha válida en formato dd/mm/aaaa");
			}
		} while (!regex.test(aux));
	}
	return aux;
}

export function pedirId(tipo) {
	let aux;
	do {
		aux = prompt(`Accese el ID del ${tipo}`);
		if (aux === null) return null;

		aux = Number(aux);
		if (isNaN(aux) || aux <= 0 || !existeId(tipo, aux)) {
			alert("Por favor, proporcione un ID válido y existente");
		}
	} while (isNaN(aux) || aux <= 0 || !existeId(tipo, aux));
	return aux;
}

//Ver si el array esta vacio
export function esVacio(tipo, mostrarMensaje = true) {
	if (tipo === "ingreso" && ingresos.length === 0) {
		if (mostrarMensaje) console.log("No hay ingresos registrados");
		return true;
	}
	if (tipo === "gasto" && gastos.length === 0) {
		if (mostrarMensaje) console.log("No hay gastos registrados");
		return true;
	}
	return false;
}

//Validar existencia de ID
export function existeId(tipo, valor) {
	if (typeof tipo !== "string" || (tipo !== "ingreso" && tipo !== "gasto")) {
		console.error("Error: Tipo inválido. Debe ser 'ingreso' o 'gasto'");
		return false;
	}
	if (typeof valor !== "number" || valor <= 0) {
		console.error("Error: ID inválido. Debe ser un número positivo");
		return false;
	}
	return (tipo === "ingreso" ? ingresos : gastos).some((n) => n.id === valor);
}
