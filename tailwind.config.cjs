const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#040404',
        obsidian: '#0d0d0f',
        bone: '#f5f1e6',
        champagne: '#f1e4c6',
        accent: '#f2c16b',
        slate: '#18181b'
      },
      fontFamily: {
        display: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        glow: '0 20px 60px rgba(242, 193, 107, 0.25)'
      },
      backgroundImage: {
        'grain': "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.2\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.08\'/%3E%3C/svg%3E')"
      }
    }
  },
  plugins: []
};
