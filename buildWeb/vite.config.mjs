import { defineConfig } from 'vite';

export default defineConfig({
  root: '.dist',
  server: {
    port: 7000,
    open: '/ko.html'
  }
});