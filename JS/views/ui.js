import {
	ingresarRegistro,
	eliminarRegistro,
} from "../controllers/registerCRUDController.js";
import { showRecords } from "../components/cardsRegs.js";
import { ingresos } from "../data/db.js";

const formAgregar = document.getElementById("addRecordForm");
const btnDelete = document.getElementById("deleteReg");
const container = document.getElementById("all");

if (formAgregar) {
	formAgregar.addEventListener("submit", (event) => {
		event.preventDefault();
		ingresarRegistro();
		formAgregar.reset();
	});
}

if (container) {
	container.addEventListener("click", function (event) {
		if (event.target.closest(".btn-outline-danger")) {
			const button = event.target.closest(".btn-outline-danger");

			const id = Number(button.getAttribute("data-id"));
			const tipo = button.getAttribute("data-tipo");

			eliminarRegistro(tipo, id);
			showRecords();
		}
	});
}
