/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#A78BFA',
                secondary: '#5B21B6',
                dark: '#0A0A0A',
                'dark-lighter': '#1A1A1A',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                mono: ['Orbitron', 'monospace'],
            },
            // Efeito de brilho sutil (roxo)
            boxShadow: {
                'neon': '0 0 10px rgba(167, 139, 250, 0.4), 0 0 20px rgba(167, 139, 250, 0.2)',
            },
            dropShadow: {
                'neon': '0 0 5px rgba(167, 139, 250, 0.6)',
            }
        },
    },
    plugins: [],
}