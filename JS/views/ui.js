import {
	editarRegistro,
	ingresarRegistro,
	eliminarRegistro,
} from "../controllers/registerCRUDController.js";
import { updateAllDashboardElements } from "../controllers/updatesDashboardController.js";
import { setDayToday } from "../utils/timeHelperUtils.js";

const formAgregar = document.getElementById("addRecordForm");
const formEditar = document.getElementById("editRecordForm");
const container = document.getElementById("all");
const containerIncome = document.getElementById("income");
const containerExpense = document.getElementById("expense");
const modal = document.getElementById("addRecordModal");
const modalEditElement = document.getElementById("editRecordModal");

const containers = [container, containerExpense, containerIncome];

// Funcion para agregar un registro
if (formAgregar) {
	modal.addEventListener("shown.bs.modal", () => {
		const form = modal.querySelector("form");
		if (form) {
			form.reset();
			setDayToday();
		}
	});
	formAgregar.addEventListener("submit", (event) => {
		event.preventDefault();
		ingresarRegistro();
		updateAllDashboardElements();
		const modalInstance = bootstrap.Modal.getInstance(modal);
		if (modalInstance) {
			modalInstance.hide();
		}
	});
}

//Funcion para editar un registro
if (formEditar) {
	formEditar.addEventListener("submit", (event) => {
		event.preventDefault();
		editarRegistro();
		updateAllDashboardElements();
		const modalInstance = bootstrap.Modal.getInstance(modalEditElement);
		if (modalInstance) {
			modalInstance.hide();
		}
	});
}

// Funcion para borrar un registro en cualquier parte del dashboard
if (container || containerExpense || containerExpense) {
	containers.forEach((cont) => {
		cont.addEventListener("click", function (event) {
			if (event.target.closest(".btn-outline-danger")) {
				const btnDelete = event.target.closest(".btn-outline-danger");

				const id = Number(btnDelete.getAttribute("data-id"));
				const tipo = btnDelete.getAttribute("data-tipo");

				eliminarRegistro(tipo, id);
				updateAllDashboardElements();
			}
		});
	});
}
