# Backend – POS Abarrotes El Caballo 

El backend del proyecto POS Abarrotes El Caballo fue desarrollado utilizando Node.js, Express y MySQL, con el objetivo de proporcionar una API REST funcional y organizada que gestione los procesos principales del punto de venta.

## Objetivo del Backend
El propósito de esta capa es administrar los datos del sistema, permitiendo operaciones seguras y eficientes sobre productos, ventas e inventario. El backend garantiza la integridad de la información mediante consultas controladas y el uso de transacciones para las ventas.

## Tecnologías Utilizadas
- **Node.js** como entorno de ejecución.
- **Express.js** para la creación de rutas y manejo del servidor.
- **MySQL** como sistema de gestión de bases de datos.
- **mysql2** para ejecutar consultas mediante promesas.
- **dotenv** para manejar variables de entorno.
- **CORS** para permitir la comunicación entre frontend y backend.

## Estructura General
El backend se encuentra organizado de la siguiente forma:
- `server.js`: archivo principal que configura Express, CORS, JSON y rutas.
- `db.js`: configuración del pool de conexión hacia MySQL.
- `routes/`: contiene los módulos de rutas para productos y ventas.
- `sql/`: incluye el script de creación de la base de datos y sus tablas.
- `.env`: archivo privado con los parámetros de conexión.

## Funcionamiento de la API
La API expone rutas para:
- CRUD de productos (consultar, crear, actualizar y eliminar).
- Registro de ventas, incluyendo cálculo del total y descuento automático de stock.
- Guardado seguro del detalle de cada venta mediante transacciones.

## Desarrollo
El desarrollo se realizó en etapas:
1. Inicialización del proyecto y configuración del servidor.
2. Establecimiento de la conexión con MySQL.
3. Diseño de la base de datos.
4. Implementación del CRUD de productos.
5. Programación del módulo de ventas.
6. Pruebas de cada ruta mediante herramientas de cliente HTTP.
7. Registro de cada avance mediante commits en la rama Ivan-Backend.

Este backend constituye una base sólida y funcional para el correcto funcionamiento del sistema de punto de venta.
