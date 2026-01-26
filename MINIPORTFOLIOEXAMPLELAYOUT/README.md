# Mini Portfolio Example Layout

A modern, responsive React portfolio application built with Vite that showcases projects across different categories: Static, Responsive, and Dynamic.

## Features

- **Tab-based Project Filtering**: Filter projects by Static, Responsive, or Dynamic categories
- **Responsive Design**: Mobile-friendly layout that works on all screen sizes
- **Modern React**: Built with React 19.0.0 using functional components and hooks
- **Fast Development**: Powered by Vite for instant hot module replacement (HMR)
- **ESLint Integration**: Code quality checks with ESLint configuration
- **Modular Components**: Clean component structure with reusable components

## Project Structure

```
MINIPORTFOLIOEXAMPLELAYOUT/
├── src/
│   ├── components/
│   │   ├── App.jsx              # Main application component
│   │   ├── App.css              # App styles
│   │   ├── main.jsx             # React entry point
│   │   ├── index.css            # Global styles
│   │   ├── Header/              # Header component
│   │   │   ├── index.jsx
│   │   │   └── index.css
│   │   ├── TabItem/             # Tab component for filtering
│   │   │   ├── index.jsx
│   │   │   └── index.css
│   │   └── ProjectItem/         # Project display component
│   │       ├── index.jsx
│   │       └── index.css
│   └── public/                  # Static assets
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
├── .eslintrc.json              # ESLint configuration
└── eslint.config.js            # ESLint config (flat format)
```

## Installation

1. Navigate to the project directory:
```bash
cd MINIPORTFOLIOEXAMPLELAYOUT
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development
Start the development server on port 3000:
```bash
npm run dev
```

The server will be available at:
- Local: `http://localhost:3000/`
- Network: `http://10.0.0.183:3000/` (or your machine's IP)

### Build for Production
Build the project for production:
```bash
npm run build
```

Output will be in the `build/` directory.

### Lint Code
Check code quality with ESLint:
```bash
npm run lint
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## Technologies Used

- **React**: 19.0.0 - UI library
- **Vite**: 6.2.0 - Build tool and dev server
- **Node.js**: JavaScript runtime
- **ESLint**: 9.21.0 - Code quality tool
- **CSS3**: Responsive styling

## Components

### Header
Displays the application header with branding.

### TabItem
Renders individual tab buttons for project category filtering.

### ProjectItem
Displays individual project cards with image, title, and description.

### App
Main component that manages active tab state and filters projects accordingly.

## Features Details

- **Category Filtering**: Projects are organized into three categories:
  - **Static**: Standard HTML/CSS websites
  - **Responsive**: Mobile-responsive designs
  - **Dynamic**: JavaScript-interactive applications

- **Project Data**: Contains 9 sample projects with images, titles, and descriptions from external URLs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tips

1. **Hot Module Replacement**: Changes to component files will automatically refresh in the browser
2. **Component Organization**: Each component has its own folder with `index.jsx` and `index.css`
3. **State Management**: Uses React's `useState` hook for tab filtering
4. **CSS Modules**: Global styles in `index.css` and component-specific styles in respective CSS files

## Performance

- **Optimized Build**: Vite provides efficient bundling with code splitting
- **Memory Configuration**: Node.js allocated with 4GB max heap size for optimal performance
- **HMR Speed**: Near-instant page updates during development

## Deployment

The build output in the `build/` directory can be deployed to any static hosting service:
- GitHub Pages
- Vercel
- Netlify
- AWS S3
- Azure Static Web Apps

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please check the GitHub repository or contact the maintainer.

---

**Author**: Vamshi Krishna  
**Repository**: [Vamshi-krishna20/REACT](https://github.com/Vamshi-krishna20/REACT)
