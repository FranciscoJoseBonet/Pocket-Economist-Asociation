import { Registro } from "../models/Registro.js";
import { generarID } from "../utils/generationUtils.js";
import { agregarRegistro, borrarRegistro, esVacio } from "../data/db.js";

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

//Estas funciones las tengo que editar para que interactuen con el front

// //asignacion de un nuevo vaclor a un registro
// export function asignarAtt(registro, atributo, valor) {
// 	return (registro[atributo] = valor);
// }

// //Editar un registro
// export function editarRegistro() {
// 	const tipo = promptModule.pedirTipo();
// 	if (tipo === null) return;
// 	const id = promptModule.pedirId(tipo);
// 	const reg = promptModule.buscarRegistro(id, tipo);
// 	const indexAtt = promptModule.seleccionarAtt(id, tipo);
// 	const att = Object.keys(reg)[indexAtt];

// 	const attList = promptModule.pedirAttACambiar(att, tipo);
// 	const nuevoAtt = attList[0];
// 	const attNombre = attList[1];
// 	if (nuevoAtt === null) return;

// 	asignarAtt(reg, attNombre, nuevoAtt);
// 	console.log(
// 		`El atributo ${attNombre}, ha sido modificado correctamente a ${nuevoAtt}`
// 	);
// 	return 0;
// }
