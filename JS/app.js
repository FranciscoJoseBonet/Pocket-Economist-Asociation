//Registros de gastos e ingresos
class registro {
	constructor(
		tipo,
		monto,
		descripcion = "No posee una descripcion asignada",
		esMensual = false,
		categoria = "No posee una categoría asignada",
		fecha = new Date().toLocaleDateString("es-ES")
	) {
		this.tipo = tipo;
		this.monto = monto.toLocaleString("es-AR", {
			style: "currency",
			currency: "ARS",
		});
		this.descripcion = descripcion;
		this.esMensual = esMensual;
		this.fecha = fecha;
		this.categoria = categoria;
	}

	//Para mostrar en la consola
	mostrarRegistro() {
		return `Monto: ${this.monto}\nCategoría: ${this.categoria}\nDescripcion: ${
			this.descripcion
		}\nEs Mensual: ${
			this.esMensual === true ? "Si" : "No"
		}\nFecha del registro: ${this.fecha}\nID: ${this.id}\n-----------------`;
	}
}

//Almacenamiento (Pasar a JSON)
gastos = [];
ingresos = [];

gastosCategoria = [];
ingresosCategoria = [];

//tipo
function pedirTipo() {
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
function pedirMonto(tipo) {
	let aux;
	do {
		const input = prompt(`Ingrese el monto del ${tipo}`);
		if (input === null) return null;
		aux = Number(input);
		if (isNaN(aux) || aux <= 0) {
			alert("Por favor, ingrese un monto válido (mayor a 0).");
		}
	} while (isNaN(aux) || aux <= 0);
	return aux;
}

//descripción
function pedirDescripcion(tipo) {
	if (!confirm(`¿Desea agregar una descripción al ${tipo}?`)) {
		return "No posee una descripción asignada";
	}
	const aux = prompt(`Ingresa una descripción para el ${tipo}`);
	return aux === null || aux.trim() === ""
		? "No posee una descripción asignada"
		: aux;
}

//esMensual
function pedirEsMensual(tipo) {
	return confirm(
		`¿El ${tipo} es mensual? Presiona ACEPTAR para SI o CANCELAR para NO`
	);
}

//categoria
function pedirCategoria(tipo) {
	if (!confirm(`¿Desea agregar una categoría al ${tipo}?`)) {
		return "Sin categoría";
	}
	const aux = prompt(`Ingresa una categoría para el ${tipo}`);
	return aux === null || aux.trim() === "" ? "Sin categoría" : aux;
}

//pedir la fecha
function pedirFecha(tipo) {
	const regex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
	if (
		confirm(`Si es un ${tipo} de hoy presione ACEPTAR, sino presione CANCELAR`)
	) {
		return new Date().toLocaleDateString("es-ES");
	}
	let aux;
	do {
		aux = prompt(`Ingrese la fecha del ${tipo} con el formato dd/mm/aaaa`);
		if (aux === null) return null;
		if (!regex.test(aux)) {
			alert("Por favor, ingrese una fecha válida en formato dd/mm/aaaa");
		}
	} while (!regex.test(aux));
	return aux;
}

//FUncion para pedir id del registro a eliminar
function pedirId(tipo) {
	let aux;
	const limite = tipo === "ingreso" ? ingresos.length : gastos.length;
	do {
		aux = prompt(`Ingrese el ID del ${tipo} a eliminar`);
		if (aux === null) return null;

		aux = Number(aux);
		if (isNaN(aux) || aux <= 0 || aux > limite) {
			alert("Por favor, ingrese un ID válido dentro del rango.");
		}
	} while (isNaN(aux) || aux <= 0 || aux > limite);
	return aux;
}

// Función principal para ingresar el registro
function ingresarRegistro() {
	const tipo = pedirTipo();
	if (tipo === null) return;
	const monto = pedirMonto(tipo);
	if (monto === null) return;
	const categoria = pedirCategoria(tipo);
	if (categoria === null) categoria = "No posee una categoria asignada";
	const descripcion = pedirDescripcion(tipo);
	if (descripcion === null) descripcion = "No posee una descripcion asignada";
	const esMensual = pedirEsMensual(tipo);
	let fecha = pedirFecha(tipo);
	if (fecha === null) fecha = new Date().toLocaleDateString("es-ES");

	const ultRegistro = new registro(
		tipo,
		monto,
		descripcion,
		esMensual,
		categoria,
		fecha
	);
	agregarRegistro(ultRegistro);
}

//Agregar un registro a las listas
function agregarRegistro(registro) {
	if (registro.tipo === "ingreso") {
		registro.id = ingresos.length + 1;
		ingresos.push(registro);
	} else {
		registro.id = gastos.length + 1;
		gastos.push(registro);
	}
	console.log("Registro ageregado a la lista correctamente");
}

//Eliminar un registro de las listas
function eliminarRegistro(registro) {
	if (registro.tipo === "ingreso") {
		ingresos = ingresos.filter((reg) => reg.id !== registro.id);
	} else {
		gastos = gastos.filter((reg) => reg.id !== registro.id);
	}
	console.log("Registro eliminado de la lista correctamente");
}

//Funcion para encontrar el registro para eliminarlo
function buscarRegistro(ID, type) {
	if (type === "ingreso") {
		return ingresos.find((reg) => reg.id === ID);
	} else {
		return gastos.find((reg) => reg.id === ID);
	}
}

//Calculo del ingreso total o gasto total
function actualizarTotal(lista) {
	let total = 0;
	for (let i = 0; i < lista.length; i++) {
		total += lista[i].tipo === "ingreso" ? lista[i].monto : lista[i].monto;
	}
	console.log("Total actualizado correctamente");
	return total;
}

//Calcula el saldo
function calcularSaldo() {
	const ingresoTotal = actualizarTotal(ingresos);
	const gastoTotal = actualizarTotal(gastos);
	const saldo = ingresoTotal - gastoTotal;
	return saldo;
}

//Mostrar registros
function mostrarRegistros() {
	if (gastos.length === 0 && ingresos.length === 0) {
		console.log("No hay ningun registro para mostrar");
		return;
	}

	console.log("<---- INGRESOS ---->");
	if (ingresos.length === 0) {
		console.log("No hay ingresos registrados :v");
	}
	console.log(ingresos.map((reg) => reg.mostrarRegistro()).join("\n"));

	console.log("<---- GASTOS ---->");
	if (gastos.length === 0) {
		console.log("No hay gastos registrados :D");
	}
	console.log(gastos.map((reg) => reg.mostrarRegistro()).join("\n"));
}

const btnAgregar = document.getElementById("addBtn");
const btnVer = document.getElementById("seeBtn");
const btnDel = document.getElementById("deleteBtn");

//Funciones de los botones del DOM
btnAgregar.addEventListener("click", ingresarRegistro);
btnVer.addEventListener("click", mostrarRegistros);
btnDel.addEventListener("click", () => {
	const tipo = pedirTipo();
	if (tipo === null) return;
	if (tipo === "ingreso" && ingresos.length === 0) {
		alert("No hay ingresos registrados");
		return;
	}
	if (tipo === "gasto" && gastos.length === 0) {
		alert("No hay gastos registrados");
		return;
	}
	const id = pedirId(tipo);
	if (id === null) return;
	const reg = buscarRegistro(id, tipo);
	eliminarRegistro(reg);
});
