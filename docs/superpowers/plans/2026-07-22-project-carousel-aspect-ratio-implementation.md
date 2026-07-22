# Project Carousel Aspect Ratio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> superpowers:subagent-driven-development (recommended) or
> superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make carousel images in the project detail modal fill the full
width of their container, replacing the fixed-height container that causes
empty side bars with an `aspect-ratio`-based container that matches the
screenshots' real proportions.

**Architecture:** No component structure changes. Pure CSS fix in
`ProjectModal.css`, applied consistently to desktop and mobile breakpoints.

**Tech Stack:** React 18, TypeScript, CSS, Vite

---

### Task 1: Replace fixed height with aspect-ratio on desktop

**Files:**
- Modify: `src/components/project/ProjectModal.css`

- [ ] **Step 1: Confirm current behavior**

```text
1) Run the app, open any project's modal
2) Observe the carousel image: empty vertical bars visible on both sides
```

- [ ] **Step 2: Update `.carousel-item`**

Replace:
```css
.carousel-item {
  height: 500px;
}
```
With:
```css
.carousel-item {
  aspect-ratio: 16 / 9;
}
```

- [ ] **Step 3: Verify desktop result**

Manual check in browser at desktop width: image should fill the container
width with no side bars, and no cropped edges.

- [ ] **Step 4: Commit Task 1**

```bash
git add src/components/project/ProjectModal.css
git commit -m "fix(project-modal): use aspect-ratio instead of fixed height on carousel (desktop)"
```

### Task 2: Replace fixed height with aspect-ratio on mobile

**Files:**
- Modify: `src/components/project/ProjectModal.css`

- [ ] **Step 1: Update mobile breakpoint**

Replace:
```css
.carousel-item {
  height: 300px;
}
```
With:
```css
.carousel-item {
  aspect-ratio: 16 / 9;
}
```

- [ ] **Step 2: Verify mobile result**

Manual check in responsive mode (`<= 768px`): same result as desktop, no
side bars, no cropping.

- [ ] **Step 3: Commit Task 2**

```bash
git add src/components/project/ProjectModal.css
git commit -m "fix(project-modal): use aspect-ratio instead of fixed height on carousel (mobile)"
```

### Task 3: Regression check across all projects

**Files:**
- Verify: `src/components/project/ProjectModal.css`

- [ ] **Step 1: Build project**

Run: `npm run build`

Expected: successful build, no TypeScript/CSS errors.

- [ ] **Step 2: Check every project's carousel**

```text
Open each project in projects.json and inspect its carousel:
- Confirm no side bars
- Confirm no cropped content
- Flag any project whose screenshots are not ~16:9 (candidate for
  portfolio-image-cropper, not for changing object-fit here)
```

- [ ] **Step 3: Commit final verification adjustments (if any)**

```bash
git add src/components/project/ProjectModal.css
git commit -m "chore(project-modal): verify carousel aspect-ratio across all projects"
```
