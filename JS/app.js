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
		if (this.tipo === "ingreso") {
			this.id = ingresos.length + 1;
		} else {
			this.id = gastos.length + 1;
		}
	}

	//No se si sirva pero creamos una forma de eliminar el registro de la memoria
	destruir() {
		this.tipo = null;
		this.monto = null;
		this.descripcion = null;
		this.esMensual = null;
		this.fecha = null;
	}

	//Para probar el console.log()
	mostrarRegistro() {
		return `tipo :${this.tipo}, monto: ${this.monto}, descripcion: ${this.descripcion}, esMensual: ${this.esMensual}, fecha: ${this.fecha}`;
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
		ingresos.push(registro);
	} else {
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

//Editar un registro de las listas
function editarRegistro(registro) {}

//Main de prueba
registro1 = new registro("ingreso", 1000, "Sueldo", true);
agregarRegistro(registro1);
registro2 = new registro("ingreso", 5000, "aaaaaa", false);
agregarRegistro(registro2);
registro3 = new registro("ingreso", 1000, "Sueldo", true);
agregarRegistro(registro3);

console.log(ingresos);
