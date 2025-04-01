import "./views/ui.js";
import "./lifecycle/onLoad.js";
import "./lifecycle/onUnload.js";
import { grabarSessionDataLocal } from "./controllers/localStorageController.js";

// Función para escuchar la tecla "r" y ejecutar la función de guardar
function escucharTeclaGuardar() {
	window.addEventListener("keydown", (evento) => {
		if (evento.key === "r" || evento.key === "R") {
			console.log("Tecla 'r' presionada, guardando datos...");
			grabarSessionDataLocal();
		}
	});
}

escucharTeclaGuardar();
