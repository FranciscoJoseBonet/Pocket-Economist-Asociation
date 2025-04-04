import "./views/ui.js";
import "./lifecycle/onLoad.js";
import "./lifecycle/onUnload.js";
import "./views/showEditForm.js";
import { updateAllDashboardElements } from "./controllers/updatesDashboardController.js";
import { updateAllIndexElements } from "./controllers/updatesIndexController.js";

document.addEventListener("DOMContentLoaded", () => {
	const path = window.location.pathname;

	if (path.endsWith("index.html")) {
		updateAllIndexElements();
		console.log("Index cargado correctamente");
	} else {
		if (path.endsWith("dashboard.html")) {
			updateAllDashboardElements();
			console.log("Dashboard cargado correctamente");
		}
	}
});
