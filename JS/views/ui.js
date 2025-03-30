import { ingresarRegistro } from "../controllers/registerCRUDController.js";

const formAgregar = document.getElementById("addRecordForm");

formAgregar.addEventListener("submit", (event) => {
	event.preventDefault();
	ingresarRegistro();
});
