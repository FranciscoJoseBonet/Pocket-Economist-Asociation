import { gastos, ingresos } from "../data/db.js";
import { gastosCategoria, ingresosCategoria } from "../data/dbCategorias.js";

export let conteoIdIngresos = 0;
export let conteoIdGastos = 0;

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

//Devuelve las categorias con formato de muestra al usuario
function opcionesDispCat(tipo = "") {
	let opciones;
	if (tipo === "ingreso") {
		opciones = ingresosCategoria
			.map((categ, i) => `${i + 1}. ${categ.toUpperCase()}`)
			.join("\n");
	} else {
		opciones = gastosCategoria
			.map((categ, i) => `${i + 1}. ${categ.toUpperCase()}`)
			.join("\n");
	}
	return opciones;
}

//categoria
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

//Funcion para mostrar los atributos modificables del objeto
//recibe un regeistro para mostrar los atributos menos el id y devuelve el texto con la cantidad total de atts
export function opcionesDispAtts(registro) {
	const excluir = new Set(["id", "tipo"]);
	let i = 1;
	const detalles = Object.entries(registro)
		.filter(([att]) => !excluir.has(att))
		.map(([att, valor]) => `${i++}. ${att.toUpperCase()}: ${valor}`)
		.join("\n");
	return [detalles, i - 1];
}

//Seleccionar el atributo de un registro mediante prompt y devuelve el indice de este (contar desde cero)
export function seleccionarAtt(ID, type) {
	const reg = buscarRegistro(ID, type);
	let opciones = opcionesDispAtts(reg)[0];
	const totalAtts = opcionesDispAtts(reg)[1];
	let esValido = true;
	let aux = 0;
	do {
		let input = prompt(
			`Seleccione el atributo que desea modificar:\n${opciones}`
		);
		if (input === null) {
			return;
		}
		aux = Number(input);
		if (aux < 1 || aux > totalAtts || isNaN(aux)) {
			alert("Por favor, ingrese un número válido entre 1 y " + totalAtts);
		} else {
			esValido = false;
		}
	} while (esValido);
	return aux;
}

//funcion para ingresar el atributo a cambiar
export function pedirAttACambiar(att, tipo) {
	let aux;
	switch (att) {
		case "monto":
			aux = pedirMonto(tipo);
			return [aux, "monto"];
		case "descripcion":
			aux = pedirDescripcion(tipo);
			return [aux, "descripcion"];
		case "esMensual":
			aux = pedirEsMensual(tipo);
			return [aux, "esMensual"];
		case "categoria":
			aux = pedirCategoria(tipo);
			return [aux, "categoria"];
		case "fecha":
			aux = pedirFecha(tipo);
			return [aux, "fecha"];
	}
	return 1;
}
