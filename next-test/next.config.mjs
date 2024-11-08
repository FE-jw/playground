/** @type {import('next').NextConfig} */
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const nextConfig = {
  // extends: ['plugin:prettier/recommended'],
  reactStrictMode: false,
  rules: {
    'prettier/prettier': 'error' // Prettier와 충돌하는 ESLint 규칙 비활성화
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
};

export default nextConfig;
