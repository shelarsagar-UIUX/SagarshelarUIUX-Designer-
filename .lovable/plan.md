

## Plan: Redesign Hero Section with Profile Photo Card Layout

Based on the uploaded reference image, the hero section will be restructured to a centered, single-column layout with these elements stacked vertically:

### Layout Changes to `HeroSection.tsx`

1. **Large rounded profile photo card** — The avatar becomes a large image (roughly 280x360px on mobile, larger on desktop) with rounded-2xl corners, a subtle white border/shadow, centered at the top. Slight tilt/rotation animation on hover.

2. **Greeting text** — "Hello! 👋 I'm" followed by the name "Sagar Shelar" in bold, left-aligned on mobile, centered on desktop. Keep existing text content unchanged.

3. **Role tags** — Replace the current CTA buttons area with styled pill/chip tags for the designer's roles. Based on existing info, these would be: "UI/UX Designer", "Product Designer", and similar roles from the current content. Each tag has a soft pastel background (peach, light blue, light pink) with an icon.

4. **CTA buttons** — Move "View portfolio" and "Behance" buttons below the tags.

5. **Marquee** — Keep the project marquee below the hero content (mobile) or to the side (desktop).

### Technical Details

- **File modified**: `src/components/HeroSection.tsx`
- Keep all existing data (name, description, links, images) unchanged
- Use the existing `avatar` import for the large photo
- Add framer-motion spring animation on the photo card (hover tilt/scale)
- Role tags use Tailwind bg-orange-50, bg-blue-50, bg-pink-50 with matching text colors
- Maintain responsive behavior: stacked on mobile, split layout on desktop

