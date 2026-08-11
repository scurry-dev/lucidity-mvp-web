# Hero background: replace grid with abstract data-node chart pattern

## Goal
Replace the current CSS grid background behind the landing-page hero with a static, abstract analytics-themed visual made of connected data nodes and curves. The new background should feel like an analytics company without competing with the hero report iframe.

## Design decisions
- **Style:** Abstract data nodes — small dots connected by faint Bézier curves, forming a loose network / trend silhouette.
- **Motion:** Static. No animation. The existing `prefers-reduced-motion` media query continues to apply automatically.
- **Color treatment:** Neutral/abstract, using the Lucidity dark-theme semantic tokens (`--border`, `--faint`, `--muted-foreground`) at very low opacity so it stays in the background.
- **Placement:** Only behind the hero, replacing the `.lucidity-grid` div in `src/pages/Landing.tsx`.
- **Responsiveness:** SVG or CSS-based, scales to viewport width, keeps `overflow-x-clip` so it does not cause horizontal drift on mobile.

## Implementation approach
1. Create a new reusable hero-background component (e.g. `HeroBackground`) in `src/pages/Landing.tsx` or as a small inline SVG.
2. Render an SVG with:
   - A subtle radial fade (`mask` or `opacity` gradient) so the pattern is strongest near the top-center and fades toward the edges.
   - ~20–30 data points connected by thin paths.
   - A few horizontal guide lines suggesting chart axes, kept extremely faint.
3. Swap the existing `<div className="lucidity-grid ..." />` for the new component.
4. Remove or deprecate the `.lucidity-grid` utility in `src/index.css` if it is no longer used elsewhere.
5. Verify no horizontal overflow is introduced on mobile.

## Out of scope
- No animation, no real data fetching, no interactive charts.
- No changes to the hero copy, CTA buttons, report iframe, or other sections.

## Acceptance criteria
- Hero background is an abstract data-node / connected-point pattern.
- Colors are neutral and do not clash with the product screenshot or brand accents.
- Page still fits 1470×956 without vertical scroll on standard laptops.
- No horizontal scroll on mobile.
- Build passes.
