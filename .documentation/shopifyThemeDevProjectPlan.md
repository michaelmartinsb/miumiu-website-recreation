# Lionel Bamford - Shopify Theme Development Plan

This plan outlines the necessary steps to convert the completed front-end code for the Lionel Bamford website into a functional and customizable Shopify theme, building upon the work specified in the `frontEndDevProjectPlan.md`.

## Phase 1: Theme Scaffolding & Basic Setup

1.  **Initialize Theme Structure:**
    *   Set up the standard Shopify theme directory structure (`assets/`, `config/`, `layout/`, `locales/`, `sections/`, `snippets/`, `templates/`).
    *   Create essential files: `config/settings_schema.json`, `layout/theme.liquid`, `templates/index.json`, `templates/404.json`, etc.
2.  **Asset Integration:**
    *   Move all CSS, JS, fonts, and static images from the front-end build into the `assets/` directory.
    *   Update references in `theme.liquid` and other relevant files to use Shopify's `asset_url` filter.
3.  **Layout (`theme.liquid`) Integration:**
    *   Transfer the core HTML structure (header, footer, main content placeholder) from `index.html` into `layout/theme.liquid`.
    *   Replace static content placeholders with appropriate Liquid tags (e.g., `{{ content_for_layout }}`).
4.  **Basic Template Creation:**
    *   Create basic JSON templates (`index.json`, `product.json`, `collection.json`, `page.json`, `cart.json`, `404.json`) referencing sections where applicable.

## Phase 2: Section Development & Content Integration

1.  **Homepage Section Conversion:**
    *   Identify distinct content blocks on the front-end homepage (`hero`, `section-content`, `featured-grid`, `club-section`).
    *   Convert each block into a Shopify Section (`sections/*.liquid`).
    *   Define settings in each section's schema (`{% schema %}`) to allow customization via the Theme Editor (e.g., text, images, colors, product selection).
    *   Replace static HTML content within sections with Liquid variables referencing these settings (`{{ section.settings.heading }}`).
    *   Update `templates/index.json` to include and order these sections.
2.  **Header & Footer as Sections/Snippets:**
    *   Convert the header and footer HTML into reusable Snippets (`snippets/*.liquid`) or Sections if customization is needed.
    *   Integrate Shopify navigation (`linklists`) into the header menu using Liquid loops.
    *   Integrate Shopify search functionality placeholder/link.
    *   Ensure logo switching logic respects theme settings.
3.  **Product & Collection Integration:**
    *   Develop `sections/main-product.liquid` and `sections/main-collection.liquid`.
    *   Use Liquid objects (`product`, `collection`) and loops (`{% for product in collection.products %}`) to dynamically display product information (title, price, images, variants, description).
    *   Integrate "Add to Cart" forms using Liquid.
    *   Style product grids and product pages according to the front-end designs.
4.  **Page & Cart Templates:**
    *   Develop `sections/main-page.liquid` to render standard page content (`{{ page.content }}`).
    *   Develop `sections/main-cart.liquid` to display cart contents using the `cart` object and Liquid. Ensure it aligns with the front-end styling.

## Phase 3: Functionality & Interactivity Integration

1.  **JavaScript Integration & Refinement:**
    *   Review `assets/main.js` (and any other JS files).
    *   Ensure JS interactions (header scroll, mobile menu) work correctly within the Shopify Liquid structure.
    *   Adapt JS to handle dynamically loaded content (e.g., in sections, quick view if added).
    *   Utilize Shopify's Storefront API or AJAX API for cart updates if needed for enhanced UX (optional, depends on requirements).
2.  **Newsletter Form:**
    *   Connect the newsletter popup/form to Shopify's customer account creation or a third-party email marketing app. Update the form action and input names accordingly.
3.  **Search Implementation:**
    *   Implement the actual search functionality, potentially using a dedicated search template (`templates/search.json` and `sections/main-search.liquid`) and connecting the header search icon to it. Utilize Shopify's search parameters.
4.  **Cookie Notice:**
    *   Integrate with Shopify's Customer Privacy API or use a Shopify App for robust cookie consent management.

## Phase 4: Theme Settings & Finalization

1.  **Global Theme Settings (`settings_schema.json`):**
    *   Define global theme settings for colors, typography (fonts via Font Picker), social media links, favicon, etc., based on the front-end plan's reference to brand guidelines.
    *   Ensure these settings are applied correctly throughout the theme using Liquid (`{{ settings.color_primary }}`).
2.  **Responsiveness & Cross-Browser Testing:**
    *   Re-test responsiveness across devices, ensuring Shopify-generated content renders correctly.
    *   Perform cross-browser testing again, specifically checking Liquid rendering and JS interactions.
3.  **Performance Optimization:**
    *   Leverage Shopify's built-in performance features (CDN, image optimization).
    *   Review Liquid code for efficiency (minimize loops where possible, consider caching).
    *   Re-run performance analysis tools.
4.  **Schema Validation & Linting:**
    *   Validate `settings_schema.json` and section schemas.
    *   Use Shopify Theme Check or similar tools to lint the theme code for errors and best practices.
5.  **Documentation:**
    *   Create basic documentation for the merchant on how to use the theme settings and sections.

This plan provides a roadmap for converting the front-end project into a fully functional Shopify theme.
