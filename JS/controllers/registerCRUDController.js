import { Registro } from "../models/Registro.js";
import { generarID } from "../utils/generationUtils.js";
import {
	agregarRegistro,
	borrarRegistro,
	esVacio,
	modificarRegistro,
} from "../data/db.js";

// Esta funcion sirve para ingresar los datos del formulario de la carga del registro
export function ingresarRegistro() {
	const tipo = document.getElementById("recordType").value;
	const monto = document.getElementById("recordAmount").value;
	const categoria = document.getElementById("recordCategory").value;
	let descripcion = document.getElementById("recordDescription").value;
	if (descripcion === "") {
		descripcion = `Este ${tipo} no posee una descripcion asignada`;
	}
	const esMensual = document.getElementById("recordRecurring").checked;
	const fecha = document.getElementById("recordDate").value;
	const id = generarID(tipo);

	const nuevoRegistro = new Registro(
		tipo,
		monto,
		descripcion,
		esMensual,
		categoria,
		fecha,
		id
	);
	agregarRegistro(nuevoRegistro);
}

//Funcion para llamar y que interactue con el usuario para eliminar un registro
export function eliminarRegistro(tipo, id) {
	if (esVacio(tipo)) {
		console.log(`No existen registros de ${tipo}s`);
		return null;
	}
	borrarRegistro(tipo, id);
}

//Editar un registro
//Esta funcion la llama el boton de editar en las tarjetas y crea el objeto para modificar el registro
export function editarRegistro(tipo, id) {
	const atributosEditar = {
		monto: document.getElementById("recordAmount").value,
		categoria: document.getElementById("recordCategory").value,
		descripcion: document.getElementById("recordDescription").value,
		esMensual: document.getElementById("recordRecurring").checked,
		fecha: document.getElementById("recordDate").value,
	};
	modificarRegistro(tipo, id, atributosEditar);
}
