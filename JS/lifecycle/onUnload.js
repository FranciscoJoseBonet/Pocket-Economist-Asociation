import { grabarSessionDataLocal } from "../controllers/localStorageController.js";

window.addEventListener("beforeunload", grabarSessionDataLocal());
