<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

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

