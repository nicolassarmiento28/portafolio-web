# INSTRUCCIONES FINALES - PORTAFOLIO

## ¡Tu portafolio está listo! 🎉

El proyecto ha sido creado exitosamente con todas las características solicitadas.

## Próximos Pasos

### 1. Personalizar tu Información

#### a) Editar datos personales
Abre `src/data/personal.json` y reemplaza:
- `fullName`: Tu nombre completo
- `title`: "Desarrollador Full Stack Junior" (ya configurado)
- `initials`: Tus iniciales (ej: "NS" si tu nombre es Nicolás Sarmiento)
- `bio`: Tu biografía extendida
- `email`: Tu email real
- `location`: Tu ciudad y país
- `socialLinks`: Tus perfiles de GitHub, LinkedIn, Twitter

#### b) Editar tus proyectos
Abre `src/data/projects.json` y reemplaza los 4 proyectos de ejemplo con tus propios proyectos:
- Títulos
- Descripciones
- Desafío, Solución, Impacto
- Features
- Tech Stack
- Links (demo, GitHub)
- Tags

#### c) Ajustar Skills
Abre `src/data/skills.json` y ajusta los niveles de habilidad según tu experiencia.

### 2. Agregar tus Imágenes

#### a) Foto de perfil
Coloca tu foto en: `public/profile.jpg`

#### b) Imágenes de proyectos
Para cada proyecto, coloca las imágenes en:
```
public/projects/project1/
  - thumb.jpg (thumbnail principal)
  - img1.jpg (screenshot 1)
  - img2.jpg (screenshot 2)
  - img3.jpg (screenshot 3)

public/projects/project2/
  - thumb.jpg
  - img1.jpg
  - ...
```

#### c) Tu CV
Coloca tu CV en PDF en: `public/cv/CV-TuNombre.pdf`

### 3. Configurar Google Forms (para formulario de contacto)

1. Ve a https://docs.google.com/forms/ y crea un nuevo formulario

2. Configura tu formulario con estos campos:
   - Nombre (respuesta corta)
   - Email (respuesta corta)
   - Mensaje (párrafo)

3. Personaliza el diseño del formulario (tema, colores, etc.)

4. Obtén la URL embebida:
   - Click en el botón "Enviar" (esquina superior derecha)
   - Selecciona la pestaña "<>" (Insertar HTML)
   - Copia la URL del atributo `src` del iframe
   - Ejemplo: `https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true`

5. Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/TU_FORM_ID/viewform?embedded=true
```

**Nota**: Reemplaza `TU_FORM_ID` con tu ID real de Google Forms.

### 4. Ejecutar el Proyecto

```bash
# En la carpeta portfolio/
npm run dev
```

Abre http://localhost:5173 en tu navegador

### 5. Probar el Proyecto

Verifica que todo funcione:
- [ ] Navegación entre secciones
- [ ] Toggle de modo oscuro/claro
- [ ] Click en proyectos abre el modal
- [ ] Animaciones fluidas al hacer scroll
- [ ] Formulario de contacto envía emails (después de configurar EmailJS)
- [ ] Responsive en móvil (F12 > Toggle device toolbar)

### 6. Desplegar en Vercel

1. Sube tu proyecto a GitHub:
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit - Mi portafolio"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

2. Ve a https://vercel.com e inicia sesión

3. Import Repository:
   - Click en "Add New..." > "Project"
   - Importa tu repositorio de GitHub
   - Configura las variables de entorno (Settings > Environment Variables):
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

4. Deploy:
   - Vercel construirá y desplegará automáticamente
   - Recibirás una URL como: https://tu-portfolio.vercel.app

5. Cada push a GitHub desplegará automáticamente

## Estructura de Archivos Importantes

```
portfolio/
├── src/
│   ├── data/
│   │   ├── personal.json     ← Edita tu información aquí
│   │   ├── projects.json     ← Edita tus proyectos aquí
│   │   └── skills.json       ← Edita tus skills aquí
│   └── styles/
│       └── global.css        ← Colores Cyber Neon aquí
├── public/
│   ├── profile.jpg           ← Tu foto aquí
│   ├── cv/
│   │   └── CV-TuNombre.pdf   ← Tu CV aquí
│   └── projects/
│       ├── project1/         ← Imágenes proyecto 1
│       ├── project2/         ← Imágenes proyecto 2
│       ├── project3/         ← Imágenes proyecto 3
│       └── project4/         ← Imágenes proyecto 4
└── .env                      ← Credenciales EmailJS aquí
```

## Características Implementadas ✅

- ✅ Hero Section con "Desarrollador Full Stack Junior"
- ✅ Grid de 4 proyectos sin categorías
- ✅ Skills: Frontend (8 tecnologías)
- ✅ Skills: Backend (Node.js)
- ✅ Skills: Aprendiendo (MySQL)
- ✅ About con bio extendida y foto
- ✅ Contact con EmailJS
- ✅ Modo oscuro/claro
- ✅ Animaciones con Framer Motion
- ✅ Diseño Cyber Neon (cyan + magenta + púrpura)
- ✅ Responsive design
- ✅ Smooth scroll
- ✅ Footer con redes sociales

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Instalar dependencias
npm install
```

## Problemas Comunes y Soluciones

### Las imágenes no se ven
- Verifica que los nombres de archivo en `projects.json` coincidan exactamente con los archivos en `public/projects/`
- Los paths deben empezar con `/` (ej: `/projects/project1/thumb.jpg`)

### El formulario no envía emails
- Verifica que las variables de entorno en `.env` estén correctas
- Asegúrate de haber configurado EmailJS correctamente
- Revisa la consola del navegador (F12) para ver errores

### No se ven los iconos de skills
- Los iconos están mapeados en `src/components/sections/Skills.tsx`
- Si necesitas más iconos, instala: `npm install react-icons`

## Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Lee el README.md completo
3. Verifica que todos los archivos JSON tengan sintaxis correcta

## ¡Listo!

Tu portafolio está completamente funcional. Solo necesitas:
1. Personalizar la información en los archivos JSON
2. Agregar tus imágenes
3. Configurar EmailJS
4. Desplegar en Vercel

¡Éxito con tu portafolio! 🚀
