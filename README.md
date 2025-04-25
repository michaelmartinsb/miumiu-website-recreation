# Miu Miu Website Recreation

A clean, faithful recreation of the Miu Miu fashion website using vanilla HTML, CSS, and JavaScript. This project follows modern best practices for web development while maintaining a minimal approach without external dependencies.

## Project Structure

```
miumiu-website/
│
├── index.html                # Main HTML file
├── assets/
│   ├── images/               # Website images
│   ├── fonts/                # Custom fonts (if needed)
│   └── icons/                # SVG icons
│
├── css/
│   ├── main.css              # Main CSS file
│   ├── header.css            # Header-specific styles
│   ├── footer.css            # Footer-specific styles
│   ├── components.css        # Reusable component styles
│   ├── utils.css             # Utility classes, animations
│   └── section-borders.css   # Wireframe borders for visual development
│
└── js/
    ├── main.js               # Main JavaScript functionality
    └── wireframe.js          # Wireframe toggle functionality
```

## Features

- **Light Theme Design**: Clean light theme aesthetic inspired by Miu Miu's brand identity (updated from original dark theme)
- **Responsive Layout**: Works seamlessly across devices of all sizes
- **Modern Web Practices**: Semantic HTML5, CSS3, and vanilla JavaScript
- **Performance Optimized**: Minimal external resources and optimized assets
- **Development Tools**:
  - Wireframe borders for visual structure development (if enabled)
  - Section labels for easy identification (if enabled)
- **Interactive Elements**:
  - Newsletter signup popup
  - Cookie consent notice
  - Smooth scrolling
  - Responsive, always-visible navigation (adjusted items)
  - Image hover effects
  - Adjusted logo sizing for better visibility

## Getting Started

### Prerequisites

No specific dependencies are required. You just need a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser

Or simply host the files on any web server.

## Development

This project is structured to be easily maintained and extended:

- **CSS Organization**: Styles are separated by function (main, header, footer, components, utilities)
- **JavaScript**: All interactive functionality is in a single, well-commented file
- **Images**: Replace the placeholder images in the `assets/images/` folder with actual content

### Wireframe Mode

The project includes a wireframe mode for easier visual development:

- Blue dashed borders around major sections
- Red dotted borders around child elements
- Section labels to identify different parts of the page
- Toggle button in the bottom-right corner to show/hide wireframe

This helps with:
- Visualizing page structure
- Identifying section boundaries
- Easier debugging in Chrome Developer Tools

### Image Size Requirements

For optimal display, use these image dimensions:

1. **Hero Image**: 1920px × 800px (full width)

2. **Section Images** (full-width sections):
   - Section 1 (Contrasting codes): 1920px × 1080px
   - Section 2 (Sporty Essence): 1920px × 1080px

3. **Featured Grid Items**:
   - Bags image: 800px × 1000px
   - Shoes image: 800px × 1000px

4. **Club Section Images**:
   - Women's Tales: 600px × 800px
   - Leathergoods Campaign: 600px × 800px
   - Fashion Show: 600px × 800px
   - Literary Club: 600px × 800px

5. **Logo** (Current implementation uses gold image on white background):
   - Large Logo Height: 60px (Adjusted)
   - Small Logo Height: 30px (Adjusted)

6. **Icons**:
   - Header icons: 18px × 18px (Adjusted for light theme)
   - Social icons: 20px × 20px (Adjusted for light theme)

## Browser Support

The website is designed to work on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

To customize for different needs:

1. **Colors**: Update color values in CSS files to match your brand (currently set to a light theme)
2. **Typography**: Replace or modify font styles in CSS
3. **Content**: Update HTML with your own text and images
4. **Structure**: Modify the HTML structure as needed while maintaining the responsive design

## License

This is a demonstration project for educational purposes.

## Acknowledgments

- Inspired by the design and aesthetics of the Miu Miu official website
- All trademarks, logos, and brand names are the property of their respective owners