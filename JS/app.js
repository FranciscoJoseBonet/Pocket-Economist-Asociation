//Registros de gastos e ingresos
class registro {
	constructor(
		tipo,
		monto,
		descripcion = "No posee una descripcion asignada",
		esMensual = false
	) {
		this.tipo = tipo;
		this.monto = monto;
		this.descripcion = descripcion;
		this.esMensual = esMensual;
		this.fecha = new Date().toISOString().split("T")[0];
	}

	//Para probar el console.log()
	mostrarRegistro() {
		return ` Monto: ${this.monto},\n Descripcion: ${
			this.descripcion
		},\n Es Mensual: ${
			this.esMensual === true ? "Si" : "No"
		},\n Fecha de carga: ${this.fecha}\n-----------------`;
	}
}

//Almacenamiento (Pasar a JSON)
gastos = [];
ingresos = [];

//tipo
function pedirTipo() {
	let aux;
	do {
		aux = Number(
			prompt("Escriba 1 para declarar un INGRESO o 2 para declarar un GASTO")
		);
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
		aux = Number(prompt(`Ingrese el monto del ${tipo}`));
		if (isNaN(aux)) {
			alert("Por favor, ingrese un valor numérico");
		}
	} while (isNaN(aux));
	return aux;
}

//descripción
function pedirDescripcion(tipo) {
	let aux;
	if (confirm(`¿Desea agregar una descripción al ${tipo}?`)) {
		aux = prompt(`Ingresa una descripción para el ${tipo}`);
	} else {
		aux = "No posee una descripción asignada";
	}
	return aux;
}

//esMensual
function pedirEsMensual(tipo) {
	return confirm(
		`¿El ${tipo} es mensual? Presiona Aceptar para SI o Cancelar para NO`
	);
}

// Función principal para ingresar el registro
function ingresarRegistro() {
	const tipo = pedirTipo();
	const monto = pedirMonto(tipo);
	const descripcion = pedirDescripcion(tipo);
	const esMensual = pedirEsMensual(tipo);

	const ultRegistro = new registro(tipo, monto, descripcion, esMensual);
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
}

//Eliminar un registro de las listas
function eliminarRegistro(registro) {
	if (registro.tipo === "ingreso") {
		ingresos = ingresos.filter((reg) => reg.id !== registro.id);
	} else {
		gastos = gastos.filter((reg) => reg.id !== registro.id);
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

btnAgregar.addEventListener("click", ingresarRegistro);
btnVer.addEventListener("click", mostrarRegistros);
