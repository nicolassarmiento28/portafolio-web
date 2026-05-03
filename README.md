# Portafolio Web — Nicolas Sarmiento

Portafolio web desarrollado con React y Vite para presentar proyectos frontend y fullstack mediante una interfaz moderna, responsive y enfocada en experiencia de usuario. La aplicación incluye visualización dinámica de proyectos, navegación optimizada y acceso directo a demos y repositorios de GitHub.

Implementé una arquitectura SPA con componentes reutilizables, diseño responsive y renderizado dinámico para organizar y destacar aplicaciones desarrolladas con tecnologías como React, TypeScript.

- **Demo en vivo:** https://portafolio-webnsj.vercel.app/
- **Repositorio:** https://github.com/nicolassarmiento28/portafolio-web

---

## Tabla de contenidos

1. [Características](#características)
2. [Stack técnico](#stack-técnico)
3. [Proyectos incluidos](#proyectos-incluidos)
4. [Instalación y uso local](#instalación-y-uso-local)
5. [Variables de entorno](#variables-de-entorno)
6. [Scripts](#scripts)
7. [Estructura del proyecto](#estructura-del-proyecto)
8. [Personalización de contenido](#personalización-de-contenido)
9. [Despliegue](#despliegue)
10. [Licencia](#licencia)

---

## Características

- SPA con navegación suave por secciones (scroll spy)
- Modo oscuro y modo claro persistente (`localStorage`)
- Animaciones de entrada con Framer Motion (`whileInView`)
- Sección de proyectos con modal de detalle + galería de imágenes
- Sección de habilidades organizadas por categoría con nivel de dominio
- Formulario de contacto integrado con EmailJS
- Diseño responsive: móvil, tablet y desktop
- Tematización Cyber Neon con CSS custom properties

## Stack técnico

### Frontend
| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | UI y composición de componentes |
| TypeScript | — | Tipado estricto |
| Vite | — | Build tool y dev server |
| Ant Design | — | Componentes UI base |
| Framer Motion | — | Animaciones declarativas |
| Tailwind CSS | — | Utilidades de estilos |
| EmailJS | — | Envío de formulario de contacto |
| React Hook Form | — | Gestión del formulario |
| React Icons | — | Iconografía |

### Habilidades mostradas en el portfolio
- **Frontend:** React (90%), JavaScript (90%), HTML5 (95%), TypeScript (85%), Vite (80%)
- **Backend:** Node.js (70%), SQL (70%)

## Proyectos incluidos

| # | Proyecto | Demo | Repositorio |
|---|---|---|---|
| 1 | Dashboard Comparativo WWE vs AEW | [Ver demo](https://dashboard-comparativo-wwe-aew.vercel.app/) | [GitHub](https://github.com/nicolassarmiento28/dashboard-comparativo-wwe-aew) |
| 2 | E-Commerce (Carrito de compras) | [Ver demo](https://carrito-compras-react-nsj.netlify.app) | [GitHub](https://github.com/nicolassarmiento28/carritodecompras-react) |
| 3 | Buscador de Películas | [Ver demo](https://app-buscador-peliculas-react-nsj.netlify.app) | [GitHub](https://github.com/nicolassarmiento28/buscador-peliculas-react) |
| 4 | Gestor de Colección de Videojuegos | [Ver demo](https://vg-collection-eight.vercel.app/) | [GitHub](https://github.com/nicolassarmiento28/vg-collection) |
| 5 | Lista de Tareas (React + TypeScript) | [Ver demo](https://lista-tareas-react-tsx-ns.netlify.app) | [GitHub](https://github.com/nicolassarmiento28/lista-tareas-react-tsx) |
| 6 | Space Runner (Juego web) | [Ver demo](https://space-runner-theta.vercel.app/) | [GitHub](https://github.com/nicolassarmiento28/space-runner) |

## Instalación y uso local

### Requisitos

- Node.js 20 o superior
- npm

### Pasos

```bash
git clone https://github.com/nicolassarmiento28/portafolio-web.git
cd portafolio-web
npm install
npm run dev
```

La app se ejecuta en `http://localhost:5173`.

## Variables de entorno

1. Copia `.env.example` como `.env`:

```bash
cp .env.example .env
```

2. Completa los valores de EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

## Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # vista previa del build
npm run lint     # lint del proyecto
```

## Estructura del proyecto

```text
portfolio/
├── public/
│   ├── profile.jpg
│   ├── cv/
│   └── projects/          # imágenes de cada proyecto
│       ├── project1/
│       ├── project2/
│       └── ...
├── src/
│   ├── components/
│   │   ├── common/        # ThemeToggle, SocialLinks
│   │   ├── layout/        # Header, Footer
│   │   ├── project/       # ProjectCard, ProjectModal
│   │   └── sections/      # Hero, Projects, Skills, About, Contact
│   ├── context/           # ThemeContext
│   ├── data/
│   │   ├── personal.json
│   │   ├── projects.json
│   │   └── skills.json
│   ├── hooks/             # useScrollSpy
│   ├── styles/            # global.css y temas
│   ├── types/             # interfaces TypeScript
│   └── utils/             # animaciones Framer Motion
├── .env.example
├── package.json
└── README.md
```

## Personalización de contenido

| Archivo | Qué contiene |
|---|---|
| `src/data/personal.json` | Nombre, bio, redes sociales, links de CV |
| `src/data/projects.json` | Proyectos, descripciones, links, imágenes |
| `src/data/skills.json` | Habilidades por categoría y nivel |
| `public/profile.jpg` | Foto de perfil |
| `public/cv/` | Archivos de CV descargables |
| `src/styles/global.css` | Variables de color para ambos temas |

## Despliegue

### Vercel (recomendado)

1. Importa el repositorio en [vercel.com](https://vercel.com).
2. Configura las variables de entorno de EmailJS en el panel de Vercel.
3. Vercel detecta Vite automáticamente — deploy listo.

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Agrega las variables de entorno en el panel de Netlify.

---

## Licencia

MIT

## Autor

Nicolas Sarmiento · [portafolio-webnsj.vercel.app](https://portafolio-webnsj.vercel.app/)
