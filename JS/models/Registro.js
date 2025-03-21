import { montoFormateoPesos } from "../utils/formatUtils.js";

export class Registro {
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
