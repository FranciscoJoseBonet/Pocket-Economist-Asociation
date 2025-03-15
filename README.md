# Simulador de Gestión de Ingresos y Gastos

Este proyecto es una aplicación de consola para gestionar ingresos y gastos. Permite agregar, editar, eliminar y visualizar los registros, así como calcular el saldo total entre los ingresos y los gastos.

## Descripción

La aplicación permite a los usuarios ingresar, modificar y eliminar registros de ingresos y gastos. Además, permite calcular el saldo actual mostrando la diferencia entre el total de ingresos y el total de gastos.

### Funcionalidades

- **Agregar un registro**: Permite ingresar un nuevo ingreso o gasto con su monto, descripción, categoría, fecha y si es mensual.
- **Ver registros**: Muestra todos los ingresos y gastos registrados, organizados por tipo.
- **Editar un registro**: Permite modificar un registro existente seleccionando el atributo a modificar.
- **Eliminar un registro**: Permite eliminar un registro existente por su ID.
- **Calcular saldo**: Muestra el saldo actual, calculado como la diferencia entre los ingresos y los gastos totales.

## Cómo probar el código

### Ingresar registros

Puedes agregar registros de ingresos y gastos mediante los botones proporcionados en la interfaz o interactuando con las funciones directamente desde la consola. El sistema pedirá información como el tipo de registro, monto, descripción, categoría, entre otros. Los registros se mostrarán en la consola al ser ingresados.

### Mostrar registros

Puedes ver los registros existentes utilizando el botón correspondiente en la interfaz. Los registros se mostrarán de forma organizada y detallada en la consola.

### Eliminar registros

Para eliminar un registro, el sistema solicitará el ID del registro que deseas eliminar. Esto se puede hacer desde el botón correspondiente en la interfaz.

### Calcular saldo

Puedes calcular el saldo de la gestión de ingresos y gastos a través del botón correspondiente. Esto mostrará el saldo restante basado en los ingresos y los gastos registrados.

### Pruebas por consola

Para probar las funcionalidades por consola, puedes ejecutar las lineas que estan en los archivos prueba1 y prueba 2

## Limitaciones y mejoras

- Actualmente, el proyecto está implementado en un único archivo `script.js`, lo cual dificulta la modularización y el entendimiento del código a gran escala. Es necesario separar las funciones en diferentes archivos y módulos para mejorar la organización y comprensión del código.
- Las funciones podrían mejorarse en cuanto a la modularización, separación de responsabilidades y reutilización de código. Para un proyecto más escalable, sería recomendable dividir el código en diferentes archivos, por ejemplo, separando la lógica de manejo de registros, la lógica de UI, y la lógica de cálculos.
- Mejorar el manejo de errores y validaciones, especialmente cuando se interactúa con el usuario a través de `prompt` y `alert`, para hacer la experiencia más robusta y amigable.

## Requisitos

Este proyecto no tiene dependencias externas y está diseñado para ejecutarse en cualquier entorno que soporte JavaScript, como un navegador web.

## Autores

- Francisco Bonet - Desarrollador principal

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver los detalles de la licencia en el archivo [LICENSE](LICENSE).
