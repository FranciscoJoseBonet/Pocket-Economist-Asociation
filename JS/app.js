//Registros de gastos e ingresos
class registro {
	constructor(
		tipo,
		monto,
		descripcion = "No posee una descripcion asignada",
		esMensual = false,
		categoria = "Varios",
		fecha = new Date().toLocaleDateString("es-ES"),
		id
	) {
		this.tipo = tipo;
		this.monto = monto;
		this.descripcion = descripcion;
		this.esMensual = esMensual;
		this.fecha = fecha;
		this.categoria = categoria;
		this.id = id;
	}

	//Para mostrar en la consola
	mostrarRegistro() {
		return `Monto: ${montoFormateoPesos(this.monto)}\nCategoría: ${
			this.categoria
		}\nDescripcion: ${this.descripcion}\nEs Mensual: ${
			this.esMensual === true ? "Si" : "No"
		}\nFecha del registro: ${this.fecha}\nID: ${this.id}\n-----------------`;
	}
}

//Almacenamiento (Pasar a JSON)
gastos = [];
ingresos = [];

//LLevamos un conteo de las id de forma global
let conteoIdIngresos = 0;
let conteoIdGastos = 0;

let gastosCategoria = [
	"Alimentos",
	"Transporte",
	"Entretenimiento",
	"Salud",
	"Varios",
];
let ingresosCategoria = [
	"Salario",
	"Freelance",
	"Inversiones",
	"Regalos",
	"Varios",
];

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

//formateo del monto a Float
function montoFormateoFloat(montoConFormato) {
	return parseFloat(montoConFormato.replace(/[^0-9,-]/g, "").replace(",", "."));
}

//formateo del monto a Pesos
function montoFormateoPesos(montoSinFormato) {
	return montoSinFormato.toLocaleString("es-AR", {
		style: "currency",
		currency: "ARS",
	});
}

//descripción
function pedirDescripcion(tipo) {
	if (!confirm(`¿Desea agregar una descripción al ${tipo}?`)) {
		return "No posee una descripción asignada";
	}
	const aux = prompt(`Descripción para el ${tipo}`);
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

//Para obtener las opciones de las categorias
//Devuelve las categorias con formato de muestra al usuario
function opcionesDispCat(tipo) {
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
function pedirCategoria(tipo) {
	const lista = tipo === "ingreso" ? ingresosCategoria : gastosCategoria;
	let aux;

	if (!confirm(`¿Desea agregar una categoría a los ${tipo}s?`)) {
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

//Validar existencia de ID
function existeId(tipo, valor) {
	return (tipo === "ingreso" ? ingresos : gastos).some((n) => n.id === valor);
}

//FUncion para pedir id del registro a eliminar
function pedirId(tipo) {
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

// Función principal para ingresar el registro
function ingresarRegistro() {
	const tipo = pedirTipo();
	if (tipo === null) return;
	const monto = pedirMonto(tipo);
	if (monto === null) return;
	const categoria = pedirCategoria(tipo);
	const descripcion = pedirDescripcion(tipo);
	if (descripcion === null) descripcion = "No posee una descripcion asignada";
	const esMensual = pedirEsMensual(tipo);
	let fecha = pedirFecha(tipo);
	if (fecha === null) fecha = new Date().toLocaleDateString("es-ES");
	const id = generarID(tipo);

	const ultRegistro = new registro(
		tipo,
		monto,
		descripcion,
		esMensual,
		categoria,
		fecha,
		id
	);
	agregarRegistro(ultRegistro);
}
//Ver si el array esta vacio
function esVacio(tipo, mostrarMensaje = true) {
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

//Funcon para generar un id
function generarID(tipo) {
	if (tipo === "ingreso") {
		conteoIdIngresos += 1;
		return conteoIdIngresos;
	} else {
		conteoIdGastos += 1;
		return conteoIdGastos;
	}
}

//Agregar un registro a las listas
function agregarRegistro(registro) {
	if (registro.tipo === "ingreso") {
		ingresos.push(registro);
	} else {
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
	if (
		esVacio("gasto", (mostrarMensaje = false)) &&
		esVacio("ingreso", (mostrarMensaje = false))
	) {
		console.log("No existen registros de ingresos ni de gastos");
		alert("No existen registros de ingresos ni de gastos");
		return;
	}
	let mensaje = "<---- INGRESOS ---->\n";
	mensaje += ingresos.map((reg) => reg.mostrarRegistro()).join("\n");
	mensaje += "\n<---- GASTOS ---->\n";
	mensaje += gastos.map((reg) => reg.mostrarRegistro()).join("\n");

	console.log(mensaje);
	alert(mensaje);
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
	if (esVacio(tipo)) {
		return;
	}
	const id = pedirId(tipo);
	if (id === null) return;
	const reg = buscarRegistro(id, tipo);
	eliminarRegistro(reg);
});
