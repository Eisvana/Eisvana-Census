import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  //   base: '/Eisvana-Census/',
  plugins: [vue()],
  build: {
    rolldownOptions: {
      input: ['index.html', 'form.html', 'renew.html', 'table.html'],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
