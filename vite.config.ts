import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['portfolio.tsx'], // Add the file(s) you want to use require for
    esbuildOptions: {
      // Use 'cjs' format for the specified file(s)
      loader: {
        '.js': 'js',
        '.jsx': 'jsx',
        '.ts': 'ts',
        '.tsx': 'tsx',
      },
    },
  },
})
