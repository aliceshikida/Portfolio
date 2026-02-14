/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    colors: {
      primary: '#00FF00',
      secondary: '#0A4D0A',
      dark: '#0A0A0A',
      'dark-lighter': '#1A1A1A',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      orbitron: ['Orbitron', 'sans-serif'],
      mono: ['Orbitron', 'monospace'], // Usando Orbitron no lugar de JetBrains Mono
    },
  },
},
plugins: [],
}