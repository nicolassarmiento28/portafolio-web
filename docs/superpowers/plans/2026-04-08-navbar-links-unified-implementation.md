# Navbar Links Unified Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ensure `Sobre mi` and `Contacto` are always visible in desktop navbar (same level as `Inicio`, `Proyectos`, `Habilidades`) and prevent Ant Design overflow `...` on desktop, while keeping mobile drawer behavior.

**Architecture:** Keep the existing header structure and data model (`menuItems`) unchanged. Apply a focused desktop-only fix by disabling Ant Design menu overflow in `Header.tsx` and tightening desktop menu spacing in `Header.css` to keep all 5 links visible. Preserve the current mobile breakpoint behavior.

**Tech Stack:** React 18, TypeScript, Ant Design Menu/Drawer, CSS, Vite

---

### Task 1: Disable Desktop Menu Overflow

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Test: manual verification in browser

- [ ] **Step 1: Write the failing behavior check (manual test case)**

Document and verify current behavior before code changes:

```text
1) Run app in desktop width (>= 1024px)
2) Observe header menu items
3) Confirm `Sobre mi` and/or `Contacto` can move into `...`
```

- [ ] **Step 2: Run app to confirm baseline behavior**

Run: `npm run dev -- --host 0.0.0.0 --port 5173`

Expected: dev server starts at `http://localhost:5173/` and current header behavior can be observed.

- [ ] **Step 3: Add `disabledOverflow` to desktop Ant Design Menu**

Update desktop `Menu` in `Header.tsx`:

```tsx
<Menu
  mode="horizontal"
  selectedKeys={[activeSection]}
  className="nav-menu"
  disabledOverflow
  items={menuItems.map(item => ({
    key: item.key,
    label: item.label,
    onClick: () => handleMenuClick(item.key),
  }))}
/>
```

- [ ] **Step 4: Verify desktop overflow indicator is gone**

Manual check in browser at desktop widths.

Expected: no `...` indicator rendered in desktop menu.

- [ ] **Step 5: Commit Task 1 changes**

```bash
git add src/components/layout/Header.tsx
git commit -m "fix(header): disable desktop menu overflow in navbar"
```

### Task 2: Tighten Desktop Menu Spacing for 5 Visible Links

**Files:**
- Modify: `src/components/layout/Header.css`
- Test: manual responsive verification

- [ ] **Step 1: Write the failing layout check (manual test case)**

```text
At desktop widths around 1024-1200px, verify if link spacing feels too tight or causes wrapping pressure.
```

- [ ] **Step 2: Reduce desktop menu item horizontal padding**

Add/adjust this rule in `Header.css`:

```css
.nav-menu .ant-menu-item {
  color: var(--text-secondary) !important;
  transition: all 0.3s ease;
  padding-inline: 14px !important;
}
```

If needed after visual check, use `12px` instead of `14px`.

- [ ] **Step 3: Verify desktop visual consistency**

Manual checks:

```text
1) Desktop >= 1200px: all 5 links visible, balanced spacing
2) Desktop ~1024px: all 5 links still visible without overflow indicator
3) Active section underline/selected style still works
```

Expected: same visual format for all links, no style regressions.

- [ ] **Step 4: Commit Task 2 changes**

```bash
git add src/components/layout/Header.css
git commit -m "style(header): adjust desktop nav spacing for five visible links"
```

### Task 3: Regression Verification (Desktop + Mobile)

**Files:**
- Verify: `src/components/layout/Header.tsx`
- Verify: `src/components/layout/Header.css`

- [ ] **Step 1: Build project for final verification**

Run: `npm run build`

Expected: successful build with Vite output and no TypeScript errors.

- [ ] **Step 2: Verify mobile drawer behavior remains intact**

Manual checks in responsive mode (`<= 768px`):

```text
1) Desktop nav hidden
2) Hamburger button visible
3) Drawer opens/closes correctly
4) Drawer includes Inicio, Proyectos, Habilidades, Sobre mi, Contacto
```

Expected: mobile UX unchanged and fully functional.

- [ ] **Step 3: Verify section navigation works for all links**

Manual checks:

```text
Click each menu item and confirm smooth scroll reaches corresponding section id:
home, projects, skills, about, contact
```

Expected: all links navigate correctly.

- [ ] **Step 4: Commit final verification adjustments (if any)**

```bash
git add src/components/layout/Header.tsx src/components/layout/Header.css
git commit -m "chore(header): verify desktop navbar visibility and mobile drawer behavior"
```
