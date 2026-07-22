# Project Carousel Aspect Ratio Design

## Objective
Make carousel images in the project detail modal fill the available width of
their container without empty side bars, without cropping any part of the
screenshot.

## Current Behavior
- `ProjectModal.css:105-106` defines `.carousel-item { height: 500px; }`
  (`height: 300px` on mobile, `ProjectModal.css:280-281`).
- `ProjectModal.css:156-159` sets `.carousel-item img { object-fit: contain; }`.
- Project screenshots are wider than tall (~16:9), while the container is
  fixed-height and closer to square, so `contain` produces empty vertical
  bars on both sides of each image.

## Approved UX
- Carousel images fill the container width edge-to-edge.
- No cropping of screenshot content — every UI element visible in the
  original capture must remain visible after the fix.
- Applies to desktop and mobile breakpoints.

## Technical Design
- In `src/components/project/ProjectModal.css`:
  - Replace the fixed `height: 500px` on `.carousel-item` with
    `aspect-ratio: 16 / 9`.
  - Replace the fixed `height: 300px` on the mobile breakpoint
    (`ProjectModal.css:280-281`) with the same `aspect-ratio: 16 / 9`.
  - Keep `object-fit: contain` on `.carousel-item img` — the goal is
    matching the container to the image's real ratio, not cropping. If a
    specific project's screenshots do not match 16:9 well after this
    change, that project's images should be normalized separately via the
    `portfolio-image-cropper` agent, not by changing `object-fit` to
    `cover` here.
- No other positioning changes required in `.carousel-item img`.

## Acceptance Criteria
- Carousel images occupy the full width of the modal without visible side
  bars, for projects whose screenshots are ~16:9.
- No project screenshot has its edges cropped.
- Desktop and mobile breakpoints both updated consistently.
- Build passes (`npm run build`).
