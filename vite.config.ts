import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // permite acceder desde el celular usando la IP local
    port: 5173, // puedes dejar este o cambiarlo
    strictPort: true, // evita que Vite cambie el puerto automáticamente
  },
})
