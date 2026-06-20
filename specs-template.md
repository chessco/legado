# [Nombre del Proyecto]

## Descripción breve

[Descripción en un párrafo de lo que es la plataforma, qué hace, para quién es y cuál es su principal propuesta de valor. Ejemplo: "Plataforma SaaS que permite a [público] realizar [acción principal] para obtener [beneficio principal]"].

---

# 🎯 1. Objetivos del Proyecto

## Problema a Resolver

[Descripción detallada del problema que intenta solucionar este proyecto. Por qué existe esta necesidad en el mercado y cuáles son las consecuencias de no resolverlo].

* [Consecuencia 1]
* [Consecuencia 2]
* [Consecuencia 3]

## Público Objetivo

### Primario
* [Perfil de usuario 1]
* [Perfil de usuario 2]

### Secundario
* [Perfil de usuario 3]
* [Perfil de usuario 4]

## Métricas de Éxito (KPIs)

### Producto
* [Ej: Usuarios activos mensuales (MAU)]
* [Ej: Tasa de retención]

### Negocio
* [Ej: MRR (Monthly Recurring Revenue)]
* [Ej: Costo de Adquisición de Clientes (CAC)]

## Modelo de Negocio y Accesos

* **Monetización**: [Ej: Esquema de suscripción mensual, pago por uso, Freemium, basado en Suites].
* **Módulos / Suites**: [Describir si la aplicación se divide en módulos o niveles de acceso].
* **Autorización**: [Describir el modelo de acceso, ej: RBAC (Role-Based Access Control), ABAC].

---

# 🏗️ 2. Arquitectura y Stack Tecnológico

## Frontend (Directorio `web/` o `client/`)
* **Framework**: [Ej: React, Vue, Angular]
* **Build Tool**: [Ej: Vite, Webpack]
* **Estilos**: [Ej: TailwindCSS, SCSS]
* **Librerías Clave**: [Ej: React Query, Zod]

## Backend (Directorio `api/` o `server/`)
* **Framework**: [Ej: NestJS, Express, FastAPI]
* **Lenguaje**: [Ej: TypeScript, Python, Go]
* **ORM/Query Builder**: [Ej: Prisma, TypeORM, Drizzle]

## Base de Datos
* **Relacional/NoSQL**: [Ej: PostgreSQL, MongoDB]
* **Casos de Uso Específicos**: [Ej: PGVector para embeddings, Redis para caché]

## Infraestructura y Servicios Externos
* **Object Storage**: [Ej: AWS S3, MinIO]
* **Despliegue**: [Ej: Docker, Vercel, AWS EC2, Hetzner]
* **IA/Terceros**: [Ej: OpenAI API, Stripe]

---

# ✨ 3. Características Principales (MVP)

Enumera las funcionalidades core que deben estar en la primera versión usable del producto.

## [Nombre de la Característica 1]
[Descripción de lo que hace y su valor].
* [Sub-función A]
* [Sub-función B]

## [Nombre de la Característica 2]
[Descripción de lo que hace y su valor].
* [Sub-función C]
* [Sub-función D]

---

# 👥 4. Historias de Usuario

Formato recomendado: *Como [tipo de usuario], quiero [acción] para [beneficio/razón].*

* **[Tipo de Usuario 1]**: Como [usuario], quiero [acción] para [beneficio].
* **[Tipo de Usuario 2]**: Como [administrador], quiero [acción] para [beneficio].

---

# 📡 5. Especificaciones de API

Define los endpoints principales que necesitará la aplicación.

## [Dominio / Recurso]

### `GET /api/v1/[recurso]`
* **Descripción**: Lista todos los [recursos].
* **Roles permitidos**: [Ej: Admin, User]

### `POST /api/v1/[recurso]`
* **Descripción**: Crea un nuevo [recurso].
* **Body**: `[Payload esperado]`

---

# 💾 6. Modelado de Datos (Esquema Inicial)

Define las tablas o colecciones clave del sistema.

## [Entidad Principal] (Ej: User)
```sql
id UUID PK
name VARCHAR(255)
email VARCHAR(255) UNIQUE
role_id UUID FK
created_at TIMESTAMP
```

## [Entidad Secundaria] (Ej: Project / Order / Item)
```sql
id UUID PK
user_id UUID FK
status VARCHAR(50)
created_at TIMESTAMP
```

---

# 🗺️ 7. Fases de Desarrollo

## Fase 1 — MVP ([Duración estimada])
* **Objetivo**: [Qué se espera lograr].
* **Entregables**: [Lista de funcionalidades clave].

## Fase 2 — [Nombre de la Fase] ([Duración estimada])
* **Objetivo**: [Qué se espera lograr].
* **Entregables**: [Nuevas funcionalidades].

---

# 🛠️ 8. Configuración del Entorno Local

Instrucciones paso a paso para que un desarrollador nuevo levante el proyecto.

```bash
# 1. Clonar repositorio
git clone [url-del-repositorio]

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env

# 4. Levantar base de datos e infraestructura local
docker compose up -d

# 5. Ejecutar aplicación
npm run dev
```

---

# 📝 9. Reglas de Negocio y Convenciones

## Reglas de Negocio Core
* [Ej: Un usuario no puede tener más de 3 proyectos en la versión Free].
* [Ej: Los archivos subidos no deben superar los 50MB].

## Convenciones Técnicas
* **Arquitectura**: [Ej: Clean Architecture, Modular Monolith].
* **Estándares de Código**: [Ej: ESLint, Prettier, Conventional Commits].
* **Respuestas de API**: [Formato estándar de respuestas, ej: `{ success: true, data: {} }`].

---

# 🚀 10. Visión a Largo Plazo

[Hacia dónde va el proyecto en 1, 3 o 5 años. Cuál es el objetivo final una vez que el MVP y las fases iniciales estén completas].
