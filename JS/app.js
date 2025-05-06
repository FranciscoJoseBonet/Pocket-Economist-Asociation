import "./views/ui.js";
import "./lifecycle/onLoad.js";
import "./lifecycle/onUnload.js";
import "./views/showEditForm.js";
import { updateAllDashboardElements } from "./controllers/updatesDashboardController.js";
import { updateAllIndexElements } from "./controllers/updatesIndexController.js";
import { traerDolar } from "./utils/dolarAPIUtils.js";

document.addEventListener("DOMContentLoaded", () => {
	const path = window.location.pathname;

	if (path.endsWith("index.html")) {
		updateAllIndexElements();
		traerDolar();
	} else {
		if (path.endsWith("dashboard.html")) {
			updateAllDashboardElements();
		}
	}
});
