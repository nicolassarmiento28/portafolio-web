# Portafolio Web

Portafolio personal moderno con estilo Cyber Neon. El proyecto esta construido con React, TypeScript, Vite, Ant Design y Framer Motion.

## Demo

- Demo en vivo: https://portafolio-webnsj.vercel.app/
- Repositorio: https://github.com/nicolassarmiento28/portafolio-web

## Caracteristicas

- SPA con navegacion por secciones
- Modo oscuro y claro
- Animaciones fluidas con Framer Motion
- Seccion de proyectos con modal de detalle
- Seccion de habilidades por categorias
- Formulario de contacto integrado con EmailJS
- Diseno responsive para movil, tablet y desktop

## Stack

- React 19
- TypeScript
- Vite
- Ant Design
- Framer Motion
- EmailJS
- React Hook Form
- React Icons

## Requisitos

- Node.js 20 o superior (recomendado)
- npm

## Instalacion y uso local

```bash
git clone https://github.com/nicolassarmiento28/portafolio-web.git
cd portafolio-web
npm install
npm run dev
```

La app se ejecuta por defecto en http://localhost:5173

## Variables de entorno

1. Crea una copia de `.env.example` como `.env`.
2. Completa estos valores:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

## Scripts

```bash
npm run dev      # entorno de desarrollo
npm run build    # build de produccion
npm run preview  # vista previa del build
npm run lint     # lint del proyecto
```

## Personalizacion de contenido

- Datos personales: `src/data/personal.json`
- Proyectos: `src/data/projects.json`
- Habilidades: `src/data/skills.json`
- Foto de perfil: `public/profile.jpg`
- CV: `public/cv/`

## Despliegue

Puedes desplegar facilmente en Vercel o Netlify.

Pasos generales:

1. Sube cambios a la rama principal en GitHub.
2. Importa el repositorio en tu plataforma de despliegue.
3. Agrega las variables de entorno de EmailJS.
4. Ejecuta deploy.

## Estructura principal

```text
portfolio/
  public/
  src/
    components/
    context/
    data/
    hooks/
    styles/
    types/
    utils/
  .env.example
  package.json
  README.md
```

## Licencia

MIT

## Autor

Nicolas Sarmiento
