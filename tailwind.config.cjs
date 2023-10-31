/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        siteblack: '#131519',
        siteDimBlack: '#191d23',
        siteViolet: '#7f46f0',
        siteWhite: '#e6da5d',
      },
      backgroundImage: {
        landing: "url('/src/assets/background/landing.jpg')",
        silverCanyon:"url('/src/assets/background/bud.gif')",
        sunlightCanyon:"url('/src/assets/background/fig.gif')",
        template:"url('/src/assets/background/eoaalien.gif')",
        volcanicRock:"url('/src/assets/background/saiman.gif')",
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
