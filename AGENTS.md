# AGENTS.md - Portfolio Web Project

## Project Overview
Modern portfolio website built with React 18, TypeScript, Vite, and Ant Design. Features a Cyber Neon design theme with dark/light mode, animated sections using Framer Motion, and EmailJS contact form integration.

## Build & Development Commands

### Core Commands
```bash
# Start development server
npm run dev                # Runs on http://localhost:5173

# Build for production
npm run build              # TypeScript compilation + Vite build

# Preview production build
npm run preview            # Preview the built app locally

# Lint code
npm run lint               # Run ESLint on all files
```

### No Test Suite
This project does not currently have a test suite configured. When adding tests in the future, consider:
- Vitest for unit/integration tests
- React Testing Library for component tests
- Playwright or Cypress for E2E tests

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (ThemeToggle, SocialLinks)
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── project/         # Project-specific components (ProjectCard, ProjectModal)
│   │   └── sections/        # Main sections (Hero, Projects, Skills, About, Contact)
│   ├── context/             # React Context (ThemeContext)
│   ├── data/                # JSON data files (personal, projects, skills)
│   ├── hooks/               # Custom React hooks (useScrollSpy)
│   ├── styles/              # Global CSS and themes
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utilities (animations with Framer Motion)
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Static assets (images, CV, projects)
└── ...config files
```

## Code Style Guidelines

### Imports
**Order:** External libraries → Internal utilities → Components → Types → Styles
```typescript
// ✅ Good
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft } from '../../utils/animations';
import personalData from '../../data/personal.json';
import './Hero.css';

// ❌ Bad - Mixed order
import './Hero.css';
import { Button } from 'antd';
import personalData from '../../data/personal.json';
```

### TypeScript Types
- **Always use interfaces for object types** (not type aliases for objects)
- **Use explicit return types for complex functions**
- **Export types from `src/types/index.ts`**
- **Mark optional properties with `?`**

```typescript
// ✅ Good
export interface Project {
  id: string;
  title: string;
  links: ProjectLinks;
  featured: boolean;
}

// ❌ Bad - Using type alias
export type Project = {
  id: string;
  title: string;
}
```

### Naming Conventions
- **Components:** PascalCase (`ProjectCard`, `Hero`, `ThemeToggle`)
- **Files:** Match component name (`ProjectCard.tsx`, `Hero.tsx`)
- **CSS files:** Match component name (`ProjectCard.css`, `Hero.css`)
- **Hooks:** camelCase with `use` prefix (`useScrollSpy`, `useTheme`)
- **Utilities:** camelCase (`fadeInUp`, `handleScrollToProjects`)
- **Constants:** SCREAMING_SNAKE_CASE or camelCase depending on scope
- **CSS classes:** kebab-case (`hero-section`, `project-card-wrapper`)

### Component Structure
```typescript
// 1. Imports
import { useState } from 'react';
import { Button } from 'antd';

// 2. Interfaces/Types (if component-specific)
interface MyComponentProps {
  title: string;
  onAction: () => void;
}

// 3. Component definition
const MyComponent = ({ title, onAction }: MyComponentProps) => {
  // 4. Hooks
  const [isActive, setIsActive] = useState(false);
  
  // 5. Event handlers
  const handleClick = () => {
    setIsActive(true);
    onAction();
  };
  
  // 6. Render
  return (
    <div className="my-component">
      <Button onClick={handleClick}>{title}</Button>
    </div>
  );
};

// 7. Export
export default MyComponent;
```

### CSS Styling
- **CSS Modules pattern:** Each component has its own `.css` file
- **CSS Variables:** Use for theming (defined in `src/styles/global.css`)
- **BEM-like naming:** Use descriptive, hierarchical class names
- **Responsive:** Mobile-first approach with media queries

```css
/* ✅ Good */
.hero-section {
  padding: 100px 24px;
  background: var(--bg-primary);
}

.hero-section .hero-container {
  max-width: 1200px;
}

/* ❌ Bad - Generic names */
.container {
  padding: 100px;
}
```

### Error Handling
- **Always handle promises with try/catch**
- **Provide user feedback on errors** (using Ant Design's `message` component)
- **Log errors to console for debugging**

```typescript
// ✅ Good
try {
  await emailjs.send(serviceId, templateId, data, publicKey);
  message.success('Message sent successfully!');
} catch (error) {
  console.error('Error sending message:', error);
  message.error('Failed to send message. Please try again.');
}

// ❌ Bad - No error handling
await emailjs.send(serviceId, templateId, data, publicKey);
message.success('Message sent!');
```

### Framer Motion Animations
- **Define variants in `src/utils/animations.ts`**
- **Reuse animation variants across components**
- **Use `whileInView` for scroll-triggered animations with `viewport={{ once: true }}`**

```typescript
// ✅ Good - Reusing predefined variants
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
>
  {content}
</motion.div>
```

## Configuration Files

### TypeScript (`tsconfig.app.json`)
- Target: ES2023
- Module: ESNext
- JSX: react-jsx
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`

### ESLint (`eslint.config.js`)
- Using flat config format
- React Hooks rules enforced
- TypeScript ESLint rules enabled
- React Refresh plugin for HMR

### Environment Variables
- Prefix with `VITE_` to expose to client code
- Store EmailJS credentials in `.env` file:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

## Best Practices

1. **Use Ant Design components** for UI elements (Button, Input, Card, Modal, etc.)
2. **Always import JSON data** from `src/data/` directory
3. **Keep components small and focused** (Single Responsibility Principle)
4. **Use CSS variables** for colors and theme values
5. **Optimize images:** Place in `/public/` and reference with absolute paths
6. **TypeScript strict mode:** No `any` types unless absolutely necessary
7. **Accessibility:** Include ARIA labels on interactive elements
8. **Responsive design:** Test on mobile, tablet, and desktop viewports

## Common Tasks

### Adding a New Component
1. Create component file in appropriate `src/components/` subdirectory
2. Create matching `.css` file if component-specific styles are needed
3. Define TypeScript interfaces for props in the component file or `src/types/`
4. Import and use in parent component

### Adding a New Section
1. Create in `src/components/sections/`
2. Add corresponding CSS file
3. Import and render in `App.tsx`
4. Add navigation link in `Header.tsx`

### Modifying Theme Colors
Edit `src/styles/global.css` CSS custom properties:
```css
:root {
  --accent-primary: #00f5ff;    /* Cyan neon */
  --accent-secondary: #ff006e;  /* Magenta */
  --accent-tertiary: #8338ec;   /* Purple */
}
```

---

**Note:** This project prioritizes visual design, animations, and user experience. Maintain the Cyber Neon aesthetic when making changes.
