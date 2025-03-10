// Este es un archivo para probar el funcionamiento dee las funciones en el app.js

console.log("---- Ingresando registros ----");
const reg1 = new registro("ingreso", 1000, "Sueldo", true);
const reg2 = new registro("gasto", 200, "Supermercado", false);
const reg3 = new registro("gasto", 300, "Internet", true);
const reg4 = new registro("ingreso", 500, "Freelance", false);
agregarRegistro(reg1);
agregarRegistro(reg2);
agregarRegistro(reg3);
agregarRegistro(reg4);

//Muestro los registros
console.log("---- Lista de ingresos ----");
console.log(ingresos.map((reg) => reg.mostrarRegistro()).join("\n"));

console.log("---- Lista de gastos ----");
console.log(gastos.map((reg) => reg.mostrarRegistro()).join("\n"));

//Usamos las funciones de calculo
console.log("---- Cálculo de totales ----");
console.log("Total ingresos:", actualizarTotal(ingresos));
console.log("Total gastos:", actualizarTotal(gastos));
console.log("Saldo:", calcularSaldo());

//Usamos la funcion de eliminar y calculamos nuevamente
console.log("---- Eliminando un gasto ----");
eliminarRegistro(reg2);

console.log("Total ingresos después de eliminar:", actualizarTotal(ingresos));
console.log("Total gastos después de eliminar:", actualizarTotal(gastos));
console.log("Saldo después de eliminar:", calcularSaldo());
