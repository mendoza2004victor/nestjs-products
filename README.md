# NestJS Products API

## Descripción
Este proyecto es una **API REST completa para la gestión de productos**, desarrollada con **NestJS** y **TypeORM**, conectada a una base de datos **PostgreSQL** mediante **Docker**.  
La API permite realizar operaciones CRUD sobre productos y cuenta con funcionalidades avanzadas como validación de datos, reglas de negocio, búsqueda avanzada, filtrado, ordenamiento y paginación.

---

## Tecnologías utilizadas

- **Backend:** NestJS (Node.js + TypeScript)
- **Base de datos:** PostgreSQL
- **ORM:** TypeORM
- **Validaciones:** class-validator
- **Contenedores:** Docker y Docker Compose
- **Herramienta de administración DB:** Adminer

---

## Requisitos

- Node.js >= 18
- npm >= 9
- Docker y Docker Compose
- Git

---
## Instalar dependencias:

npm install


Levantar los contenedores de PostgreSQL y Adminer:

docker-compose up -d


PostgreSQL: localhost:5432
Usuario: nestuser
Contraseña: nestpass
Base de datos: productsdb

Adminer (para administración DB): http://localhost:8080

Ejecutar la aplicación en modo desarrollo:

npm run start:dev


La API estará disponible en: http://localhost:3000

## Endpoints principales
Método	Endpoint	Descripción
POST	/products	Crear un nuevo producto
GET	/products	Obtener todos los productos
GET	/products/:id	Obtener producto por ID
PATCH	/products/:id	Actualizar un producto
DELETE	/products/:id	Eliminar un producto
POST	/products/search	Búsqueda avanzada con filtros y paginación
Reglas de negocio

Creación: El SKU debe ser único.

Actualización: El stock no puede ser negativo.

Eliminación: No se puede eliminar un producto con stock > 0.

DTOs y validaciones

CreateProductDto → Validación de nombre, descripcion, precio, stock y sku.

UpdateProductDto → Validación de campos opcionales y stock >= 0.

SearchProductsDto → Permite filtros, paginación y ordenamiento.

Las validaciones se aplican automáticamente mediante ValidationPipe global en main.ts.

## Búsqueda avanzada

Ejemplo de petición POST /products/search:

{
  "page": 1,
  "limit": 10,
  "sortBy": "precio",
  "order": "DESC",
  "filters": {
    "nombre": "guitarra"
  }
}


Respuesta:

{
  "data": [ ... productos ... ],
  "currentPage": 1,
  "totalPages": 10,
  "totalItems": 100
}

## Consideraciones finales

La base de datos se levanta mediante Docker, asegurando portabilidad y facilidad de despliegue.

synchronize: true en TypeORM solo se recomienda para desarrollo.

Se recomienda usar Adminer o pgAdmin para inspeccionar la base de datos.

Este proyecto sirve como backend listo para integrarse con cualquier frontend.

Autor

Víctor Mendoza - Proyecto Tarea Universidad - DWEB
## Instalación y configuración

1. Clonar el repositorio:

```bash
git clone https://github.com/mendoza2004victor/nestjs-products.git
cd nestjs-products

