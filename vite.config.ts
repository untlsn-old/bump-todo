import { defineConfig } from 'vite';
import { resolve } from 'path';
import preact from '@preact/preset-vite';

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [preact()],
});
