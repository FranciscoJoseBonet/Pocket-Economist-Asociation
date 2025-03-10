// Clase que se encarga de manejar los registros de gastos e ingresos
class registro {
	constructor(
		tipo,
		monto,
		descripcion = "No posee una descripcion asignada",
		esFijo = false
	) {
		this.tipo = tipo;
		this.monto = monto;
		this.descripcion = descripcion;
		this.esFijo = esFijo;
		this.fecha = new Date().toISOString().split("T")[0];
	}

	mostrarRegistro() {
		return `tipo :${this.tipo}, monto: ${this.monto}, descripcion: ${this.descripcion}, esFijo: ${this.esFijo}, fecha: ${this.fecha}`;
	}
}
