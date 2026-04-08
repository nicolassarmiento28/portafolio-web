# Portafolio Web - Desarrollador Full Stack Junior

Portafolio personal moderno con diseño Cyber Neon, construido con React, TypeScript, Vite y Ant Design.

## Características

- **Diseño Cyber Neon**: Paleta de colores vibrante con gradientes y efectos de neón
- **Modo Oscuro/Claro**: Toggle para cambiar entre temas
- **Single Page Application**: Navegación suave entre secciones
- **Animaciones Fluidas**: Implementadas con Framer Motion
- **Responsive Design**: Optimizado para todos los dispositivos
- **Proyectos Dinámicos**: Grid de 4 proyectos con modals detallados
- **Skills Categorizada**: Frontend, Backend y Aprendiendo
- **Formulario de Contacto**: Integración con Google Forms
- **Performance Optimizada**: Carga rápida y eficiente

## Stack Tecnológico

- **React 18** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Ant Design 5** - Componentes UI
- **Framer Motion** - Animaciones
- **Google Forms** - Formulario de contacto
- **React Icons** - Iconos

## Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Edita el archivo `.env` con tu URL de Google Forms (ver sección de configuración)

## Configuración

### 1. Personalizar Información Personal

Edita `src/data/personal.json`:
```json
{
  "fullName": "Tu Nombre Completo",
  "title": "Desarrollador Full Stack Junior",
  "initials": "TN",
  "bio": "Tu biografía...",
  "email": "tu.email@example.com",
  "location": "Tu Ciudad, País",
  "socialLinks": {
    "github": "https://github.com/tu-usuario",
    "linkedin": "https://linkedin.com/in/tu-usuario",
    "twitter": "https://twitter.com/tu-usuario",
    "email": "tu.email@example.com"
  }
}
```

### 2. Configurar Proyectos

Edita `src/data/projects.json` con tus 4 proyectos.

Coloca las imágenes de tus proyectos en:
```
public/
  └── projects/
      ├── project1/
      │   ├── thumb.jpg
      │   ├── img1.jpg
      │   ├── img2.jpg
      │   └── img3.jpg
      ├── project2/
      └── ...
```

### 3. Configurar Skills

Edita `src/data/skills.json` para ajustar tus niveles de habilidad.

### 4. Configurar Google Forms

1. Crea un formulario en [Google Forms](https://docs.google.com/forms/)
2. Añade los campos: Nombre, Email, Mensaje
3. Personaliza el diseño del formulario
4. Click en "Enviar" > pestaña "<>" (Insertar HTML)
5. Copia la URL del atributo `src` del iframe

6. Añade la URL al archivo `.env`:
```env
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/TU_FORM_ID/viewform?embedded=true
```

### 5. Agregar tu Foto

Coloca tu foto en `public/profile.jpg`

### 6. Agregar tu CV

Coloca tu CV en `public/cv/CV-TuNombre.pdf`

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

## Deployment en Vercel

1. Sube tu repositorio a GitHub

2. Conecta tu repositorio con Vercel:
   - Ve a [Vercel](https://vercel.com/)
   - Importa tu repositorio
   - Configura las variables de entorno en Vercel (Settings > Environment Variables)

3. Deploy automático:
   - Cada push a la rama principal desplegará automáticamente

## Estructura del Proyecto

```
portfolio/
├── public/
│   ├── projects/          # Imágenes de proyectos
│   ├── cv/                # Tu CV en PDF
│   └── profile.jpg        # Tu foto
├── src/
│   ├── components/
│   │   ├── common/        # Componentes reutilizables
│   │   ├── layout/        # Header, Footer
│   │   ├── project/       # Componentes de proyectos
│   │   └── sections/      # Secciones principales
│   ├── context/           # Context API (Theme)
│   ├── data/              # Archivos JSON con datos
│   ├── hooks/             # Custom hooks
│   ├── styles/            # Estilos globales
│   ├── types/             # TypeScript types
│   ├── utils/             # Utilidades (animaciones)
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Personalización de Colores

Los colores Cyber Neon están definidos en `src/styles/global.css`:

```css
:root {
  --accent-primary: #00f5ff;      /* Cyan neón */
  --accent-secondary: #ff006e;    /* Magenta */
  --accent-tertiary: #8338ec;     /* Púrpura */
}
```

## Performance

- Lazy loading de imágenes
- Code splitting automático con Vite
- Animaciones optimizadas con Framer Motion
- Bundle size optimizado

## Soporte de Navegadores

- Chrome (último)
- Firefox (último)
- Safari (último)
- Edge (último)

## Licencia

MIT License - Siéntete libre de usar este proyecto para tu propio portafolio.

## Autor

Tu Nombre - [GitHub](https://github.com/tu-usuario) - [LinkedIn](https://linkedin.com/in/tu-usuario)

---

Hecho con ❤️ usando React, TypeScript y Vite
