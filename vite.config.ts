import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable access from local network
    port: 5173, // Default Vite port
    strictPort: false, // Allow fallback to next available port
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
