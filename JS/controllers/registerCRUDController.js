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
export function editarRegistro(form) {
	const atributosEditar = {
		monto: form.querySelector("#recordAmount").value,
		categoria: form.querySelector("#recordCategory").value,
		descripcion: form.querySelector("#recordDescription").value,
		esMensual: form.querySelector("#recordRecurring").checked,
		fecha: form.querySelector("#recordDate").value,
	};

	const id = Number(form.dataset.id);
	const tipo = form.dataset.tipo;

	console.log(atributosEditar);
	modificarRegistro(tipo, id, atributosEditar);
}
