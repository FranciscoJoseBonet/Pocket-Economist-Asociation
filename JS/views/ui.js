import {
	ingresarRegistro,
	eliminarRegistro,
} from "../controllers/registerCRUDController.js";
import { updateRecordsView } from "../controllers/updatesController.js";
import { setDayToday } from "../utils/timeHelperUtils.js";

const formAgregar = document.getElementById("addRecordForm");
const container = document.getElementById("all");
const containerIncome = document.getElementById("income");
const containerExpense = document.getElementById("expense");
const modal = document.getElementById("addRecordModal");

const containers = [container, containerExpense, containerIncome];

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
		updateRecordsView();

		formAgregar.reset();

		const modalInstance = bootstrap.Modal.getInstance(modal);

		if (modalInstance) {
			modalInstance.hide();
		}
	});
}

if (container || containerExpense || containerExpense) {
	containers.forEach((cont) => {
		cont.addEventListener("click", function (event) {
			if (event.target.closest(".btn-outline-danger")) {
				const button = event.target.closest(".btn-outline-danger");

				const id = Number(button.getAttribute("data-id"));
				const tipo = button.getAttribute("data-tipo");

				eliminarRegistro(tipo, id);
				updateRecordsView();
			}
		});
	});
}
