Control de Vehículos – API REST (NestJS + PostgreSQL)
Trabajo Práctico Integrador – Segunda Etapa
Alumno: Tomás Pacheco

TECNOLOGÍAS UTILIZADAS
Lenguaje: JavaScript / TypeScript
Framework backend: NestJS
ORM: Prisma ORM
Base de datos: PostgreSQL
Autenticación: JWT (Json Web Token)
Tests unitarios: Jest (integrado en NestJS)

DESPLIEGUE EN UN SERVIDOR

Requerimientos previos:

Node.js v18 o superior

PostgreSQL corriendo localmente o en el servidor (puede ser Docker o RDS)

Un archivo .env configurado con la conexión a la base de datos y el secreto JWT

Ejemplo de archivo .env:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/control_vehiculos?schema=public"
JWT_SECRET="supersecreto"

PASOS PARA EL DESPLIEGUE

Clonar el repositorio:
git clone https://github.com/tomaspacheco/control-vehiculos.git

cd control-vehiculos

Instalar dependencias:
npm install

Crear la base de datos y generar las tablas:
npx prisma migrate deploy

Ejecutar el servidor en modo producción:
npm run build
npm run start

O mantenerlo corriendo con PM2:
pm2 start dist/main.js

La API quedará disponible en http://localhost:3000

ENDPOINTS PRINCIPALES

Autenticación / Usuarios

POST /usuarios – crear usuario con rol

POST /auth/login – autenticación y generación de token

Vehículos

POST /vehiculos – crear vehículo

GET /vehiculos – listar vehículos

Turnos

POST /turnos – solicitar turno por matrícula


Inspecciones

POST /inspecciones – registrar inspección (rol INSPECTOR)

Reglas de negocio:

8 ítems de chequeo (1–10)

Total >= 80 y ningún ítem < 5 → APTO

De lo contrario → NO_APTO

TESTS UNITARIOS

Herramienta: Jest (integrado con NestJS)

Test implementado:
src/inspecciones/inspecciones.service.spec.ts

Ejecución:
npm run test -- src/inspecciones/inspecciones.service.spec.ts

El test comprueba:

Cuando los 8 puntajes son 10 → resultado APTO

Cuando alguno es menor a 5 → resultado NO_APTO

Tipos de test planificados:

Unit Test: reglas de negocio (implementado)

Integration Test: endpoints /turnos y /inspecciones

E2E Test: flujo completo dueño–inspector

Smoke Test: endpoints básicos en cada build

Regression Test: validar que cambios no rompan lógica previa

CONSIDERACIONES FINALES

Se cumple el modelo cliente-servidor con API desacoplada.

Se utiliza inyección de dependencias entre módulos y servicios.

La persistencia se implementa con PostgreSQL (relacional) para manejar relaciones entre usuarios, vehículos, turnos e inspecciones.

La autenticación y autorización se manejan mediante JWT y guardas de rol.

El sistema cumple los 8 requerimientos funcionales:

Solicitud de turno por matrícula

Confirmación de turno

Chequeo por usuario con rol inspector

Puntuación de 1–10 por ítem

Evaluación final según reglas de negocio

Registro de observaciones

Control de rechequeos

Ocho ítems fijos de evaluación
