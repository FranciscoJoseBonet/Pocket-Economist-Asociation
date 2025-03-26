// Aca van las funciones de carga y descarga del objeto DatosUsuario en localstorage

import { ingresos, gastos } from "../data/db.js";
import { ingresosCategoria, gastosCategoria } from "../data/dbCategorias.js";
import * as almUtils from "../utils/almacenamientoUtils.js";
import * as CryptoJS from "crypto-js";

export function grabarEnLocal() {} // Esta funcion graba el objeto encriptado en el local storage

export function leerDeLocal() {} // Esta funcion lee el objeto encriptado en el local storage
