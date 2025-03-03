import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.PNG'], // Hozzáadtuk a .PNG-t
  build: {
    outDir: 'build', // Itt módosítottuk a build mappa nevét.
  },
})
