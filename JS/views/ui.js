import {
	ingresarRegistro,
	seleccionarEliminarRegistro,
} from "../controllers/registroController.js";
import { mostrarRegistros } from "./consoleCustomLogs.js";

const btnAgregar = document.getElementById("addBtn");
const btnVer = document.getElementById("seeBtn");
const btnDel = document.getElementById("deleteBtn");
const cards = document.querySelectorAll(".card");

btnAgregar.addEventListener("click", ingresarRegistro);
btnVer.addEventListener("click", mostrarRegistros);
btnDel.addEventListener("click", seleccionarEliminarRegistro);
