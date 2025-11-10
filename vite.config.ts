import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React and React DOM
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI Libraries
          'ui-vendor': [
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
            'lucide-react'
          ],
          // Form Libraries
          'form-vendor': [
            'react-hook-form',
            '@hookform/resolvers',
            'yup'
          ],
          // Animation Libraries
          'animation-vendor': ['gsap'],
          // Other utilities
          'utils-vendor': [
            'clsx',
            'tailwind-merge',
            'class-variance-authority',
            'embla-carousel-react'
          ],
          // Email service
          'email-vendor': ['@emailjs/browser'],
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase limit slightly since we're chunking
  },
})