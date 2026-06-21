# Legado - Guía para Agentes de IA 🤖

Bienvenido a **Legado**, una plataforma premium de preservación de memoria digital y conocimiento humano. Este documento sirve como punto de partida y mapa de ruta para que cualquier agente de IA comprenda rápidamente la arquitectura, estructura de código y reglas de desarrollo del proyecto.

---

## 🏗️ 1. Arquitectura y Stack Tecnológico

El proyecto está estructurado principalmente como una aplicación **React + Vite** de una sola página (SPA), con un servidor backend en **Express** (`server.ts`) que también actúa como proxy seguro para las llamadas a la API de Gemini.

### Stack Principal:
* **Frontend**: React 19, Vite 6, TypeScript, TailwindCSS 4, Lucide React (iconos).
* **Backend**: Express 4, TypeScript via `tsx` en desarrollo, `esbuild` para compilar a producción.
* **Integración de IA**: SDK oficial de Gemini (`@google/genai`).

---

## 📂 2. Estructura de Directorios

El núcleo del código activo reside en la raíz y en la carpeta `src/`. También existe una carpeta `apps/` (que contiene `apps/web` y `apps/api`), pero la aplicación principal en desarrollo se sirve desde la raíz utilizando:
* `index.html` (Apunta a `/src/main.tsx`)
* `/src/` (Componentes, datos, estilos y tipos de React)
* `server.ts` (Servidor backend Express + Proxy de IA)

```
legado/
├── src/                    # Código fuente del Frontend React
│   ├── components/         # Componentes modulares de la interfaz
│   │   ├── LandingPage.tsx        # Página de inicio
│   │   ├── SignIn.tsx             # Inicio de sesión
│   │   ├── RegisterIdentity.tsx   # Registro de identidad suiza / criptográfica
│   │   ├── DashboardOverview.tsx  # Vista inicial del panel de control
│   │   ├── HumanVault.tsx         # Bóveda de archivos y memorias
│   │   ├── InterviewStudio.tsx    # Estudio de grabación y entrevistas IA
│   │   ├── StoryBuilder.tsx       # Creador y diagramador de libros/historias
│   │   ├── LegacyAI.tsx           # Configuración e interacción con acompañantes de IA
│   │   └── Marketplace.tsx        # Contratación de curadores y plantillas
│   ├── App.tsx             # Componente raíz y control de flujo / vistas
│   ├── data.ts             # Datos iniciales y mocks para demostración
│   ├── types.ts            # Tipos de TypeScript compartidos
│   └── index.css           # Estilos base
├── index.html              # Entrada HTML principal de Vite
├── server.ts               # Servidor Express & Proxy API de Gemini
├── package.json            # Scripts de ejecución y dependencias
└── DESIGN.md               # Guía del sistema de diseño visual (Colores, fuentes)
```

---

## 🔧 3. Servidor y Proxy de IA (`server.ts`)

Para evitar exponer variables de entorno en el frontend y gestionar la seguridad, la aplicación utiliza `server.ts` como puente:

1. **Proxy `/api/gemini/chat`**: Recibe mensajes del chat, el historial conversacional y un objeto de `persona` (personalidad, instrucciones del sistema y *memory anchors*). Realiza la llamada a `@google/genai` aplicando las directrices de voz del familiar o especialista de legado.
2. **Servidor Estático**: En producción, sirve los archivos compilados de Vite desde la carpeta `dist`.
3. **Servidor de Desarrollo**: Utiliza `vite` mediante `createViteServer` como middleware para HMR (Hot Module Replacement) rápido en desarrollo.

---

## 🎨 4. Reglas del Sistema de Diseño (`DESIGN.md`)

Cuando realices modificaciones visuales en los componentes de la interfaz, asegúrate de adherirte estrictamente a la visión estética sofisticada y humana de **Legado**:
* **Color Primario (Azul Profundo)**: `#0A192F` o `#1E293B` para fondos y textos principales.
* **Acento (Dorado Sutil)**: `#D4AF37` o `#F59E0B` (Heritage Gold) usado con moderación para destacar.
* **Fondo**: `#FAFAFA` o `#FDFBF7` para evocar la textura de papel premium de alta calidad.
* **Tipografía**: Fuentes sans-serif limpias (Inter/SF Pro) para interfaz, combinadas con serif sofisticadas para encabezados de historias.
* **Animaciones**: Utiliza transiciones y micro-interacciones suaves (`motion` o transiciones nativas CSS) para que la interfaz se sienta "viva".

---

## 💾 5. Modelos de Datos Clave (`src/types.ts`)

Familiarízate con las siguientes interfaces cuando manejes estados globales en `App.tsx`:
* `VaultItem`: Archivos, audios o carpetas almacenados en la Bóveda Humana.
* `LegacyProject`: Proyectos de legado activos o completados del usuario.
* `AIPersona`: Configuración del clon o asistente de IA (Nombre, tono, instrucciones, *memory anchors*).
* `StoryDraft`: Borradores de historias y secciones generadas o editadas en el Story Builder.

---

## 🛠️ 6. Scripts de Desarrollo y Comandos

Asegúrate de ejecutar los comandos desde el directorio raíz utilizando tu terminal:

* **Iniciar Entorno de Desarrollo (Frontend + API)**:
  ```powershell
  npm run dev
  ```
  *(Corre `server.ts` con `tsx`, escuchando en el puerto `3000`)*

* **Compilar la Aplicación para Producción**:
  ```powershell
  npm run build
  ```

* **Validar Tipos de TypeScript**:
  ```powershell
  npm run lint
  ```

---

## 🎯 7. Lineamientos para Agentes

1. **Mantener Comentarios**: No elimines comentarios o docstrings existentes a menos que sea explícitamente solicitado.
2. **Modularidad**: Si vas a expandir alguna suite o flujo, edita el componente correspondiente en `src/components/` en lugar de inflar `App.tsx`.
3. **Manejo de Estados**: `App.tsx` contiene los estados simulados de los proyectos, actividades y bóveda. Si necesitas sincronizar datos entre suites, utiliza los callbacks y setters provistos o pásalos como props.
