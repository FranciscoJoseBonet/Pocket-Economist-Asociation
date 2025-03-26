import { Registro } from "../models/Registro.js";
import * as promptModule from "../utils/promptUtils.js";
import { gastos, ingresos } from "../data/db.js";

export function agregarRegistro(registro) {
	if (registro.tipo === "ingreso") {
		ingresos.push(registro);
	} else {
		gastos.push(registro);
	}
	console.log("Registro ageregado a la lista correctamente");
}

export function eliminarRegistro(id, tipo) {
	if (tipo === "ingreso") {
		const index = ingresos.findIndex((reg) => reg.id === id);
		if (index !== -1) ingresos.splice(index, 1);
	} else {
		const index = gastos.findIndex((reg) => reg.id === id);
		if (index !== -1) gastos.splice(index, 1);
	}
	console.log("Registro eliminado correctamente");
}

//Funcion para encontrar el registro para eliminarlo
function buscarRegistro(ID, type) {
	if (type === "ingreso") {
		return ingresos.find((reg) => reg.id === ID);
	} else {
		return gastos.find((reg) => reg.id === ID);
	}
}

//Funcion para llamar y que interactue con el usuario para eliminar un registro
export function seleccionarEliminarRegistro() {
	const tipo = promptModule.pedirTipo();
	if (tipo === null) return;
	if (promptModule.esVacio(tipo, false)) {
		console.log(`No existen registros de ${tipo}s`);
		return;
	}
	const id = promptModule.pedirId(tipo);
	if (id === null) return;
	const reg = buscarRegistro(id, tipo);
	eliminarRegistro(reg);
}

export function ingresarRegistro() {
	const tipo = promptModule.pedirTipo();
	if (!tipo) return;

	const monto = promptModule.pedirMonto(tipo);
	if (monto === null) return;

	const categoria = promptModule.pedirCategoria(tipo);
	const descripcion = promptModule.pedirDescripcion(tipo);
	const esMensual = promptModule.pedirEsMensual(tipo);
	const fecha = promptModule.pedirFecha(tipo);
	const id = promptModule.generarID(tipo);

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

//asignacion de un nuevo vaclor a un registro
export function asignarAtt(registro, atributo, valor) {
	return (registro[atributo] = valor);
}

//Editar un registro
export function editarRegistro() {
	const tipo = promptModule.pedirTipo();
	if (tipo === null) return;
	const id = promptModule.pedirId(tipo);
	const reg = promptModule.buscarRegistro(id, tipo);
	const indexAtt = promptModule.seleccionarAtt(id, tipo);
	const att = Object.keys(reg)[indexAtt];

	const attList = promptModule.pedirAttACambiar(att, tipo);
	const nuevoAtt = attList[0];
	const attNombre = attList[1];
	if (nuevoAtt === null) return;

	asignarAtt(reg, attNombre, nuevoAtt);
	console.log(
		`El atributo ${attNombre}, ha sido modificado correctamente a ${nuevoAtt}`
	);
	return 0;
}
