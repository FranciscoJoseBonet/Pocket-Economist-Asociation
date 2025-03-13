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
		return `
	=============================
	🆔 ID: ${this.id}
	💰 Monto: ${montoFormateoPesos(this.monto)}
	📂 Categoría: ${this.categoria}
	📝 Descripción: ${this.descripcion}
	📅 Fecha: ${this.fecha}
	🔄 Es Mensual: ${this.esMensual ? "✅ Sí" : "❌ No"}
	=============================
	`;
	}

	mostrarAtts() {
		return Object.keys(this)
			.map((n) => `${n}`)
			.join(", ");
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
function pedirFecha(tipo) {
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
	const esMensual = pedirEsMensual(tipo);
	const fecha = pedirFecha(tipo);
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

//Funcion para mostrar los atributos modificables del objeto
//recibe un regeistro para mostrar los atributos menos el id y devuelve el texto con la cantidad total de atts
function opcionesDispAtts(registro) {
	const excluir = new Set(["id", "tipo"]);
	let i = 1;
	const detalles = Object.entries(registro)
		.filter(([att]) => !excluir.has(att))
		.map(([att, valor]) => `${i++}. ${att.toUpperCase()}: ${valor}`)
		.join("\n");
	return [detalles, i - 1];
}

//Seleccionar el atributo de un registro mediante prompt y devuelve el indice de este (contar desde cero)
function seleccionarAtt(ID, type) {
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
function pedirAttACambiar(att, tipo) {
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

//asignacion de un nuevo vaclor a un registro
function asignarAtt(registro, atributo, valor) {
	return (registro[atributo] = valor);
}

//Editar un registro
function editarRegistro() {
	const tipo = pedirTipo();
	if (tipo === null) return;
	const id = pedirId(tipo);
	const reg = buscarRegistro(id, tipo);
	const indexAtt = seleccionarAtt(id, tipo);
	const att = Object.keys(reg)[indexAtt];

	const attList = pedirAttACambiar(att, tipo);
	const nuevoAtt = attList[0];
	const attNombre = attList[1];
	if (nuevoAtt === null) return;

	asignarAtt(reg, attNombre, nuevoAtt);
	console.log(
		`El atributo ${attNombre}, ha sido modificado correctamente a ${nuevoAtt}`
	);
	return 0;
}

//Eliminar un registro de las listas
function eliminarRegistro(registro) {
	if (registro.tipo === "ingreso") {
		ingresos = ingresos.filter((reg) => reg.id !== registro.id);
	} else {
		gastos = gastos.filter((reg) => reg.id !== registro.id);
	}
	console.log("Registro eliminado de la lista correctamente");
	return 0;
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
	return total;
}

//Calcula el saldo
function calcularSaldo() {
	const ingresoTotal = actualizarTotal(ingresos);
	const gastoTotal = actualizarTotal(gastos);
	const saldo = ingresoTotal - gastoTotal;
	alert(`El saldo actual es: ${montoFormateoPesos(saldo)}`);
	console.log(montoFormateoPesos(saldo));
	return saldo;
}

//Mostrar registros
function mostrarRegistros() {
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

// Generar 15 gastos
for (let i = 0; i < 15; i++) {
	gastos.push(
		new registro(
			"gasto",
			Math.floor(Math.random() * 10000) + 1,
			undefined,
			Math.random() < 0.5,
			gastosCategoria[Math.floor(Math.random() * gastosCategoria.length)],
			undefined,
			generarID("gasto")
		)
	);
}

// Generar 20 ingresos
for (let i = 0; i < 20; i++) {
	ingresos.push(
		new registro(
			"ingreso",
			Math.floor(Math.random() * 10000) + 1,
			undefined,
			Math.random() < 0.5,
			ingresosCategoria[Math.floor(Math.random() * ingresosCategoria.length)],
			undefined,
			generarID("ingreso")
		)
	);
}
