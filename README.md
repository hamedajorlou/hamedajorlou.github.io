# Personal Portfolio Website

This is my personal portfolio website built with React, TypeScript, and Material-UI. It showcases my projects, skills, and professional experience.

## Features

- Modern, responsive design
- Project showcase
- About me section
- Contact form
- Smooth animations
- Material Design components

## Technologies Used

- React
- TypeScript
- Material-UI
- Framer Motion
- React Router

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment

This website is deployed using GitHub Pages. To deploy your changes:

1. Update the `vite.config.ts` file with your repository name:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Customization

1. Update the content in the components to reflect your personal information
2. Modify the theme in `App.tsx` to match your preferred color scheme
3. Add your projects to the `projects` array in `Projects.tsx`
4. Update social links in `Contact.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).
