# Navbar Links Unified Design

## Objective
Show `Inicio`, `Proyectos`, `Habilidades`, `Sobre mi`, and `Contacto` as first-level links in the desktop header, and prevent the `...` overflow indicator from appearing there.

## Current Behavior
- Header uses Ant Design `Menu` in horizontal mode.
- When space is tight, Ant Design collapses last items into an overflow menu (`...`).
- User sees `Sobre mi` and `Contacto` hidden behind `...`.

## Approved UX
- Desktop: all five links visible in the same format and hierarchy.
- Desktop: no `...` overflow indicator.
- Mobile: keep hamburger button and drawer navigation.

## Technical Design
- In `src/components/layout/Header.tsx`, set `disabledOverflow` on the desktop `Menu`.
- Keep the same `menuItems` array so visual style and behavior remain consistent.
- In `src/components/layout/Header.css`, reduce desktop menu item horizontal padding to ensure spacing stays stable at common desktop widths.
- Keep responsive breakpoint behavior (`nav-desktop` hidden and mobile drawer shown on small screens).

## Acceptance Criteria
- At desktop widths, five links are always visible and clickable.
- `...` overflow is not rendered in desktop header.
- Mobile menu still opens via hamburger and lists all sections.
- Build passes (`npm run build`).
