# Legado

## Descripción breve

Legado es una plataforma SaaS que permite a personas, familias, profesionales y organizaciones capturar, preservar, estructurar y monetizar conocimiento humano.

A través de entrevistas guiadas, documentos, fotografías, audios y videos, los usuarios construyen una Human Vault™ (Bóveda de Conocimiento Personal) que posteriormente puede transformarse en libros, biografías, memorias, cursos, bibliotecas digitales y agentes inteligentes entrenados con conocimiento real.

---

# 🎯 1. Objetivos del Proyecto

## Problema a Resolver

Millones de personas acumulan durante décadas experiencias, historias, metodologías y conocimiento especializado que nunca documentan adecuadamente.

Como consecuencia:

* Historias familiares se pierden.
* Conocimiento empresarial desaparece.
* Expertos nunca transfieren su experiencia.
* El conocimiento permanece atrapado en la memoria de las personas.

Legado busca preservar ese conocimiento y convertirlo en activos digitales reutilizables.

---

## Público Objetivo

### Primario

* Personas interesadas en documentar su historia de vida.
* Familias que desean preservar recuerdos y genealogía.
* Empresarios y fundadores.
* Profesionales con experiencia acumulada.

### Secundario

* Historiadores.
* Genealogistas.
* Editores.
* Escritores.
* Consultores.
* Educadores.

### Futuro

* Organizaciones.
* Universidades.
* Instituciones culturales.
* Empresas interesadas en transferencia de conocimiento.

---

## Métricas de Éxito

### Producto

* Usuarios registrados.
* Legados creados.
* Horas de entrevistas capturadas.
* Documentos almacenados.
* Libros generados.

### Marketplace

* Curadores activos.
* Proyectos contratados.
* Transacciones realizadas.
* Agentes IA publicados.

### Negocio

* MRR.
* Conversión Free → Pro.
* Retención mensual.
* CAC / LTV.

---

## Modelo de Negocio y Accesos

* **Esquema de Suites**: La plataforma se monetiza mediante un esquema basado en suites modulares. Los clientes pagan únicamente por las suites y funcionalidades que necesitan.
* **Módulos Específicos**: Las funcionalidades están agrupadas en módulos que pueden ser activados o desactivados según la suite contratada.
* **RBAC (Role-Based Access Control)**: Sistema granular de permisos donde los módulos funcionales pueden ser asignados a usuarios específicos dependiendo de su rol dentro de la plataforma o del proyecto.

---

# 🏗️ 2. Arquitectura y Stack Tecnológico

## Frontend (Directorio `web/`)

* React
* Vite
* TypeScript
* TailwindCSS
* ShadCN UI
* React Query
* React Hook Form
* Zod
* PWA

## Backend (Directorio `api/`)

* NestJS
* TypeScript
* Prisma ORM

## Base de Datos

### PostgreSQL

Datos transaccionales:

* Usuarios
* Proyectos
* Libros
* Entrevistas
* Marketplace

### PGVector

* Embeddings
* Memorias
* Búsqueda semántica
* RAG

## Object Storage

### MinIO

Almacenamiento de:

* Fotos
* Videos
* Audios
* PDFs
* Libros exportados
* Archivos históricos

## Cache

* Redis

## IA

* OpenAI GPT
* OpenAI Embeddings
* Whisper
* LangGraph
* LangChain

## Infraestructura

* Docker
* Docker Compose
* Hetzner
* Cloudflare

---

# ✨ 3. Características Principales (MVP)

## Human Vault™

Bóveda personal de conocimiento.

Permite almacenar:

* Fotos
* Videos
* Audios
* Documentos
* Recuerdos
* Historias

---

## Interview Studio

Sistema de entrevistas guiadas por IA.

Capaz de:

* Hacer preguntas contextualizadas.
* Capturar respuestas.
* Transcribir audios.
* Extraer conocimiento.

---

## Story Builder

Editor visual para organizar:

* Libros
* Capítulos
* Historias
* Eventos
* Personas

---

## Knowledge Graph

Relaciona automáticamente:

* Personas
* Eventos
* Lugares
* Aprendizajes

---

## Publishing Hub

Exportación a:

* PDF
* EPUB

---

## Legacy AI (Beta)

Generación de asistentes entrenados con el conocimiento del usuario.

---

# 👥 4. Historias de Usuario

## Usuario Personal

Como usuario, quiero registrar recuerdos y experiencias para preservarlos digitalmente.

---

## Usuario Familiar

Como usuario, quiero almacenar fotografías, documentos y relatos familiares para compartirlos con futuras generaciones.

---

## Empresario

Como empresario, quiero documentar mi experiencia y metodología para transmitirla a mis colaboradores.

---

## Curador

Como curador, quiero revisar y organizar contenido para ayudar a los usuarios a construir un legado coherente.

---

## Consumidor de Conocimiento

Como usuario, quiero acceder a contenido especializado creado por expertos para aprender de su experiencia.

---

# 📡 5. Especificaciones de API

## Authentication

### POST /api/v1/auth/register

Registrar usuario.

### POST /api/v1/auth/login

Iniciar sesión.

### POST /api/v1/auth/refresh

Renovar token.

---

## Projects

### GET /api/v1/projects

Lista proyectos del usuario.

### POST /api/v1/projects

Crear proyecto.

### GET /api/v1/projects/:id

Detalle de proyecto.

### PUT /api/v1/projects/:id

Actualizar proyecto.

---

## Interviews

### POST /api/v1/interviews

Crear entrevista.

### GET /api/v1/interviews/:id

Consultar entrevista.

### POST /api/v1/interviews/:id/transcribe

Procesar audio.

---

## Human Vault

### POST /api/v1/files/upload

Subir archivo.

### GET /api/v1/files

Listar archivos.

---

## Books

### POST /api/v1/books

Crear libro.

### GET /api/v1/books/:id

Consultar libro.

### POST /api/v1/books/:id/export

Exportar PDF/EPUB.

---

# 💾 6. Modelado de Datos

## User

```sql
id UUID PK
name VARCHAR(255)
email VARCHAR(255) UNIQUE
password_hash TEXT
role_id UUID FK -- Para RBAC
created_at TIMESTAMP
```

## Role & Permission (RBAC)

```sql
-- Role
id UUID PK
name VARCHAR(50) UNIQUE
description TEXT

-- Permission
id UUID PK
name VARCHAR(50) UNIQUE
module_id UUID FK

-- RolePermission
role_id UUID FK
permission_id UUID FK
```

## Suite & Module

```sql
-- Suite (ej. Basic, Pro, Enterprise, Legacy AI)
id UUID PK
name VARCHAR(100)
price DECIMAL

-- Module (Funcionalidades específicas asignables)
id UUID PK
suite_id UUID FK
name VARCHAR(100)
description TEXT
```

## Project

```sql
id UUID PK
user_id UUID FK
title VARCHAR(255)
description TEXT
status VARCHAR(50)
created_at TIMESTAMP
```

## Interview

```sql
id UUID PK
project_id UUID FK
title VARCHAR(255)
transcript TEXT
audio_url TEXT
created_at TIMESTAMP
```

## Memory

```sql
id UUID PK
project_id UUID FK
content TEXT
embedding VECTOR
metadata JSONB
```

## Book

```sql
id UUID PK
project_id UUID FK
title VARCHAR(255)
status VARCHAR(50)
created_at TIMESTAMP
```

## Asset

```sql
id UUID PK
project_id UUID FK
type VARCHAR(50)
file_url TEXT
metadata JSONB
```

---

# 🗺️ 7. Fases de Desarrollo

## Fase 1 — MVP (8 semanas)

Objetivo:

Capturar conocimiento y generar libros básicos.

Incluye:

* Autenticación
* Human Vault
* Interview Studio
* Story Builder
* Exportación PDF
* PostgreSQL
* MinIO

---

## Fase 2 — Knowledge Platform (6 semanas)

Incluye:

* Embeddings
* PGVector
* Búsqueda semántica
* Timeline
* Knowledge Graph

---

## Fase 3 — Curator Marketplace (6 semanas)

Incluye:

* Perfiles de curadores
* Contratación
* Reseñas
* Gestión de proyectos

---

## Fase 4 — Legacy AI (8 semanas)

Incluye:

* Agentes personalizados
* Chat contextual
* Memoria persistente
* Marketplace de agentes

---

# 🛠️ 8. Configuración del Entorno Local

```bash
# Clonar repositorio

git clone https://github.com/pitayacode/legado.git

cd legado

# Variables de entorno

cp .env.example .env

# Levantar infraestructura

docker compose up -d

# Instalar dependencias

npm install

# Ejecutar migraciones

npx prisma migrate dev

# Ejecutar aplicación

npm run dev
```

---

# 📝 9. Reglas de Negocio y Convenciones

## Reglas de Negocio

* Un proyecto pertenece a un único usuario.
* Un usuario puede tener múltiples proyectos.
* Los archivos se almacenan exclusivamente en MinIO.
* Todo archivo subido genera metadatos asociados.
* Las entrevistas pueden convertirse en memorias indexables.
* Los embeddings deben regenerarse cuando cambie el contenido.
* Solo usuarios Pro podrán exportar EPUB.
* Solo usuarios Pro podrán crear Legacy AI.
* El acceso a las funcionalidades y módulos está determinado por el esquema RBAC y las Suites contratadas por el cliente.

---

## Convenciones Técnicas

### Backend

* Arquitectura Modular Monolith.
* Domain Driven Design (DDD).
* API First.

### Código

* ESLint.
* Prettier.
* Conventional Commits.

### API

Todas las respuestas deben seguir:

```json
{
  "success": true,
  "data": {},
  "message": "Operation completed"
}
```

### Errores

```json
{
  "success": false,
  "error": {
    "code": "PROJECT_NOT_FOUND",
    "message": "Project not found"
  }
}
```

---

# Visión a Largo Plazo

Legado no es una aplicación para escribir libros.

Legado es una plataforma para preservar, estructurar, transferir y monetizar conocimiento humano.

El libro es solo uno de los formatos de salida.

El verdadero activo es el conocimiento.
