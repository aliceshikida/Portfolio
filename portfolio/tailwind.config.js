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
                mono: ['Orbitron', 'monospace'],
            },
            // ADIÇÃO SUGERIDA: Efeito de brilho neon
            boxShadow: {
                'neon': '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3)',
            },
            dropShadow: {
                'neon': '0 0 5px rgba(0, 255, 0, 0.8)',
            }
        },
    },
    plugins: [],
}