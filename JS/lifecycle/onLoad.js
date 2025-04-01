import { cargarInitdb } from "../data/db.js";
import { cargarInitdbcategoria } from "../data/dbCategorias.js";
import { cargarInitdbIds } from "../data/IdsDb.js";

document.addEventListener("DOMContentLoaded", () => {
	cargarInitdb(), cargarInitdbIds(), cargarInitdbcategoria();
});
