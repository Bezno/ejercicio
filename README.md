# ejercicio-hoy-no-circula
## Backend
El backend de este proyecto está construido con Spring Boot v3.2.1, utilizando Java y Maven como herramientas principales. Se emplea una base de datos MySQL, y la conexión se realiza mediante REST.

## Frontend
El frontend se lo realizó con Angular 17, se añadió la librería de Angular material.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

- Node.js v18
- npm v9
- Angular CLI v17

## Instrucciones de Ejecución

1. **Instalación de Dependencias Frontend:**
    - Navega a la carpeta `frontend/` desde la terminal.
    - Ejecuta `npm install` para instalar las dependencias.

2. **Configuración de Base de Datos:**
    - Se ha proporcionado un script de base de datos en la carpeta `backend/` para la creación de la base de datos en MySQL.
    - Asegúrate de ajustar la configuración de conexión a la base de datos si es necesario.

3. **Ejecución del Backend:**
    - Navega a la carpeta `backend/` desde la terminal.
    - Ejecuta `mvn clean install` para construir el proyecto.

4. **Ejecución del Frontend:**
    - Navega a la carpeta `frontend/` desde la terminal.
    - Inicia la aplicación con `ng serve`.

Asegúrate de cumplir con los requisitos y sigue estos pasos para tener la aplicación en funcionamiento. ¡Disfruta explorando el ejercicio Hoy No Circula!