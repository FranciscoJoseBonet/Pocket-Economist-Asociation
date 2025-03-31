import {
	ingresarRegistro,
	eliminarRegistro,
} from "../controllers/registerCRUDController.js";
import { showRecords } from "../components/cardsRegs.js";
import { setDayToday } from "../utils/timeHelperUtils.js";

const formAgregar = document.getElementById("addRecordForm");
const container = document.getElementById("all");
const modal = document.getElementById("addRecordModal");

if (modal) {
	modal.addEventListener("shown.bs.modal", () => {
		const form = modal.querySelector("form");
		if (form) {
			form.reset();
			setDayToday();
		}
	});
}

if (formAgregar) {
	formAgregar.addEventListener("submit", (event) => {
		event.preventDefault();
		ingresarRegistro();
		formAgregar.reset();
		const modalInstance = bootstrap.Modal.getInstance(modal);
		if (modalInstance) {
			modalInstance.hide();
		}
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
