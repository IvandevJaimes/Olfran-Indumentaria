module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        /* valores mapeados a variables CSS */
        white: 'var(--white)',
        black: 'var(--dark-900)',

        /* neutrales/gray utilizados en el proyecto */
        'gray-900': 'var(--dark-900)',
        'gray-800': 'var(--dark-800)',
        'gray-700': 'var(--dark-700)',
        'gray-600': 'var(--dark-600)',
        'gray-500': 'var(--muted-text)',
        'gray-400': 'var(--muted-text)',
        'gray-300': 'var(--muted-300)',

        /* paleta rosa/acento */
        'pink-50': 'var(--pink-50)',
        'pink-100': 'var(--pink-100)',
        'pink-200': 'var(--pink-200)',
        'pink-300': 'var(--pink-300)',
        'pink-400': 'var(--pink-400)',
        'pink-500': 'var(--pink-500)',
        'pink-600': 'var(--pink-600)',
        'pink-700': 'var(--pink-700)',
        'pink-800': 'var(--pink-800)',
        'pink-900': 'var(--pink-900)',

        /* utilidades del proyecto */
        bg: 'var(--bg)',
        'card-bg': 'var(--card-bg)',
        accent: 'var(--accent)',
        'accent-contrast': 'var(--accent-contrast)',
        'text-dark': 'var(--text-dark)'
      }
    }
  },
  plugins: []
}