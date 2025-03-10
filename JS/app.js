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
		return `tipo :${this.tipo}, monto: ${this.monto}, descripcion: ${this.descripcion}, esMensual: ${this.esMensual}, fecha: ${this.fecha}, id: ${this.id}`;
	}
}

//Almacenamiento (Pasar a JSON)
gastos = [];
ingresos = [];

//Pedirle al ususario que ingrese un registro
function ingresarRegistro() {
	let aux;
	//tipo
	do {
		aux = Number(
			prompt("Escriba 1 para declarar un INGRESO o 2 para declarar un GASTO")
		);
		if (aux !== 1 && aux !== 2) {
			alert("Por favor, ingrese un numero válido");
		}
	} while (aux !== 1 && aux !== 2);
	const tipo = aux === 1 ? "ingreso" : "gasto";

	//monto
	do {
		aux = Number(prompt(`Ingrese el monto del ${tipo}`));
		if (isNaN(aux)) {
			alert("Por favor, ingrese un valor numérico");
		}
	} while (isNaN(aux));
	const monto = aux;

	//descripcion
	if (confirm(`Desea agregar una descripcion al ${tipo}?`)) {
		aux = prompt(`Ingresa una descripcion para el ${tipo}`);
	} else {
		aux = "No posee una descripcion asignada";
	}
	const descripcion = aux;

	//esMensual
	aux = confirm(
		`El ${tipo} es mensual? Presiona Aceptar para SI o Cancelar para NO`
	);
	const esMensual = aux;

	//Creamos el registro
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
