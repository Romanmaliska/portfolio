import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0E1F39',
        light: '#E5E5E5',
        blue: '#93b1cd',
        black: {
          DEFAULT: '#0E1F39',
          light: '#313234',
        },
        white: {
          DEFAULT: '#ffffff',
          dark: '#B0B5BC',
        },
      },
    },
  },
  plugins: [],
};
export default config;
