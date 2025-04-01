import "./views/ui.js";
import "./lifecycle/onLoad.js";
import "./lifecycle/onUnload.js";
import { updateAllElements } from "./controllers/updatesController.js";

document.addEventListener("DOMContentLoaded", () => {
	updateAllElements();
});
