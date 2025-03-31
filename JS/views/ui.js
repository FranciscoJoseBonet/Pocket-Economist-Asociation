import {
	ingresarRegistro,
	eliminarRegistro,
} from "../controllers/registerCRUDController.js";
import { showRecords } from "../components/cardsRegs.js";

const formAgregar = document.getElementById("addRecordForm");
const btnDelete = document.getElementById("deleteReg");

formAgregar.addEventListener("submit", (event) => {
	event.preventDefault();
	ingresarRegistro();
	formAgregar.reset();
});

if (btnDelete) {
	btnDelete.addEventListener("click", () => {
		const id = this.getAttribute("data-id");
		const tipo = this.getAttribute("data-tipo");
		if (!eliminarRegistro(tipo, id)) {
			alert(`No existen ${tipo}s para eliminar`);
			return;
		}
		showRecords();
	});
}
