# 📦 TrackLogix — Frontend

Sistema de gestión y rastreo de paquetes construido con React y Vite. Permite a administradores registrar y gestionar envíos, y a clientes rastrear sus paquetes públicamente en tiempo real.

---

## 🚀 Demo

> **Aplicación desplegada:** [https://actividad-guia-6.vercel.app](https://actividad-guia-6.vercel.app)

---

## 📋 Descripción del Proyecto

TrackLogix es una aplicación frontend desarrollada como parte de un proyecto de Ingeniería Web. Cuenta con dos vistas principales:

- **Panel de Administración** — permite registrar paquetes, consultar la lista de envíos, cambiar estados y visualizar la ubicación de repartidores en un mapa interactivo.
- **Página pública de rastreo** — permite a cualquier cliente ingresar un número de guía y obtener el estado actual de su paquete, junto con una línea de tiempo visual y un mapa de ubicación.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| [React 18](https://react.dev/) | Librería principal de UI |
| [Vite](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| [React Router DOM](https://reactrouter.com/) | Enrutamiento entre páginas |
| [React Leaflet](https://react-leaflet.js.org/) | Mapas interactivos |
| [Leaflet](https://leafletjs.com/) | Motor de mapas (OpenStreetMap) |
| [Axios](https://axios-http.com/) | Cliente HTTP (preparado para integración con API) |

---

## 📁 Estructura del Proyecto

```
frontend/
└── src/
    ├── components/
    │   ├── Badge.jsx           # Indicador visual de estado del paquete
    │   ├── PaqueteForm.jsx     # Formulario de registro de paquetes
    │   ├── PaquetesTable.jsx   # Tabla con buscador y cambio de estado
    │   └── MapaRepartidores.jsx # Mapa con marcadores de repartidores
    ├── pages/
    │   ├── AdminDashboard.jsx  # Panel de administración completo
    │   └── PaginaRastreo.jsx   # Página pública de rastreo
    ├── data/
    │   └── mockData.js         # Datos de prueba centralizados
    ├── App.jsx                 # Enrutador principal y estado global
    ├── main.jsx                # Punto de entrada de la aplicación
    └── index.css               # Estilos globales
```

---

## ⚙️ Instalación y ejecución local

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [Git](https://git-scm.com/)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/DiegoMedix/Actividad-Guia-6.git
cd Actividad-Guia-6

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🧩 Componentes principales

### `PaqueteForm.jsx`
Formulario con los campos: remitente, destinatario, ruta, peso, dimensiones y estado inicial. Incluye validación de campos vacíos con mensajes de error y confirmación visual al guardar.

### `PaquetesTable.jsx`
Tabla que muestra todos los paquetes registrados con columnas: N° Guía, Remitente, Destinatario, Ruta, Estado, Fecha y Acciones. Incluye buscador en tiempo real y selector de estado por fila.

### `MapaRepartidores.jsx`
Mapa interactivo con Leaflet que muestra la ubicación de los repartidores activos. Al hacer clic en un marcador se despliega un popup con nombre, cantidad de paquetes y estado.

### `Badge.jsx`
Componente reutilizable que renderiza una etiqueta de color según el estado del paquete:

| Estado | Color |
|---|---|
| En bodega | Gris |
| En ruta | Azul |
| En reparto | Ámbar |
| Entregado | Verde |
| Incidente | Rojo |

### `PaginaRastreo.jsx`
Vista pública con un campo de búsqueda por número de guía. Al encontrar el paquete muestra:
- Información detallada del envío
- Línea de tiempo visual del estado
- Mapa con la última ubicación reportada

---

## 📊 Datos de prueba (Mock Data)

El archivo `src/data/mockData.js` contiene:

```js
// Paquetes de ejemplo
INITIAL_PACKAGES — 3 paquetes con rutas entre ciudades colombianas

// Repartidores activos
MOCK_REPARTIDORES — 4 repartidores con coordenadas reales en Colombia

// Estados disponibles
ESTADOS — ["En bodega", "En ruta", "En reparto", "Entregado", "Incidente"]
```

Números de guía de prueba para rastrear:
- `TLX-2024-001` — En ruta (Bogotá → Medellín)
- `TLX-2024-002` — Entregado (Bogotá → Cali)
- `TLX-2024-003` — En bodega (Bogotá → Barranquilla)

---

## 🌐 Despliegue

El proyecto está desplegado en **Vercel** con la siguiente configuración:

| Campo | Valor |
|---|---|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Root Directory | `/` |

Cada push a la rama `main` genera un nuevo despliegue automático.

---

## 📌 Funcionalidades implementadas

- [x] Formulario de registro de paquetes con validación
- [x] Tabla de paquetes con buscador en tiempo real
- [x] Cambio de estado de paquetes desde la tabla
- [x] Tarjetas de estadísticas dinámicas (total, en ruta, entregados, incidentes)
- [x] Mapa interactivo con repartidores y popups
- [x] Búsqueda pública por número de guía
- [x] Línea de tiempo visual del estado del paquete
- [x] Mapa individual con última ubicación del paquete
- [x] Paquetes registrados en Admin rastreables inmediatamente en la vista pública
- [x] Diseño responsivo con tema oscuro

---

## 👤 Autor

**Diego Medina**  
Estudiante de Ingeniería de Sistemas  
Bogotá, Colombia
