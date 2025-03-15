// Este es un codigo que le pedi a GPT para la prueba de algunas funciones

// 1. Agregar un ingreso
console.log("Test 1: Agregar un ingreso");
ingresarRegistro(); // Esto pedirá interacciones por prompt

// 2. Agregar un gasto
console.log("Test 2: Agregar un gasto");
ingresarRegistro(); // Esto pedirá interacciones por prompt

// 3. Mostrar registros (ingresos y gastos)
console.log("Test 3: Mostrar registros");
mostrarRegistros(); // Esto mostrará todos los registros en consola

// 4. Editar un registro
console.log("Test 4: Editar un registro");
editarRegistro(); // Esto pedirá interacciones por prompt para seleccionar y modificar un registro

// 5. Eliminar un registro
console.log("Test 5: Eliminar un registro");
seleccionarEliminarRegistro(); // Esto pedirá interacciones por prompt para seleccionar y eliminar un registro

// 6. Ver el saldo total (Ingresos - Gastos)
console.log("Test 6: Calcular saldo");
calcularSaldo(); // Esto calculará el saldo total

// 7. Ver si la lista de ingresos está vacía
console.log("Test 7: Verificar si los ingresos están vacíos");
esVacio("ingreso"); // Esto verifica si hay ingresos registrados

// 8. Ver si la lista de gastos está vacía
console.log("Test 8: Verificar si los gastos están vacíos");
esVacio("gasto"); // Esto verifica si hay gastos registrados

// 9. Ver las opciones de categorías de ingresos
console.log("Test 9: Mostrar opciones de categorías de ingresos");
console.log(opcionesDispCat("ingreso")); // Muestra las categorías de ingresos

// 10. Ver las opciones de categorías de gastos
console.log("Test 10: Mostrar opciones de categorías de gastos");
console.log(opcionesDispCat("gasto")); // Muestra las categorías de gastos
