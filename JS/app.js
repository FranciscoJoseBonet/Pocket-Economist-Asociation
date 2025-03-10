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

//Almacenamiento de clases que despues convertire a JSON
gastos = [];
ingresos = [];

//Pedirle al ususario que ingrese un registro
function pedirRegistro() {}

//Agregar un registro a las listas
function agregarRegistro(registro) {}

//Eliminar un registro de las listas
function eliminarRegistro(registro) {}
