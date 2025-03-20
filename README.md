# Proyecto Full Stack con Django REST Framework y React

## Descripción

Este proyecto es una aplicación Full Stack que permite la gestión y visualización de publicaciones.
Se compone de un backend desarrollado con Django y Django REST Framework, un frontend desarrollado con React y Vite, y una base de datos SQLite.

## Tecnologías Utilizadas

- **Backend**: Python, Django, Django REST Framework
- **Frontend**: React, Vite
- **Base de Datos**: SQLite
- **Estilos**: TailwindCSS, Shadcn

## Requisitos Funcionales

### 1. Pantalla Principal:

- Mostrar un listado de publicaciones provenientes de un endpoint REST.
- Cada publicación debe incluir:
  - Texto
  - Fecha de publicación
  - Autor
  - Número de interacciones (me gusta, comentarios, compartidos).

### 2. Funcionalidad de Búsqueda:

- Implementar una barra de búsqueda que permita filtrar publicaciones por texto.
- La búsqueda debe realizarse en tiempo real e ignorar mayúsculas/minúsculas.

### 3. Pantalla de Detalle:

- Al hacer clic en una publicación, mostrar una pantalla con el detalle completo de la publicación, incluyendo las métricas de interacción.

## Requisitos Técnicos

- Utilizar React para el desarrollo del front-end.
- Crear componentes reutilizables.
- Aplicar estilos con TailwindCSS y Shadcn para mejorar la interfaz visual.

## Requisitos del Backend

- Desarrollar un servicio REST con Django REST Framework.
- Proveer los datos de las publicaciones desde un archivo JSON, integrándolos en la base de datos SQLite.

## Endpoints del Backend

1. **GET /api/posts/register**
   - Registrar los datos en la base de datos.
2. **GET /api/posts**
   - Devuelve un listado de publicaciones en formato JSON.
3. **GET /api/posts/{id}**
   - Devuelve los detalles de una publicación específica.

## Instalación y Ejecución

### Backend

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/junior-r/GlobalComaniesTestFS.git
   ```
2. Ingresar a la carpeta **backend**, crear un entorno virtual e instalar dependencias:
   ```bash
   virtualenv venv --python=3.12
   venv/Scripts/activate
   # En Mac/Linux: source env/bin/activate
   pip install -r requirements.txt
   ```
3. Aplicar migraciones:
   ```bash
   python manage.py migrate
   ```
4. Ejecutar el servidor:
   ```bash
   python manage.py runserver
   ```

### Frontend

1. Moverse al directorio del frontend:
   ```bash
   cd ../frontend
   ```
2. Instalar dependencias:
   ```bash
   pnpm install
   ```
3. Crear un archivo **.env** en la raíz del proyecto con las siguientes variables de entorno

   ```bash
   VITE_API_BASE_URL=http://localhost:8000/api/posts
   ```

4. Ejecutar la aplicación:
   ```bash
   pnpm run dev
   ```

## Repositorio en GitHub

Puedes encontrar el código fuente del proyecto en el siguiente enlace:
[Repositorio del Proyecto](https://github.com/junior-r/GlobalComaniesTestFS)
