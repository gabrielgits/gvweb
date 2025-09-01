/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#020617',
          950: '#000000'
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        electric: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        neon: {
          blue: '#00d4ff',
          cyan: '#00ffff',
          purple: '#8b5cf6',
          pink: '#ec4899'
        }
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
        'highlighter': 'highlighter 4s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }
        },
        'neon-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff',
            textShadow: '0 0 5px #00d4ff'
          },
          '50%': { 
            boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff',
            textShadow: '0 0 10px #00d4ff'
          }
        },
        'highlighter': {
          '0%': { 
            background: 'linear-gradient(45deg, #ffff00, #ffff00)',
            boxShadow: '0 0 20px #ffff00, 0 0 40px #ffff00, 0 0 60px #ffff00'
          },
          '20%': { 
            background: 'linear-gradient(45deg, #ff1493, #ff1493)',
            boxShadow: '0 0 20px #ff1493, 0 0 40px #ff1493, 0 0 60px #ff1493'
          },
          '40%': { 
            background: 'linear-gradient(45deg, #00ff00, #00ff00)',
            boxShadow: '0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00'
          },
          '60%': { 
            background: 'linear-gradient(45deg, #ff8c00, #ff8c00)',
            boxShadow: '0 0 20px #ff8c00, 0 0 40px #ff8c00, 0 0 60px #ff8c00'
          },
          '80%': { 
            background: 'linear-gradient(45deg, #00ffff, #00ffff)',
            boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff'
          },
          '100%': { 
            background: 'linear-gradient(45deg, #ffff00, #ffff00)',
            boxShadow: '0 0 20px #ffff00, 0 0 40px #ffff00, 0 0 60px #ffff00'
          }
        }
      }
    },
  },
  plugins: [],
}