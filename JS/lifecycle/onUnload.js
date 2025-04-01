import { grabarSessionDataLocal } from "../controllers/localStorageController.js";

window.addEventListener("beforeunload", (event) => {
	grabarSessionDataLocal();
});
